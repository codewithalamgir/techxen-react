<template>
  <section :class="`tp-award-area pt-120 ${style_2 ? 'tp-award-customize black-bg-3 pb-50' : 'theme-bg pb-120 tp-bg-light p-relative'}`">
      <div class="container">
        <div class="tp-award-inner p-relative pb-80">
            <span v-if="!style_2" class="tp-award-bottom-border"></span>
            <div class="row">
              <div class="col-xl-5">
                  <div class="tp-award-wrapper">
                    <div class="tp-section-title-wrapper p-relative z-index-1 mb-30">
                        <div class="tp-section-title-inner tp_title_anim p-relative">
                          <span v-if="!style_2" class="tp-section-subtitle tp-award-subtitle">Awards</span>
                          <h3 class="tp-section-title">Awards & <br> recognitions</h3>
                        </div>
                    </div>
                    <div class="tp-award-text-wrapper p-relative">
                        <div class="tp-award-shape">
                          <img class="tp-award-shape-1" data-speed="1" data-lag="0.1"
                              src="/images/award/shape/line_img...png" alt="Kabir">
                        </div>
                    </div>
                  </div>
              </div>
              <div class="col-xl-7">
                  <div class="tp-award-item-wrapper pt-35 pl-70">
                    <div v-for="(item) in award_data" :key="item.id" class="tp-award-item p-relative tp-hover-reveal-item" @mousemove="($event) => handleMouseMove($event, '.tp-hover-reveal-item')">
                        <nuxt-link href="/about" class="d-block">
                          <div
                              class="tp-award-item-inner d-flex align-items-center justify-content-between flex-wrap">
                              <div class="tp-award-arrow">
                                <svg-award-arrow/>
                              </div>
                              <div class="tp-award-content">
                                <h3 class="tp-award-title">{{item.title}}</h3>
                                <p>{{item.date}}</p>
                              </div>
                              <div class="tp-award-btn-wrapper">
                                <span class="tp-award-btn">
                                    <span>
                                      <svg-award-btn/>
                                      <svg-award-btn/>
                                    </span>
                                </span>
                              </div>
                          </div>
                        </nuxt-link>
                        <div class="tp-hover-reveal-bg" :style="`background-image: url(${item.img})`"></div>
                        <span class="tp-award-inner-border"></span>
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </div>
  </section>
</template>

<script setup lang="ts">
const {handleMouseMove} = useHoverReveal();
defineProps<{style_2?:boolean}>();
const award_data = [
  {
    id: 1,
    img: "/images/award/award-5.jpg",
    title: "Awwwards SOTD",
    date: "FOR DISPLAY 2023",
  },
  {
    id: 2,
    img: "/images/award/award-6.jpg",
    title: "Wix.Com",
    date: "INTERVIEW 2022",
  },
  {
    id: 3,
    img: "/images/award/award-10.jpg",
    title: "HTML/CSS Awards",
    date: "FEATURE 2021",
  },
  {
    id: 6,
    img: "/images/award/award-3.jpg",
    title: "Rising Talent",
    date: "FROM UpWork 2016",
  }
]
</script>