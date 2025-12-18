import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-yellow-100 pt-16 pb-8 border-t">
      <div className="container mx-auto px-6">

        {/* Top Grid */}
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-10 text-gray-700">
          {/* Find Stores */}
          <div>
            <h4 className="font-semibold mb-4">Find Stores</h4>
            <ul className="space-y-2">
              {["Madurai", "Vadipatti"].map((city) => (
                <li key={city}>{city}</li>
              ))}
            </ul>
          </div>

          {/* Quick Links (Updated) */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/aboutus">About</Link></li>
              <li><Link href="/service">Service</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </div>

          {/* Support (Updated) */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link href="/contact">Help</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Terms */}
          <div>
            <h4 className="font-semibold mb-4">Terms</h4>
            <ul className="space-y-2">
              <li className="capitalize">
                <Link href="/terms">Terms & Conditions</Link>
              </li>
              <li className="capitalize">
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li className="capitalize">
                <Link href="/paymentpolicy">Shipping & Return Policy</Link>
              </li>
              <li className="capitalize">
                <Link href="/refundpolicy">Product Catalog Pdf Content</Link>
              </li>
            </ul>
          </div>

          {/* Contact + Social */}
          <div className="space-y-4"> 
            <div className="flex items-center gap-2">
              <span>+91 98403 41124</span>
            </div>

            <div className="flex items-center gap-2">
              <span>sales@srimangala.com</span>
            </div>

            {/* Social Icons */}
            <div>
              <h4 className="font-semibold mt-4 mb-2">Follow us</h4>
              <div className="flex gap-3">
                {["instagram", "facebook", "gmb", "youtube", "threads"].map(
                  (icon) => (
                    <Link key={icon} href="#">
                      <Image
                        src={`/icons/${icon}.png`}
                        alt={icon}
                        width={28}
                        height={28}
                        className="cursor-pointer"
                      />
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-5 pt-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm">

              {/* Left */}
              <p className="text-PaleCerulean text-center md:text-left">
                © {new Date().getFullYear()}{" "}
                <span className="font-semibold text-black">Sri Mangala</span>{" "}
                All Rights Reserved
              </p>

              {/* Right */}
              <p className="flex items-center gap-1 text-PaleCerulean text-center">
                Made with
                <span className="text-red-500">❤️</span>
                by
                <Link
                  href="https://e2o.in/"
                  target="_blank"
                  className="font-semibold text-primary hover:underline"
                >
                  E2o Tech
                </Link>
              </p>

            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
