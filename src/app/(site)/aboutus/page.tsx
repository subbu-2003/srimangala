import React from "react";
import { Metadata } from "next";
import HeroSub from "@/components/SharedComponent/HeroSub";
import Terms from "@/components/Terms";
import TicketSection from "@/components/Home/TicketSection";
import Privacy from "@/components/privacy";
import Paymentpolicy from "@/components/paymentpolicy";
import Aboutus from "@/components/aboutus";

export const metadata: Metadata = {
  title: "About | KP Square Publication",
};

const Page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/aboutus", text: "Payment Policy" },
  ];
  return (
      <Aboutus />
  );
};

export default Page;
