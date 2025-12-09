"use client";

const Terms = () => {
  return (
    <section className="w-full py-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto bg-dark shadow-lg rounded-2xl p-8 md:p-12">

        <h1 className="text-3xl md:text-4xl font-bold dark:text-dark mb-6">
          Terms & Conditions
        </h1>
        <p className="dark:text-dark mb-8">
          Welcome to <span className="font-semibold">KP Square Publication</span>.  
          Please read the following terms carefully before using our services.
        </p>
        <div className="space-y-6 dark:text-dark">

          <div>
            <h2 className="text-xl font-semibold mb-2 dark:text-dark">1. Acceptance of Terms</h2>
            <p>
              By accessing or using our website and services, you agree to these Terms 
              & Conditions and our Privacy Policy.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 dark:text-dark">2. Service Usage</h2>
            <p>
              KP Square Publication provides printing, binding, publishing, and 
              digital services. You agree to use our services lawfully and respectfully.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 dark:text-dark">3. Orders & Payments</h2>
            <p>
              All payments must be completed before order processing. Prices may vary 
              based on customization or bulk requirements.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 dark:text-dark">4. Refund & Cancellation</h2>
            <p>
              Once an order goes into production, cancellation may not be possible. 
              Refunds are applicable only for defective or incorrect items.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 dark:text-dark">5. Copyright Policy</h2>
            <p>
              You must ensure that any content submitted for printing does not violate 
              copyright rules. KP Square Publication is not responsible for misuse.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 dark:text-dark">6. Changes to Terms</h2>
            <p>
              We may update these Terms & Conditions occasionally. Please review them 
              periodically.
            </p>
          </div>

        </div>

        <p className="mt-10 dark:text-dark text-sm">
          If you have questions, contact us at  
          <span className="font-semibold"> support@kpsquarepublication.com</span>.
        </p>

      </div>
    </section>
  );
};

export default Terms;
