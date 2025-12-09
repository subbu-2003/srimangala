"use client";

const Disclaimer = () => {
  return (
    <section className="w-full py-20 px-6 md:px-20 dark:bg-darkmode">
      <div className="max-w-4xl mx-auto bg-dark shadow-lg rounded-2xl p-8 md:p-12">

        {/* HEADING */}
        <h1 className="text-3xl md:text-4xl font-bold dark:text-white mb-6">
          Disclaimer
        </h1>

        {/* INTRO */}
        <p className="dark:text-white mb-8">
          KP Square Publication operates as a service provider strictly based on customer inputs. 
          We do not alter, modify, or proofread content submitted for printing or scanning. 
          Customers bear full responsibility for the legality, originality, and accuracy of submitted documents.
        </p>

        <div className="space-y-6 dark:text-white">

          <div>
            <h2 className="text-xl font-semibold mb-2 dark:text-white">We Are Not Liable For:</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Content-related issues (copyright, legality, authenticity)</li>
              <li>Printing errors resulting from poorly formatted or low-resolution files</li>
              <li>Technical interruptions, unexpected delays, or system failures</li>
              <li>Loss or corruption of files due to customer-side issues</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 dark:text-white">
              Policy & Information Updates
            </h2>
            <p>
              All information on the website, including pricing and policies, may be updated without prior notice.
              Customers are encouraged to review policies periodically.
            </p>
          </div>

        </div>

        {/* CONTACT */}
        <p className="mt-10 dark:text-white text-sm">
          For any queries, contact us at  
          <span className="font-semibold"> support@kpsquarepublication.com</span>.
        </p>

      </div>
    </section>
  );
};

export default Disclaimer;
