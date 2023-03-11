import ContactForm from "@/components/website/contact/form";
import ContactInformation from "@/components/website/contact/information";
import MainLayout from "@/components/website/layout/main-layout";

const ContactPage = () => {
  return (
    <MainLayout title="Contact">
      <section className="flex flex-col justify-center items-center py-6 px-4">
        <div className="text-center space-y-2">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl uppercase font-bold">
            Contact Us
          </h1>
          <p className="text-sm lg:text-base text-gray-500 font-medium font-montserrat">
            Our Customer Service Will Answer All Your Questions
          </p>
        </div>
        <div className="grid md:grid-cols-2 overflow-hidden mt-6 w-full max-w-4xl rounded-lg border border-gray-300">
          <ContactForm />
          <ContactInformation />
        </div>
      </section>
    </MainLayout>
  );
};

export default ContactPage;
