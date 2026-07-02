import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import Sevice from '../components/service';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Sevice"}/>
            <Sevice />
        </Wrapper>
    );
};

export default index;