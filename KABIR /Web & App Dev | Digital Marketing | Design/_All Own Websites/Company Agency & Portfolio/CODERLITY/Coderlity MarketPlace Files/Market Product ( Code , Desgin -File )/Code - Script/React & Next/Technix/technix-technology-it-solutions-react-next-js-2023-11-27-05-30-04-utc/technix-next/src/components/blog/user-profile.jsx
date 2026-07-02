import { SocialLinksTwo } from '@/src/common/social-links';
import React from 'react';
import  user_img from "@assets/img/blog/user-2.jpg";
import Image from 'next/image';



const UserProfile = () => {

    const post_box_content = {
        user_name: "Rosalina D. Willaim",
        designation: <>Blogger/Photographer</>,
        user_info: <>he whimsically named Egg Canvas is the design director and photographer in New York. Why the nam</>
    }
    const {user_name, designation, user_info} = post_box_content


    return (
        <>
             <div className="sidebar__widget mb-40">
                <div className="sidebar__widget-content">
                    <div className="sidebar__about">
                        <div className="sidebar__thumb text-center">
                        <Image src={user_img} alt="theme-pure" />
                        </div>
                        <div className="sidebar__content text-center">
                        <div className="sidebar__content-title">
                            {user_name}
                        </div>
                        <span className="sidebar__content-designation">{designation}</span>
                        <p>{user_info}</p>
                        <div className="sidebar__content-social">
                            <SocialLinksTwo />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserProfile;