import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import HomeThree from '../components/homes/home-3';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle="Technix" /> 
            <HomeThree />           
        </Wrapper>
    );
};

export default index;