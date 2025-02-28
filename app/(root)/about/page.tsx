import Image from "next/image";
import { APP_NAME } from "@/lib/constants";

const AboutPage = () => {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      {/* Header Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">About {APP_NAME}</h1>
        <p className="mt-4 text-lg text-gray-600">
          Elevating your shopping experience with quality products and seamless
          service.
        </p>
      </section>

      {/* Brand Story */}
      <section className="mt-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Our Story</h2>
          <p className="mt-4 text-gray-600">
            {APP_NAME} started with a vision to bring premium, handpicked
            products to customers who value quality and style. We curate the
            best items and deliver them right to your doorstep with trust and
            reliability.
          </p>
        </div>
        <Image
          src="/images/about-us.jpg" // Make sure to have this image in public/images
          alt="Our Store"
          width={500}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </section>

      {/* Why Choose Us */}
      <section className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Why Choose Us?</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Quality Products</h3>
            <p className="text-gray-600 mt-2">
              We source only the best items, ensuring premium quality.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Fast Delivery</h3>
            <p className="text-gray-600 mt-2">
              We guarantee quick and safe delivery of all your orders.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Customer Support</h3>
            <p className="text-gray-600 mt-2">
              Our support team is here to assist you 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">
          Join Our Community
        </h2>
        <p className="mt-4 text-gray-600">
          Stay updated with the latest trends and exclusive offers.
        </p>
        <a
          href="/shop"
          className="mt-6 inline-block bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition"
        >
          Shop Now
        </a>
      </section>
    </main>
  );
};

export default AboutPage;
