import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import HomeTwo from '../components/homes/home-2';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle="Technix" />
            <HomeTwo />
        </Wrapper>
    );
};

export default index;