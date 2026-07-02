<template>
  <div class="tp-project-4-area black-bg-5 pb-200 cursor-style">
      <div class="container container-1760">
        <div class="tp-project-4-top-wrap mb-70">
            <div class="row">
              <div class="col-xl-6 col-lg-6 col-sm-6">
                  <div class="tp-project-4-text">
                    <span>Scroll to Explore</span>
                  </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-sm-6">
                  <div class="tp-project-4-text text-start text-sm-end">
                    <span>Selected Case Studies (04)</span>
                  </div>
              </div>
            </div>
        </div>
        <div class="tp-project-4-wrapper">
            <div class="tp-project-4-inner-wrap">
              <div v-for="(item) in project_data" :key="item.id" class="tp-project-4-item">
                  <div class="tp-project-4-thumb not-hide-cursor" data-cursor="View<br>Demo">
                    <nuxt-link class="cursor-hide" href="/portfolio-details-3">
                        <img :src="item.img" alt="">
                    </nuxt-link>
                  </div>
                  <div class="tp-project-4-content">
                    <h4 class="tp-project-4-title">
                      <nuxt-link href="/portfolio-details-3">{{item.title}}</nuxt-link>
                    </h4>
                  </div>
              </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">

const project_data = [
  {
    id:1,
    img: '/images/new-img/project/project-4-1.jpg',
    title: `Brand promotion`,
  },
  {
    id:2,
    img: '/images/new-img/project/project-4-2.jpg',
    title: `Commercial`,
  },
  {
    id:3,
    img: '/images/new-img/project/project-4-3.jpg',
    title: `Wedding`,
  },
  {
    id:4,
    img: '/images/new-img/project/project-4-4.jpg',
    title: `Portrait`,
  },
]
</script>