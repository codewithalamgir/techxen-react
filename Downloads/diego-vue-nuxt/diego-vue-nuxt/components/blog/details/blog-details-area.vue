<template>
  <div>

    <!-- blog area start -->
    <div class="blog-details__area blog-details__customize pt-200">
         <div class="container">
            <div class="row">
               <div class="blog-list__title-box">
                  <div class="blog-list__text-sm">
                     <span class="category">Blog</span>
                     <i class="fa-regular fa-angle-right"></i>
                     <span>{{removeBrTag(blog.title)}}</span>
                  </div>
                  <h4 class="blog-list__title tp-char-animation" v-html="blog.title"></h4>
               </div>
               <div class="blog-details__meta mb-70">
                  <span>
                     <img src="/images/users/blog-list-avata-1.png" alt="">
                     <i>Polina Viola</i>
                  </span>
                  <span>{{ blog.date }}</span>
                  <span>2 Comments</span>
               </div>
            </div>
         </div>
         <div class="blog-details__big-thumb text-center cursor-style">
            <img data-speed="0.7" src="/images/blog/blog-details-big-img-2.jpg" alt="">
         </div>
      </div>
      <!-- blog area end -->

      <!-- postbox area start -->
      <section class="postbox-details__area pt-90 pb-120">
         <div class="container">
            <div class="row">
               <div class="col-xxl-8 col-xl-8 col-lg-8">
                  <div class="postbox-details__wrapper  tp-blog-sidebar-sticky-area tp-blog-social-sticky-area p-relative">
                     <div class="postbox-details__top-social tp-blog-social-sticky d-none d-xxl-inline-flex">
                        <a href="#">
                           <span>
                              <svg-fb/>
                           </span>
                        </a>
                        <a href="#">
                           <span>
                              <svg-twitter/>
                           </span>
                        </a>
                        <a href="#">
                           <span>
                              <svg-in/>
                           </span>
                        </a>
                     </div>
                     <div class="postbox-details__text">
                        <p class="tp-dropcap pb-10">Q Proin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget viverra egestas nisi in consequat. As technology continues to advance at a rapid pace, the way we work and interact with our devices is also changing. One area that has seen significant growth in recent years is the intersection of user experience (UX) and user interface (UI) design, artificial intelligence (AI), and the modern work station.
                        </p>
                        <p class="pb-20">In this blog post, we will explore how these three elements are coming together to revolutionize the workplace.Nulla aliquam rerum nesciunt velit iusto. Deserunt fugiat tempora sed voluptatibus neque suscipit minima qui. Beatae ipsa autem adipisci. Iusto numquam maxime vitae natus molestiae.</p>
                     </div>
                     <h4 class="postbox-details__title pb-15">What's up with UX and UI?</h4>
                     <div class="postbox-details__text pb-40">
                        <p>UX/UI design refers to the process of designing products, such as software, that are easy to use and intuitive for the user. This includes everything from the layout of buttons and menus to the overall aesthetic of the product. In the workplace, good UX/UI design can make a huge difference in terms of productivity and user satisfaction.</p>
                     </div>
                     <div class="postbox-details__thumb pb-55">
                        <img src="/images/blog/blog-details-2.jpg" alt="">
                     </div>
                     <div class="postbox-details__text pb-20">
                        <p>AI, on the other hand, is the simulation of human intelligence in machines. It has the potential to automate many tasks and make them more efficient. In the workplace, AI can be used to assist with tasks such as scheduling, data analysis, and customer service.</p>
                     </div>
                     <div class="postbox-details__qoute p-relative">
                        <blockquote>
                           <div class="postbox-details__qoute-icon">
                              <span>
                                 <svg-qoute/>                                    
                              </span>
                           </div>
                           <div class="postbox-details__qoute-text">
                              <p>For example, a work station with a good UX/UI design and
                                 AI-powered software can make it easier for employees to
                                 access important information.
                              </p>
                           </div>
                        </blockquote>
                     </div>
                     <div class="postbox-details__text pt-20 pb-20">
                        <p>Additionally, AI-powered customer service can make it easier for employees to help customers and resolve issues. In conclusion, the intersection of UX/UI design, AI, and the modern work station is revolutionizing the way we work. By making the workplace more efficient, productive, and user-friendly, these three elements are helping to improve the overall work experience for employees and customers alike."</p>
                     </div>
                     <div class="tagcloud pb-35">
                        <a href="#">symphony</a>
                        <a href="#">nokia</a>
                        <a href="#">tech</a>
                        <a href="#">Samsung</a>
                        <a href="#">Alcatel</a>
                     </div>
                     <div class="postbox-details__author-info-box mb-95 p-relative">
                        <div class="postbox-details__author-wrap d-flex align-items-center">
                           <div class="postbox-details__author-avata">
                              <img src="/images/users/user24.jpg" alt="">
                           </div>
                           <div class="postbox-details__author-content">
                              <h4>Alison Baker</h4>
                              <p>Digital content wrangler I UX enthusiast I Recovering educator I <br> Shameless nerd & GIF connoisseur I Hockey fan.</p>
                           </div>
                        </div>
                        <div class="postbox-details__author-social-wrap">
                           <div class="postbox-details__author-social-link">
                              <a href="#">
                                 <span>
                                    <svg-fb/>
                                 </span>
                              </a>
                              <a href="#">
                                 <span>
                                    <svg-twitter/>
                                 </span>
                              </a>
                              <a href="#">
                                 <span>
                                    <svg-in/>
                                 </span>
                              </a>
                           </div>
                        </div>
                     </div>
                     <div class="postbox__comment mb-95">
                        <h3 class="postbox__comment-title">3 Comments</h3>
                        <!-- comments -->
                        <blog-details-comments/>
                        <!-- comments -->
                     </div>
                     <div class="postbox__comment-form">
                        <h3 class="postbox__comment-form-title">Leave a Reply</h3>
                        <!-- form -->
                        <form-blog-reply/>
                        <!-- form -->
                     </div>
                  </div>
               </div>
               <div class="col-xxl-4 col-xl-4 col-lg-4">
                  <!-- blog sidebar -->
                  <blog-sidebar cls=" pb-120" />
                  <!-- blog sidebar -->
               </div>
               <div class="row">
                  <div class="col-xl-12">
                    <!-- related blogs -->
                    <blog-details-related-blogs/>
                    <!-- related blogs -->
                  </div>
               </div>
            </div>
         </div>
      </section>
      <!-- postbox area end -->
  </div>
</template>

<script setup lang="ts">
import type { IBlogDT } from '@/types/blog-d-t';

defineProps<{blog:IBlogDT}>();

onMounted(() => {
   setTimeout(() => {
      useAnimationTitle();
      useCharAnimation();
      useBlogAnimation();
   },150)
});

function removeBrTag (str:string) {
   return str.replace(/<br>/g, "");
}
</script>