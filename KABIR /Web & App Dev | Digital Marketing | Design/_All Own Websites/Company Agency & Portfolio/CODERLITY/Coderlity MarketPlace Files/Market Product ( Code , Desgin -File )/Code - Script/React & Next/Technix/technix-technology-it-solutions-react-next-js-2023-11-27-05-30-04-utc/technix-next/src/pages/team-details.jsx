import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import TeamDetails from "../components/team-details";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Team Details"} />
      <TeamDetails />
    </Wrapper>
  );
};

export default index;
