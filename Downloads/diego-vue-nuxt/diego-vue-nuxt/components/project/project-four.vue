<template>
  <div class="tp-project-4-2-area black-bg-6 pt-150 pb-150">
      <div class="container container-1320">
        <div class="tp-project-4-2-title-wrap mb-90">
            <div class="row align-items-end">
              <div class="col-xl-2">
                  <div class="tp-about-4-subtitle-box">
                    <span class="tp-section-subtitle-5">EXPERTISE</span>
                  </div>
              </div>
              <div class="col-xl-7 col-lg-8 col-md-8">
                  <div class="tp-about-4-title-box">
                    <h2 class="tp-section-title-5 mb-20 tp_text_invert" ref="invertRef">EMMA MITCHELL</h2>
                    <p class="tp_text_invert">[ The Projects I've Been Primarily Focused On Lately. ]</p>
                  </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-md-4 d-none d-md-block">
                  <div class="tp-about-4-shape text-end">
                    <img src="/images/new-img/about/ab-4-1-shape.png" alt="">
                  </div>
              </div>
            </div>
        </div>
        <div class="row">
            <div class="offset-xl-3 col-xl-9">
              <div class="tp-project-4-2-wrap">
                  <div v-for="(item, i) in project_data" :key="i" :class="`tp-project-4-2-item p-relative tp-hover-reveal-item ${isActive ? '' : 'active'}`" @mousemove="($event) => handleMouseMove($event, '.tp-hover-reveal-item')" @mouseover="isActive = true" @mouseleave="isActive = false">
                    <nuxt-link href="/portfolio-details-3">
                        <div class="tp-project-4-2-inner-item d-flex justify-content-between align-items-center">
                          <div class="tp-project-4-2-content d-flex align-items-start">
                              <div class="tp-project-4-2-year">
                                <span>{{item.year}}</span>
                              </div>
                              <div class="tp-project-4-2-title-box">
                                <h4 class="tp-project-4-2-title">{{item.title}}</h4>
                                <span>{{item.description}}</span>
                              </div>
                          </div>
                          <div class="tp-project-4-2-link">
                              <span>
                                <svg-arrow-right-2/>
                              </span>
                          </div>
                        </div>
                    </nuxt-link>
                    <div class="tp-hover-reveal-bg" :style="`background-image: url(${item.img})`">
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">
const {handleMouseMove} = useHoverReveal();
const isActive = ref<boolean>(false);

const project_data = [
  {
    id: 1,
    year: '2024',
    title: `Wedding`,
    description: `Collections / Design / Wedding`,
    img: `/images/new-img/project/wedding.jpg`,
  },
  {
    id: 2,
    year: '2024',
    title: `Event`,
    description: `Collections / Design / Event`,
    img: `/images/new-img/project/event.jpg`
  },
  {
    id: 3,
    year: '2024',
    title: `Family Shoots`,
    description: `Collections / Design / Wedding`,
    img: `/images/new-img/project/family.jpg`
  },
  {
    id: 4,
    year: '2024',
    title: `Cosmetic store`,
    description: `Collections / Design / Wedding`,
    img: `/images/new-img/project/cosmetic.jpg`
  },
  {
    id: 5,
    year: '2024',
    title: `Fashion`,
    description: `Collections / Design / Wedding`,
    img: `/images/new-img/project/fashion.jpg`
  },
]
</script>