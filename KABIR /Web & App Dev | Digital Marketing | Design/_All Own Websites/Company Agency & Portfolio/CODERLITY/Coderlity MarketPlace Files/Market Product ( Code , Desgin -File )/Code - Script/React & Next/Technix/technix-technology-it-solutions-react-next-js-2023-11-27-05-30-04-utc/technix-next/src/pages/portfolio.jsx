import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import Portfolio from "../components/portfolio";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Portfolio"} />
      <Portfolio />
    </Wrapper>
  );
};

export default index;
