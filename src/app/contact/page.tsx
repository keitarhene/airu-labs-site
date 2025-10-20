import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Airu Labs",
  description: "This is Contact Page for Airu Labs",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Get in touch with the Airu Labs team for collaborations, research partnerships, or general inquiries. We’re always open to connecting with innovators and organizations shaping the future of AI."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
