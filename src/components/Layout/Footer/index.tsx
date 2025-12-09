import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: FC = () => {
    return (
        <footer className="bg-secondary pt-20 pb-10 border-t border-dark_border">
            <div className="container">

                {/* Top Section */}
                <div className="grid md:grid-cols-4 mt-20 grid-cols-1 gap-10 pb-12 border-b border-dark_border">

                    {/* Logo + Small Description */}
                    <div>
                        <Link href="/">
                            <Image
                                src="/images/logo/kp.png"
                                alt="Logo"
                                width={50}
                                height={60}
                                className="w-16 dark:block hidden"
                            />
                        </Link>
                        <p className="text-PaleCerulean mt-4 text-base">
                            Your trusted platform for events, conferences and more.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li className="text-PaleCerulean hover:text-primary transition">
                                <Link href="/">Home</Link>
                            </li>
                            <li className="text-PaleCerulean hover:text-primary transition">
                                <Link href="/speakers">Speakers</Link>
                            </li>
                            <li className="text-PaleCerulean hover:text-primary transition">
                                <Link href="/schedule">Schedule</Link>
                            </li>
                            <li className="text-PaleCerulean hover:text-primary transition">
                                <Link href="/about">About</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Terms & Policies */}
                    <div>
                        <h3 className="text-white text-xl font-semibold mb-4">Terms & Policies</h3>
                        <ul className="space-y-2">
                            <li className="text-PaleCerulean hover:text-primary transition">
                                <Link href="/terms">Terms & Conditions</Link>
                            </li>
                            <li className="text-PaleCerulean hover:text-primary transition">
                                <Link href="/privacy">Privacy Policy</Link>
                            </li>
                             <li className="text-PaleCerulean hover:text-primary transition">
                                <Link href="/paymentpolicy">Payment Policy</Link>
                            </li>
                            
                            <li className="text-PaleCerulean hover:text-primary transition">
                                <Link href="/refundpolicy">Refund Policy</Link>
                            </li>
                             <li className="text-PaleCerulean hover:text-primary transition">
                                <Link href="/deliverypolicy">Delivery Policy</Link>
                            </li>
                             <li className="text-PaleCerulean hover:text-primary transition">
                                <Link href="/disclaimer">Disclaimer</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Icons */}
                    <div>
                        <h3 className="text-white text-xl font-semibold mb-4">Follow Us</h3>
                        <ul className="flex items-center gap-5">
                            <li>
                                <Link href="/" className="group">
                                    <svg width="26" height="27" fill="white" className="group-hover:fill-ElectricAqua" viewBox="0 0 26 27">
                                        <path d="M23.8293 1.63855H2.14412C1.40159 1.639 0.799656 2.24123 0.799805 2.98405V24.6692C0.800251 25.4118 1.40248 26.0137 2.14531 26.0135H13.8204V16.5873H10.6545V12.8977H13.8204V10.1824C13.8204 7.03366 15.7427 5.31979 18.5516 5.31979C19.8969 5.31979 21.053 5.42007 21.39 5.46485V8.75586H19.4531C17.9249 8.75586 17.629 9.48202 17.629 10.5478V12.8977H21.2829L20.8068 16.5873H17.629V26.0135H23.8293C24.5723 26.0137 25.1747 25.4116 25.1748 24.6686V2.98286C25.1745 2.24034 24.5721 1.6384 23.8293 1.63855Z"/>
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="group">
                                    <svg width="26" height="27" fill="white" className="group-hover:fill-ElectricAqua" viewBox="0 0 26 27">
                                        <path d="M24.1249 0.838745H1.87514C0.839478 0.838745 0 1.67822 0 2.71388V24.9636C0 25.9993 0.839478 26.8387 1.87514 26.8387H24.1249C25.1605 26.8387 26 25.9993 26 24.9636V2.71388C26 1.67822 25.1605 0.838745 24.1249 0.838745ZM18.9357 10.9748C18.9442 15.3033 15.9429 19.85 10.4544 19.8502C8.76929 19.8502 7.20122 19.3562 5.88071 18.5098C6.11418 18.5374 6.35182 18.5511 6.59244 18.5511C7.99051 18.5511 9.2771 18.0742 10.2985 17.2738C8.99225 17.2496 7.89093 16.3869 7.51086 15.2013C7.69276 15.2362 7.87982 15.2553 8.07164 15.2553C8.34399 15.2553 8.60782 15.2186 8.85855 15.1501C7.49321 14.8768 6.46469 13.6701 6.46469 12.2253C6.86717 12.4107 7.32698 12.5452 7.81654 12.5603C7.01535 12.0257 6.48869 11.1118 6.48869 10.0766C6.48869 9.52988 6.63647 9.0177 6.89276 8.57674C8.36423 10.3822 10.5633 11.5697 13.0432 11.6944C12.9921 11.4758 12.9657 11.2481 12.9657 11.014C12.9657 9.36682 14.3021 8.03044 15.9499 8.03044C16.8082 8.03044 17.5834 8.39325 18.1279 8.97327C18.8077 8.83917 19.446 8.59082 20.0227 8.24904C19.7995 8.9455 19.3266 9.52988 18.7105 9.89943C19.3141 9.82722 19.8894 9.66714 20.424 9.4295C20.0247 10.028 19.5182 10.5536 18.9357 10.9748Z"/>
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-6 text-center text-PaleCerulean">
                    © {new Date().getFullYear()} All rights reserved.
                </div>

            </div>
        </footer>
    );
};

export default Footer;
