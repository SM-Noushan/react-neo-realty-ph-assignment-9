import { Typography } from "@material-tailwind/react";

const faqs = [
  {
    title: "How do I search for properties on Neo Estate?",
    desc: "To search for properties on Neo Estate, simply navigate to the homepage and use the search bar at the top of the page. You can enter keywords such as location, property type, price range, and more to filter your search results.",
  },
  {
    title: "Can I list my property for sale or rent on Neo Estate?",
    desc: "Yes, you can list your property for sale or rent on Neo Estate. Simply click on the 'List Your Property' button on the homepage and follow the prompts to submit your property details. Our team will review your listing and publish it on our website.",
  },
  {
    title: "How do I contact the seller or landlord?",
    desc: "Once you find a property you're interested in, you can contact the seller or landlord directly through Neo Estate. Simply click on the 'Contact Seller' or 'Contact Landlord' button on the property listing page, and fill out the contact form with your details and message. The seller or landlord will receive your inquiry and respond accordingly.",
  },
  {
    title: "What should I do if I have technical issues with the website?",
    desc: "If you encounter any technical issues while using Neo Estate, please reach out to our support team for assistance. You can contact us via email at support@neoestate.com or use the 'Contact Us' form on the website. Our team will promptly address your concerns and help resolve any issues you may be experiencing.",
  },
  {
    title: "Are the property listings on Neo Estate verified?",
    desc: "Yes, we take measures to ensure that the property listings on Neo Estate are accurate and trustworthy. Our team verifies the authenticity of each listing before it is published on our website. However, we recommend conducting your own due diligence and viewing the property in person before making any decisions.",
  },
  {
    title: "How do I save properties for later viewing?",
    desc: "To save properties for later viewing on Neo Estate, you can create an account and log in to your dashboard. From there, you can bookmark your favorite listings by clicking the 'Save Property' button on the property listing page. You can then access your saved properties from your dashboard anytime.",
  },
];
export function Faq() {
  return (
    <section className="px-8 py-20">
      <div className="container mx-auto">
        <div className="mb-14 text-center ">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 text-4xl !leading-snug lg:text-[40px]"
          >
            Frequently asked questions
          </Typography>
          <Typography className="mx-auto font-normal text-[18px] !text-gray-500 lg:max-w-3xl">
            A lot of people don&apos;t appreciate the moment until it&apos;s
            passed. I&apos;m not trying my hardest, and I&apos;m not trying to
            do.
          </Typography>
        </div>
        <div className="max-w-3xl mx-auto grid gap-10">
          {faqs.map(({ title, desc }) => (
            <div key={title}>
              <Typography
                color="blue-gray"
                className="pb-6 text-[20px] font-bold"
              >
                {title}
              </Typography>
              <div className="border-t border-gray-200 pt-4">
                <Typography className="font-normal !text-gray-500">
                  {desc}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
