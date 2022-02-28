import React from 'react';
import FAQAccordian from './FAQAccordian';

function FAQ() {
  return (
    <section className="text-gray-800 dark:text-white">
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl pb-12 mx-auto text-center">
            <h2 className="text-lg font-semibold tracking-wide uppercase text-primary-600">
              Questions &amp; Answers
            </h2>
            <p className="max-w-2xl mt-4 text-md lg:mx-auto">
              <a
                href="https://timenavi.com"
                className="underline cursor-pointer text-primary-500"
              >
                Schedule a call to see how I can help your business
              </a>
            </p>
          </div>

          {/* Faqs */}
          <ul className="max-w-3xl pl-12 mx-auto">
            <FAQAccordian title="How are the Personal and Team Plan different?">
              The biggest difference is how you can collaborate with others.
              <br />
              <br />
              The Personal Plan gives you access to unlimited activities and
              timeframes so that you can understand your time better. It also
              gives you access to the Personal Dashboard and Export to Sheets
              functionality, which gives you more advanced analytics. <br />
              <br />
              The Team Plan allows you to understand your team&apos;s time
              better. You can invite people to your organization, share
              activities together and see your progress towards your business
              goals.
            </FAQAccordian>
            <FAQAccordian title="How can my team try out TimeNavi for free?">
              We want to make it easy for you to take TimeNavi for a spin with
              multiple members before you start paying. You can get started by
              creating an organization and inviting your team members. You’ll be
              enrolled in a Team Plan free trial that gives you access to all
              Team Plan features. After your trial ends, you’ll be able to
              upgrade to a paid plan.
            </FAQAccordian>

            <FAQAccordian title="How is my payment being processed?">
              We use Stripe to process your payment. It’s the same payment
              provider used by products such as Twitter, Pinterest, and Lyft. We
              do not handle your credit card information directly.
            </FAQAccordian>

            <FAQAccordian title="What admin tools come with the Team Plan?">
              On a Team plan, people in your organization can be admins or
              members. As an admin, you can create activities for your team
              members to see and edit. As a member, you can only see activities
              that you created. As an admin, you can also manage your
              organization&apos;s billing information and invite new members.
            </FAQAccordian>
            <FAQAccordian title="How does adding and removing members work?">
              Whether you&apos;re on a monthly or yearly billing schedule, your
              account may be charged on a monthly basis if you add or remove
              members. If you added members, your account will be charged a
              prorated amount based on the percentage of the billing cycle left
              at the time each member was added. If you removed members, your
              account will be credited in the same way.
            </FAQAccordian>
            <FAQAccordian title="Can I change my payment method?">
              You can change your payment method at any time in your billing
              settings.
            </FAQAccordian>
            <span
              className="block border-t border-gray-200"
              aria-hidden="true"
            />
          </ul>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
