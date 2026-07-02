import post_data from '@/src/data/post-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
 
import RecentPost from './recent-post';
import Category from './category';
import Tags from './tags';
import SearchArea from './search-area';
import UserProfile from './user-profile';

 

const PostboxArea = () => {
    return (
        <>
            <section className="postbox__area pt-120 pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-8 col-xl-8 col-lg-8">
                     <div className="postbox__wrapper">
                        {post_data.map((item, i) => 
                            <article key={i} className="postbox__item format-image mb-50 transition-3">
                                <div className="postbox__thumb w-img">
                                <Link href="/blog-details">
                                    <Image src={item.thumb} alt="theme-pure" />
                                </Link>
                                <div className="postbox__tag">
                                    <p>{item.catagory}</p>
                                </div>
                                </div>
                                <div className="postbox__content">
                                <div className="postbox__meta">
                                    <span><i className="fa-light fa-calendar-days"></i>{item.date}</span>
                                    <span><Link href="#"><i className="fal fa-comments"></i> Comments ({item.comments})</Link></span>
                                    <span><Link href="#"><i className="fa-regular fa-clock"></i>{item.upload_time}</Link></span>
                                </div>
                                <h3 className="postbox__title">
                                    <Link href="/blog-details">{item.title}</Link>
                                </h3>
                                <div className="postbox__text">
                                    <p>{item.description}</p>
                                </div>
                                <div className="postbox__read-more">
                                    <Link href="/blog-details" className="tp-btn">read more</Link>
                                </div>
                                </div>
                            </article>
                        
                        )}
                        <div className="basic-pagination text-center">
                           <nav>
                              <ul>
                                 <li>
                                    <Link href="/blog">
                                       <i className="fa-regular fa-angles-left"></i>
                                    </Link>
                                 </li>
                                 <li>
                                    <Link href="/blog">1</Link>
                                 </li>
                                 <li>
                                    <span className="current">2</span>
                                 </li>
                                 <li>
                                    <Link href="/blog">3</Link>
                                 </li>
                                 <li>
                                    <Link href="/blog">
                                       <i className="fa-regular fa-angles-right"></i>
                                    </Link>
                                 </li>
                              </ul>
                            </nav>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4">
                     <div className="sidebar__wrapper"> 
                        <UserProfile /> 
                        <SearchArea />
                        <RecentPost />
                        <Category />
                        <Tags /> 
                     </div>
                  </div>
               </div>
            </div>
         </section>
        </>
    );
};

export default PostboxArea;