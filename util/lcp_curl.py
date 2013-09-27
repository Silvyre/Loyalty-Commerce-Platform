#!/usr/bin/env python
"""Wrapper around curl to add HMAC signatures."""
import os
import subprocess
import sys

from lcp_mac import generate_authorization_header_value


def get_http_method(argv):
    if '-X' not in argv:
        return 'GET'
    i = argv.index('-X')
    return argv[i+1]


def get_url(argv):
    for arg in argv:
        if arg.startswith('http'):
            return arg


def get_body(argv):
    if '-d' not in argv:
        return None
    i = argv.index('-d')
    return argv[i+1]


def get_creds(argv):
    i = argv.index('-u')
    return argv[i+1].split(':')


if __name__ == '__main__':
    if '-u' not in sys.argv:
        exit("Usage: %s -u <macKeyIdentifier>:<macKey> [curl options...] <url>" % os.path.basename(__file__))

    method = get_http_method(sys.argv)
    if method in ['POST', 'PUT']:
        content_type = "application/json"
    else:
        content_type = ''

    key_id, shared_secret = get_creds(sys.argv)
    url = get_url(sys.argv)
    auth_hdr_value = generate_authorization_header_value(
        method,
        url,
        key_id,
        shared_secret,
        content_type,
        get_body(sys.argv))

    cmdline = ["curl"]
    cmdline += ["-H", "Authorization: %s" % auth_hdr_value]
    if content_type:
        cmdline += ["-H", "Content-Type: %s" % content_type]
    cmdline += sys.argv[1:]
    print "Executing: ", ' '.join(cmdline)
    subprocess.call(cmdline)
