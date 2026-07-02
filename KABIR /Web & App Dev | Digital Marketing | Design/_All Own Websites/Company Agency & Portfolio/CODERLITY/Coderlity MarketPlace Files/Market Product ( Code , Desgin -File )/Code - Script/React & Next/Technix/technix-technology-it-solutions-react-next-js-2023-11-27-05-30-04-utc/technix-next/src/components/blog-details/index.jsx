import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import BlogDetailsPostbox from "./blog-details-postbox";
import FooterContact from "@/src/layout/footers/footer-contact";
import FooterThree from "@/src/layout/footers/footer-3";

const BlogDetails = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="Blog Details" page_title="Blog Details" />
        <BlogDetailsPostbox />
        <FooterContact bg_style={true} />
      </main>
      <FooterThree />
    </>
  );
};

export default BlogDetails;
