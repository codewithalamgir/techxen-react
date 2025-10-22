<template>
   <div class="tp-blog-3__area black-bg-3 pt-320 pb-50 fix">
        <div class="container">
          <div class="tp-blog-3__title-wrap mb-60">
              <div class="row align-items-end">
                <div class="col-xl-6 col-lg-8 col-md-8">
                    <div class="tp-blog-3__title-box">
                      <h4 class="tp-section-title-3 tp_title_anim">Articles & Publications</h4>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-4 col-md-4">
                    <div class="tp-blog-3__btn text-start text-md-end">
                      <nuxt-link class="tp-btn-blue" href="/blog">
                          <span class="text"> View All Post</span>
                          <span class="icon">
                            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1 1L10 10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 1V10H1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </svg>
                          </span>
                      </nuxt-link>
                    </div>
                </div>
              </div>
          </div>
          <div class="row gx-50">
              <div v-for="item in blog_items" :key="item.id" class="col-xl-6">
                <div class="tp-blog-3__item mb-70">
                    <div class="tp-blog-3__content">
                      <h4 class="tp-blog-3__content-title">
                         <nuxt-link :href="`/blog-details/${item.id}`">
                          <div v-html="item.title"></div>
                        </nuxt-link>
                      </h4>
                      <div class="tp-blog-3__meta-box mb-30 d-flex align-items-center justify-content-between">
                          <div class="tp-blog-3__category">
                            <span>{{ item.category }}</span>
                          </div>
                          <div class="tp-blog-3__meta">
                            <span>{{ item.date }}</span>
                            <span>{{ item.time }}</span>
                          </div>
                      </div>
                    </div>
                    <div class="tp-blog-3__thumb">
                      <nuxt-link :href="`/blog-details/${item.id}`">
                        <img class="w-100" :src="item.img" alt="">
                      </nuxt-link>
                    </div>
                </div>
              </div>
          </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import blog_data from '@/data/blog-data';
const blog_items = [...blog_data].filter(b => b.page === 'home-three');
</script>