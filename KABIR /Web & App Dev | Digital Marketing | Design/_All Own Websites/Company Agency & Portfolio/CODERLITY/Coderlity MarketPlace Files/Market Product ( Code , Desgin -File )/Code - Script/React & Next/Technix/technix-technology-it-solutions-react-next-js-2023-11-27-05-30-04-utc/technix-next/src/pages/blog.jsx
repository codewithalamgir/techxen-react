import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import Blog from "../components/blog";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Blog"} />
      <Blog />
    </Wrapper>
  );
};

export default index;
