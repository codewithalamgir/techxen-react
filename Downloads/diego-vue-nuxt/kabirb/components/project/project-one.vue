<template>
  <div class="section">
    <div class="tp-hero-2__bg black-bg-3 tp-hero-2__space-4 d-flex align-items-center justify-content-start p-relative z-index-1 fix">
      <div class="tp-hero-2__boder-circle">
        <span></span>
      </div>
      <div class="tp-portfolio-shape">
        <img
          class="tp-portfolio-shape-2-1 tp-zoom-in-out"
          src="/images/portfolio/shape-3.png"
          alt=""
        />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="tp-3d-slide-container">
              <span class="tp-3d-slide-arrow tp-3d-slide-arrow-left z-index-9" @click="handleArrowClick('left')">
                <svg-arrow-left />
              </span>

              <span class="tp-3d-slide-arrow tp-3d-slide-arrow-right z-index-9" @click="handleArrowClick('right')">
                <svg-arrow-right />
              </span>

              <div class="tp-3d-slide-wrapper" id="tp-3d-slide-wrapper">
                <div
                  v-for="(item,i) in project_data"
                  :key="item.id"
                  :class="`tp-3d-slide ${item.cls ? item.cls : ''} tp-hover-reveal-text`"
                  ref="slideRefs" @mousemove="moveText($event, i)">
                  <nuxt-link
                    href="/portfolio-details"
                    class="tp-portfolio-item-2 include-bg"
                    :style="`background-image:url(${item.img})`"
                  >
                    <div class="tp-portfolio-meta-2">
                      <span>{{ item.tag }}</span>
                      <span>{{ item.time }}</span>
                    </div>
                    <h3 class="tp-portfolio-title-2">{{ item.title }}</h3>

                    <div class="tp-portfolio-view tp-portfolio-view-btn">
                      <span>View <br /> Work</span>
                    </div>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

// data
const project_data = [
  {
    id: 1,
    img: "/images/portfolio/2/portfolio-3.jpg",
    tag: "Branding",
    title: "Web Animation",
    time: 2023,
    cls: "prev-2",
  },
  {
    id: 2,
    img: "/images/portfolio/2/portfolio-2.jpg",
    tag: "Branding",
    title: "Web Animation",
    time: 2023,
    cls: "prev-1",
  },
  {
    id: 3,
    img: "/images/portfolio/2/portfolio-1.jpg",
    tag: "Branding",
    title: "Web Animation",
    time: 2023,
    cls: "active",
  },
  {
    id: 4,
    img: "/images/portfolio/2/portfolio-4.jpg",
    tag: "Branding",
    title: "Web Animation",
    time: 2023,
    cls: "next-1",
  },
  {
    id: 5,
    img: "/images/portfolio/2/portfolio-5.jpg",
    tag: "Branding",
    title: "Web Animation",
    time: 2023,
    cls: "next-2",
  },
  {
    id: 6,
    img: "/images/portfolio/2/portfolio-1.jpg",
    tag: "Branding",
    title: "Web Animation",
    time: 2023,
  },
  {
    id: 7,
    img: "/images/portfolio/2/portfolio-2.jpg",
    tag: "Branding",
    title: "Web Animation",
    time: 2023,
  },
  {
    id: 8,
    img: "/images/portfolio/2/portfolio-3.jpg",
    tag: "Branding",
    title: "Web Animation",
    time: 2023,
  },
  {
    id: 9,
    img: "/images/portfolio/2/portfolio-1.jpg",
    tag: "Branding",
    title: "Web Animation",
    time: 2023,
  },
  {
    id: 10,
    img: "/images/portfolio/2/portfolio-2.jpg",
    tag: "Branding",
    title: "Web Animation",
    time: 2023,
  },
  {
    id: 11,
    img: "/images/portfolio/2/portfolio-3.jpg",
    tag: "Branding",
    title: "Web Animation",
    time: 2023,
  },
];

const {activeIndex,handleArrowClick}  = use3dSlider(project_data.length);
const {moveText,slideRefs} = useMoveText();
</script>
