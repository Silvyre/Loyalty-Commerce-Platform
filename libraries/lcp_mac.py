import base64
import hashlib
import hmac
import httplib
import os
import time
import urlparse


def generate_ext(content_type, body):
    """Implements the notion of the ext as described in
    http://tools.ietf.org/html/draft-ietf-oauth-v2-http-mac-02#section-3.1"""

    if content_type is not None and body is not None and len(content_type) > 0 and len(body) > 0:
        content_type_plus_body = content_type + body
        content_type_plus_body_hash = hashlib.sha1(content_type_plus_body)
        ext = content_type_plus_body_hash.hexdigest()
    else:
        ext = ""
    return ext


def build_normalized_request_string(ts, nonce, http_method, host, port, request_path, ext):
    """Implements the notion of a normalized request string as described in
    http://tools.ietf.org/html/draft-ietf-oauth-v2-http-mac-02#section-3.2.1"""

    normalized_request_string = \
        ts + '\n' + \
        nonce + '\n' + \
        http_method + '\n' + \
        request_path + '\n' + \
        host + '\n' + \
        str(port) + '\n' + \
        ext + '\n'
    return normalized_request_string


def generate_nonce():
    """Generates a random string intend for use as a nonce when computing an
    HMAC."""
    return base64.b64encode(os.urandom(8))


def generate_signature(mac_key, normalized_request_string):
    """Generate a request's MAC given a normalized request string (aka
    a summary of the key elements of the request and the mac key (shared
    secret)."""
    # Add padding to the MAC key if needed
    mac_key += '=' * (4 - len(mac_key) % 4)

    # Base64 decode the MAC key using URL-safe alphabet
    mac_key = base64.urlsafe_b64decode(mac_key)

    return base64.b64encode(
        hmac.new(mac_key, normalized_request_string, hashlib.sha1).digest())


def generate_authorization_header_value(
        http_method,
        url,
        mac_key_identifier,
        mac_key,
        content_type,
        body):
    url_parts = urlparse.urlparse(url)
    port = url_parts.port
    if not port:
        if url_parts.scheme == 'https':
            port = str(httplib.HTTPS_PORT)
        else:
            port = str(httplib.HTTP_PORT)
    ts = str(int(time.time()))
    nonce = generate_nonce()
    ext = generate_ext(content_type, body)
    normalized_request_string = build_normalized_request_string(
        ts,
        nonce,
        http_method,
        url_parts.hostname,
        port,
        url_parts.path,
        ext)

    signature = generate_signature(mac_key, normalized_request_string)

    return 'MAC id="%s", ts="%s", nonce="%s", ext="%s", mac="%s"' % (
        mac_key_identifier,
        ts,
        nonce,
        ext,
        signature)
