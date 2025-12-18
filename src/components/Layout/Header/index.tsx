"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useRef, useState } from "react";
import { headerData } from "../Header/Navigation/menuData";
import Logo from "./Logo";
import HeaderLink from "../Header/Navigation/HeaderLink";
import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";
import { useTheme } from "next-themes";
import { SuccessfullLogin } from "@/components/Auth/AuthDialog/SuccessfulLogin";
import { FailedLogin } from "@/components/Auth/AuthDialog/FailedLogin";
import { UserRegistered } from "@/components/Auth/AuthDialog/UserRegistered";
import AuthDialogContext from "@/app/context/AuthDialogContext";

const Header: React.FC = () => {
  const pathUrl = usePathname();
  const { theme, setTheme } = useTheme();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen]);

  const authDialog = useContext(AuthDialogContext);

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full h-24 bg-yellow-100 transition-all ${
          sticky ? "shadow-lg dark:shadow-darkmd" : "shadow-none"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Logo />

            {/* Desktop Menu */}
            <ul className="hidden lg:flex flex-1 items-center justify-center gap-8 py-6">
              {headerData.map((item, index) => (
                <HeaderLink key={index} item={item} />
              ))}
            </ul>

            {/* Right Action */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden lg:block btn_outline btn-2 hover-outline-slide-down rounded-lg"
              >
                <span className="!py-2 !px-4">Contact Us</span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setNavbarOpen(!navbarOpen)}
                className="block lg:hidden p-2 rounded-lg"
                aria-label="Toggle mobile menu"
              >
                <span className="block w-6 h-0.5 bg-black"></span>
                <span className="block w-6 h-0.5 bg-black mt-1.5"></span>
                <span className="block w-6 h-0.5 bg-black mt-1.5"></span>
              </button>
            </div>

          </div>
        </div>

        {/* Overlay */}
        {navbarOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" />
        )}

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0 h-full w-full max-w-64 bg-[#efe0d2] shadow-lg transform transition-transform duration-300 z-50 ${
            navbarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-bold">Menu</h2>
            <button className="text-black" onClick={() => setNavbarOpen(false)}>
              ✕
            </button>
          </div>

          <nav className="flex flex-col p-4">
            {headerData.map((item, index) => (
              <MobileHeaderLink key={index} item={item} />
            ))}

            {/* Mobile Contact */}
            <Link
              href="/contact"
              className="mt-6 text-center border border-primary text-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white"
              onClick={() => setNavbarOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>

        {/* Auth Alerts (unchanged) */}
        <div
          className={`fixed top-6 end-1/2 translate-x-1/2 z-50 ${
            authDialog?.isSuccessDialogOpen ? "block" : "hidden"
          }`}
        >
          <SuccessfullLogin />
        </div>

        <div
          className={`fixed top-6 end-1/2 translate-x-1/2 z-50 ${
            authDialog?.isFailedDialogOpen ? "block" : "hidden"
          }`}
        >
          <FailedLogin />
        </div>

        <div
          className={`fixed top-6 end-1/2 translate-x-1/2 z-50 ${
            authDialog?.isUserRegistered ? "block" : "hidden"
          }`}
        >
          <UserRegistered />
        </div>
      </header>
    </>
  );
};

export default Header;
