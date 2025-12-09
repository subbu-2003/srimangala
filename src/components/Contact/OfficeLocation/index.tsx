import React from "react";
import Link from "next/link";

const Location = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
  ];
  return (
    <>
      <section className="md:py-24 py-10 dark:bg-darkmode">
        <div className="container">

  {/* Office Block */}
  <div className="grid lg:grid-cols-9 md:grid-cols-6 grid-cols-1 xl:gap-30 gap-0 border-b border-solid border-white border-opacity-50 pb-11 dark:border-dark_border">
    
    {/* Office Name */}
    <div className="col-span-3">
      <h2 className="text-secondary dark:text-white max-w-219 sm:text-[40px] sm:leading-[3.4rem] text-[28px] leading-[2.25rem] font-bold">
        KP Square Publication
      </h2>
    </div>

    {/* Address */}
    <div className="col-span-3">
      <p className="sm:text-2xl text-xl text-secondary dark:text-darktext font-normal leading-10">
        176, Block 1st Street,<br />
        Opp Ayyappan Temple,<br />
        Near Tower Park Backside,<br />
        Anna Nagar, Chennai – 600040
      </p>
    </div>

    {/* Email & Phone */}
    <div className="col-span-3">
      <Link
        href="mailto:kpsquare3@gmail.com"
        className="sm:text-2xl text-xl text-secondary dark:text-SereneSky font-medium underline hover:dark:text-white hover:text-RegalBlue"
      >
        kpsquare3@gmail.com
      </Link>

      <Link
        href="tel:7502802800"
        className="sm:text-2xl text-xl text-secondary dark:text-primary flex items-center gap-2 hover:text-opacity-100 w-fit hover:dark:text-white"
      >
        <span className="text-primary">Call</span>7502802800
      </Link>
    </div>
  </div>

</div>

      </section>
    </>
  );
};

export default Location;
