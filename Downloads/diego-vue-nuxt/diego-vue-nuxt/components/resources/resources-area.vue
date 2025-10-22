<template>
  <section class="tp-pcb-area pt-80 pb-70">
      <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-6">
              <div class="tp-section-title-wrapper mb-30 text-start text-md-center">
                  <div class="tp-section-title-inner tp_title_anim p-relative">
                    <span class="tp-section-subtitle">Advantage</span>
                    <h3 class="tp-section-title">Resources for <br> growth</h3>
                  </div>
              </div>
            </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
            <div class="col-xl-12">
              <div class="tp-pcb-tab blog-btn-tab mb-80 d-flex justify-content-center">
                  <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li v-for="(tab,i) in tabs" :key="i" class="nav-items" role="presentation">
                      <button @click="handleActiveTab($event,tab.id)" :class="`nav-links ${tab.id === 'home' ? 'active' : ''}`" :id="`${tab.id}-tab`" data-bs-toggle="tab" :data-bs-target="`#${tab.id}`" type="button" role="tab" :aria-controls="`${tab.id}`" :aria-selected="`${tab.id === 'home' ? 'true' : 'false'}`">{{tab.title}}</button>
                    </li>
                   </ul>                           
                  <span ref="marker" id="blog-btn-bg"></span>
              </div>
            </div>
        </div>
        <div class="tp-pcb-tab-wrapper">
            <div class="row">
              <div class="tab-content" id="myTabContent">

                  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <!-- pricing area -->
                    <pricing-one />
                    <!-- pricing area -->
                  </div>

                  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <div class="tp-pcb-inner pl-70 pr-70">
                        <div class="row gx-50">
                          <div v-for="item in course_data" :key="item.id" class="col-xl-6 col-lg-6 mb-70">
                              <div class="tp-course-item">
                                <div class="tp-course-thumb-wrap p-relative">
                                    <div class="tp-course-thumb fix">
                                      <nuxt-link href="/contact">
                                          <img class="w-100" :src="item.img" alt="">
                                      </nuxt-link>
                                    </div>
                                    <div class="tp-course-logo d-flex align-items-center">
                                      <span>
                                          <img src="/images/course/logo/figma.png" alt="">
                                      </span>
                                      <span>
                                          <img src="/images/course/logo/ae.png" alt="">
                                      </span>
                                    </div>
                                </div>
                                <div class="tp-course-content">
                                    <div class="tp-course-meta">
                                      <span>{{ item.subtitle }}</span>
                                    </div>
                                    <h3 class="tp-course-title">
                                      <nuxt-link href="/contact">{{ item.title }}</nuxt-link>
                                    </h3>
                                    <div class="tp-course-price-btn-box d-flex align-items-center">
                                      <nuxt-link href="/contact" class="tp-course-price-btn">
                                          <span class="new-price">${{ item.new_price }}</span>
                                          <span class="old-price"><del>
                                            ${{ item.old_price }}</del>
                                          </span>
                                      </nuxt-link>
                                      <div class="tp-course-pirce-offer p-relative">
                                          <span>
                                            <svg-arrow-line />
                                          </span>
                                          <p>Save Up to {{ item.offer }}</p>
                                      </div>
                                    </div>
                                </div>
                              </div>
                          </div>
                        </div>
                    </div>
                  </div>

                  <div class="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
                    <div class="tp-blog-inner">
                        <div class="row gx-45">
                          <div v-for="item in blog_items" :key="item.id" class="col-xl-4 col-lg-4 mb-70">
                              <div class="tp-blog-item">
                                <div class="tp-blog-thumb fix">
                                    <nuxt-link :href="`/blog-details/${item.id}`">
                                      <img class="w-100" :src="item.img" alt="">
                                    </nuxt-link>
                                </div>
                                <div class="tp-blog-content">
                                    <h4 class="tp-blog-title-sm">
                                      <nuxt-link :href="`/blog-details/${item.id}`">
                                        {{ item.title }}
                                      </nuxt-link>
                                    </h4>
                                    <div class="tp-blog-meta d-flex justify-content-between align-items-center">
                                      <span>{{ item.date }}</span>
                                      <span>
                                        <nuxt-link :href="`/blog-details/${item.id}`">
                                          {{ item.category }}
                                        </nuxt-link>
                                      </span>
                                    </div>
                                </div>
                              </div>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
  </section>
</template>

<script setup lang="ts">
import blog_data from '@/data/blog-data';
const {activeRef,activeTab,handleActiveTab,marker} = useTabLine();
const tabs = [
  {id:'home',title:'Pricing'}, 
  {id:'profile',title:'Courses'}, 
  {id:'review',title:'Blog'}
];

// course data
const course_data = [
  {
    id:1,
    img: '/images/course/course-1.jpg',
    subtitle: "3 Hours 42 Mins / English",
    title: "Animation Basics / Volume 1",
    new_price: "48.90",
    old_price: "72.90",
    offer: "35%",
  },
  {
    id:2,
    img: '/images/course/course-2.jpg',
    subtitle: "3 Hours 32 Mins / English",
    title: "Animation Exercises / Volume 2",
    new_price: "48.90",
    old_price: "72.90",
    offer: "35%",
  }
];
// blog data
const blog_items = [...blog_data].filter(b => b.page === 'home-one');
</script>