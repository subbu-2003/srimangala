import React from "react";
import { Metadata } from "next";
import HeroSub from "@/components/SharedComponent/HeroSub";
import Terms from "@/components/Terms";
import TicketSection from "@/components/Home/TicketSection";
import Privacy from "@/components/privacy";
import Services from "@/components/service";

export const metadata: Metadata = {
  title: "Services | KP Square Publication",
};

const Page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/service", text: "Policy and Privacy" },
  ];
  return (
  

      <Services />

      
  );
};

export default Page;
