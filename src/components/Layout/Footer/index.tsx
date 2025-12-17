import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#efe0d2] pt-16 pb-8 border-t">
      <div className="container mx-auto px-6">

        {/* Top Grid */}
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-10 text-gray-700">

          {/* Find Stores */}
          <div>
            <h4 className="font-semibold mb-4">Find Stores</h4>
            <ul className="space-y-2">
              {["Bangalore", "Gurgaon", "New Delhi", "Chennai", "Hyderabad", "Pune"].map(city => (
                <li key={city}>{city}</li>
              ))}
            </ul>
          </div>

          {/* Our Company */}
          <div>
            <h4 className="font-semibold mb-4">Our Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about">About us</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>Help</li>
              <li>Business Solutions</li>
              <li>Find Stores</li>
              <li>My Account</li>
              <li>Track Order</li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="font-semibold mb-4">Important Links</h4>
            <ul className="space-y-2">
              <li>Privacy Policy</li>
              <li>Delivery & Return Policy</li>
              <li>Terms & conditions</li>
            </ul>
          </div>

          {/* Contact + Social */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              
              <span>+91 951 373 4374</span>
            </div>

            <div className="flex items-center gap-2">
          
              <span>care@printo.in</span>
            </div>

            {/* Social Icons */}
            <div>
              <h4 className="font-semibold mt-4 mb-2">Follow us</h4>
              <div className="flex gap-3">
                {["instagram", "facebook", "x", "linkedin", "pinterest"].map(icon => (
                  <Image
                    key={icon}
                    src={`/icons/${icon}.png`}
                    alt={icon}
                    width={28}
                    height={28}
                    className="cursor-pointer"
                  />
                ))}
              </div>
            </div>

            {/* App Buttons */}
            <div className="flex gap-3 mt-4">
              <Image src="/images/google-play.png" alt="Google Play" width={120} height={40} />
              <Image src="/images/app-store.png" alt="App Store" width={120} height={40} />
            </div>
          </div>

        </div>

        {/* Payment Icons */}
        <div className="flex justify-center gap-6 mt-10">
          <Image src="/images/payments/visa.png" alt="Visa" width={60} height={40} />
          <Image src="/images/payments/mastercard.png" alt="Mastercard" width={60} height={40} />
          <Image src="/images/payments/upi.png" alt="UPI" width={60} height={40} />
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm mt-6">
          © 2025 Printo Document Services Pvt. Ltd.. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
