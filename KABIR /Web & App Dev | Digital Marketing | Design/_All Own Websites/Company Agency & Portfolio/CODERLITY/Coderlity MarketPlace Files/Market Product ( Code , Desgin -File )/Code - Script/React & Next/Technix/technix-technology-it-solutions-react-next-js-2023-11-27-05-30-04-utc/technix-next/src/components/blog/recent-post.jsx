import Link from 'next/link';
import React from 'react';


import thumb_1 from "@assets/img/blog/details/side-1.jpg";
import thumb_2 from "@assets/img/blog/details/side-2.jpg";
import thumb_3 from "@assets/img/blog/details/side-3.jpg";
import Image from 'next/image';
import Calendar from '@/src/svg/calendar';

const recent_post_data = [
    {
        id: 1, 
        img: thumb_1,
        date: "July 21, 2021",
        title: <>The Benefits of Hiring a Cleaning </>,
    },
    {
        id: 2, 
        img: thumb_2,
        date: "July 21, 2021",
        title: <>How Often Should You Schedule Professional</>,
    },
    {
        id: 3, 
        img: thumb_3,
        date: "July 21, 2021",
        title: <>How to Keep Your Home Safe </>,
    },
]

const RecentPost = () => {
    return (
        <>
           <div className="sidebar__widget mb-30">
            <h3 className="sidebar__widget-title">Recent Post</h3>
            <div className="sidebar__widget-content">
                <div className="sidebar__post rc__post">
                    {recent_post_data.map((item, i) => 
                        <div key={i} className="rc__post mb-20 d-flex align-items-center">
                            <div className="rc__post-thumb mr-20">
                                <Link href="/blog-details"><Image src={item.img} alt="theme-pure" /></Link>
                            </div>
                            <div className="rc__post-content">
                                <div className="rc__meta">
                                    <span><Calendar /> {" "}{item.date}</span>
                                </div>
                                <h3 className="rc__post-title">
                                    <Link href="/blog-details">{item.title}</Link>
                                </h3>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
        </>
    );
};

export default RecentPost;