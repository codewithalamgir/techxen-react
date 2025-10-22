<template>
  <div class="tp-project-5-area coffe-bg pb-140 z-index-1">
      <div class="container container-1350">
        <div class="row">
            <div class="col-xl-12">
              <div class="tp-project-5-section-box pb-130 d-flex justify-content-between align-items-center">
                  <span class="tp-project-5-section-subtitle">Sirvices</span>
                  <h4 class="tp-project-5-section-title">My extertise in this area</h4>
                  <nuxt-link class="tp-project-5-section-link" href="/portfolio">View more</nuxt-link>
              </div>
            </div>
        </div>
      </div>
      <div class="tp-project-5-wrap p-relative">
        <div class="row justify-content-center">
            <div class="col-xl-12">
              <div class="tp-project-5-title-wrap">
                  
                  <div v-for="project in project_data" :key="project.id" :class="`tp-project-5-title-box ${projectId === project.id ? 'active' : ''} text-center`" :rel="`tp-project-5-thumb-box-${project.id}`" @mouseenter="projectId = project.id">
                    <div class="tp-project-5-title-box-bg"></div>
                    <div class="tp-project-5-thumb-box d-flex justify-content-between align-items-end">
                        <div class="tp-project-5-thumb thumb-1">
                          <img :src="project.left_img" alt="">
                        </div>
                        <div class="tp-project-5-thumb thumb-2">
                          <img :src="project.right_img" alt="">
                        </div>
                    </div>
                    <h4 class="tp-project-5-title">
                      <nuxt-link href="/portfolio-details-2">{{ project.title }}</nuxt-link>
                    </h4>
                    <span>{{ project.subtitle }}</span>
                  </div>

              </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">
const projectId = ref(2);
const project_data = [
  {
    id: 1,
    title: "Modelling",
    subtitle: "Fashion & Life Style",
    left_img: '/images/home-05/project/project-2.jpg',
    right_img: '/images/home-05/project/project-1.jpg',
  },
  {
    id: 2,
    title: "Acting",
    subtitle: "Character",
    left_img: '/images/home-05/project/project-1.1.jpg',
    right_img: '/images/home-05/project/project-2.2.jpg',
  },
  {
    id: 3,
    title: "Costume",
    subtitle: "Cloth & Wearing",
    left_img: '/images/home-05/project/project-1.3.jpg',
    right_img: '/images/home-05/project/project-2.3.jpg',
  },
  {
    id: 4,
    title: "Artist",
    subtitle: "Creative Designer",
    left_img: '/images/home-05/project/project-1.4.jpg',
    right_img: '/images/home-05/project/project-2.4.jpg',
  },
];
</script>
