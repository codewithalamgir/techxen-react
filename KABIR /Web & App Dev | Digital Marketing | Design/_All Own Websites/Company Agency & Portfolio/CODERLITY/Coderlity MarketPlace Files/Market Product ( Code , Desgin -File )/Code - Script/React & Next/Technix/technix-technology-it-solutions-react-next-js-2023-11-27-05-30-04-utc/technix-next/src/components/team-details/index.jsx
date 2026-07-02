import Breadcrumb from '@/src/common/breadcrumb/breadcrumb';
import HeaderOne from '@/src/layout/headers/header';
import React from 'react';
import TeamDetailsArea from './team-details-area';
import FooterContact from '@/src/layout/footers/footer-contact';
import FooterThree from '@/src/layout/footers/footer-3';

const TeamDetails = () => {
    return (
        <>
            <HeaderOne />
            <main>
                <Breadcrumb top_title="IT Advisor"  page_title="Team Details" />
                <TeamDetailsArea />
                <FooterContact bg_style={true} />
            </main>
            <FooterThree />
        </>
    );
};

export default TeamDetails;