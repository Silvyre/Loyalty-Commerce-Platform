
package com.points.lcp.samples.lpapi;

import java.io.Closeable;
import java.net.URI;
import java.util.Scanner;

import org.glassfish.jersey.media.multipart.MultiPartFeature;
import org.glassfish.jersey.server.ResourceConfig;
import org.glassfish.jersey.simple.SimpleContainerFactory;

import com.points.lcp.samples.lpapi.impl.TransactResourceImpl;
import com.points.lcp.samples.lpapi.impl.ValidateMemberResourceImpl;

/**
 * <p>Main class.</p>
 *
 * @author kor
 * @version $Id: $Id
 */
public class Main
{
    /**
     * <p>main.</p>
     *
     * @param args an array of {@link java.lang.String} objects.
     * @throws java.lang.Exception if any.
     */
    @SuppressWarnings("resource")
    public static void main(final String[] args) throws Exception
    {
        final ResourceConfig config = new ResourceConfig();
        config.register(ValidateMemberResourceImpl.class);
        config.register(TransactResourceImpl.class);
        config.register(MultiPartFeature.class);

        final Closeable simpleContainer = SimpleContainerFactory.create(new URI("http://0.0.0.0:59854"),
            config);

        System.out.println("Strike ENTER to stop...");
        new Scanner(System.in).nextLine();

        simpleContainer.close();

        System.out.println("Bye!");
        System.exit(0);
    }
}
