<template>
  <div class="section">
    <div
      class="tp-hero-2__bg black-bg-3 tp-hero-2__space-5 d-flex align-items-start justify-content-center z-index-1 p-relative fix">
      <div
        class="tp-hero-distort-2"
        style="background-image: url(/images/hero/hero-2-overlay.png)"
      ></div>
      <div class="tp-hero-2__boder-circle tp-hero-2__boder-circle-tr">
        <span></span>
      </div>
      <div class="tp-hero-2__circle-wrapper tp-hero-2__circle-pos">
        <span class="tp-hero-2__circle-1"></span>
        <span class="tp-hero-2__circle-2"></span>
        <span class="tp-hero-2__circle-3"></span>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="tp-hero-2__design-exp-wrap">
              <div class="tp-hero-2__design-exp-top-title">
                <span>
                  <img
                    class="tp-zoom-in-out"
                    src="/images/services/shape/services-shape-3.png"
                    alt=""
                  />
                  DESIGN EXPERIENCE
                </span>
              </div>
              <ul>
                <li v-for="item in experience_data" :key="item.id">
                  <div
                    class="tp-hero-2__design-exp-item d-flex align-items-center justify-content-between"
                  >
                    <div
                      class="tp-hero-2__design-exp-meta d-flex align-items-center"
                    >
                      <span>{{ item.date }}</span>
                      <h4 class="tp-hero-2__design-exp-title">
                        {{ item.title }}
                      </h4>
                    </div>
                    <div class="tp-hero-2__design-exp-company">
                      <span>{{ item.company }}</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div class="tp-hero-2__design-exp-skill-wrap">
              <div class="tp-hero-2__design-exp-top-title mb-30">
                <span>
                  <img
                    class="tp-zoom-in-out"
                    src="/images/services/shape/services-shape-3.png"
                    alt=""
                  />
                  Skills
                </span>
              </div>
              <div class="row row-cols-xl-5 row-cols-md-3">
                <div v-for="item in skill_data" :key="item.id" class="col-xl">
                  <div
                    :class="`mb-20 tp-hero-2__design-exp-skill-item justify-content-center bg-${item.id} d-flex align-items-center`"
                  >
                    <div class="tp-hero-2__design-exp-skill-icon">
                      <img :src="item.img" alt="" />
                    </div>
                    <div class="tp-hero-2__design-exp-skill-info">
                      <span>{{ item.percent }}</span>
                      <i>{{ item.name }}</i>
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
</template>

<script setup lang="ts">
const experience_data = [
  {
    id: 1,
    date: "Oct 2022 - Present",
    title: "UI/UX Lead Designer",
    company: "Amazon INC",
  },
  {
    id: 2,
    date: "Oct 2021- Oct 2022",
    title: "Product Lead Designer",
    company: "Fourmeta Agency",
  },
  {
    id: 3,
    date: "Apr 2020 - Oct 2021",
    title: "UI/UX Designer",
    company: "Apr 2020 - Oct 2021",
  },
  {
    id: 4,
    date: "Feb 2015 - Apr 2020",
    title: "Intership Graphic Designer",
    company: "Feb 2015 - Apr 2020",
  },
];

const skill_data = [
  {
    id: 1,
    img: "/images/skill/figma-sm.png",
    name: "Figma",
    percent: "94%",
  },
  {
    id: 2,
    img: "/images/skill/photoshop-sm.png",
    name: "Photoshop",
    percent: "98%",
  },
  {
    id: 3,
    img: "/images/skill/xd-sm.png",
    name: "Adobe XD",
    percent: "82%",
  },
  {
    id: 4,
    img: "/images/skill/sketch-sm.png",
    name: "Sketch",
    percent: "93%",
  },
  {
    id: 5,
    img: "/images/skill/in-sm.png",
    name: "Invision",
    percent: "76%",
  },
];
</script>
