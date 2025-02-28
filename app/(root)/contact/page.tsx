"use client";

import { useState } from "react";
import { APP_NAME } from "@/lib/constants";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      {/* Header */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">Contact {APP_NAME}</h1>
        <p className="mt-4 text-lg text-gray-600">
          Have a question? We're here to help!
        </p>
      </section>

      {/* Contact Form */}
      <section className="mt-12 grid md:grid-cols-2 gap-8 items-start">
        {/* Store Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600">
            We're available via phone, email, or visit us at our store.
          </p>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>
              <strong>Email:</strong> support@vibesstore.com
            </li>
            <li>
              <strong>Phone:</strong> +61 452 098 078
            </li>
            <li>
              <strong>Address:</strong> 42 Walz Street, Sydney, NSW 2216
            </li>
          </ul>

          {/* Social Media Links */}
          <div className="mt-6 flex space-x-4 text-gray-600">
            <a href="#" className="hover:text-blue-500">
              <FaFacebookF size={24} />
            </a>
            <a href="#" className="hover:text-pink-500">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="hover:text-blue-700">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
