import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import Team from '../components/team';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Team"} />
            <Team />
        </Wrapper>
    );
};

export default index;