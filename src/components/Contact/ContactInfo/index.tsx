import React from "react";
import Link from "next/link";

const ContactInfo = () => {
    return (
        <>
            <section className="dark:bg-darkmode lg:pt-20 pt-16 lg:pb-24 pb-10">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
                    <div className="flex md:flex-row flex-col lg:items-center items-start justify-center md:gap-28 gap-8">
                    
                       
                    </div>
                    <div className="md:pt-28 pt-11 md:pb-28 pb-16">
                        <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.488239931945!2d80.2121571!3d13.0876874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f6d5f3f9b17%3A0x4ea96f1f4175a5a3!2sAyyappan%20Temple%20Anna%20Nagar!5e0!3m2!1sen!2sin!4v1733835930001!5m2!1sen!2sin"
  width="1114"
  height="477"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="rounded-lg w-full"
></iframe>

                    </div>
                </div>
                <div className="border-b border-solid  dark:border-dark_border"></div>
            </section>
        </>
    );
};

export default ContactInfo;
