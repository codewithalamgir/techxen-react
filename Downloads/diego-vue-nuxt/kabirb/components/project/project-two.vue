<template>
  <client-only>
  <div class="tp-project-3__area p-relative black-bg-3 pt-110">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div
            class="tp-project-3__title-box pb-30 text-center portfolio-sec-pin"
          >
            <h3 class="tp-section-title-3 tp_title_anim">Featured Projects</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-12">
          <div class="tp-portfolio-item-wrapper-3">
            <div
              v-for="(imgSrc, i) in project_images"
              :key="i"
              class="tp-portfolio-item-3 portfolio-panel pb-80 tp-hover-reveal-text"
              ref="slideRefs"
              @mousemove="moveText($event, i)"
            >
              <nuxt-link href="/portfolio-details">
                <img :src="imgSrc" alt="" />
                <span></span>
                <div class="tp-portfolio-view-btn-3">
                  <span>View <br /> Work</span>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</client-only>
</template>

<script setup lang="ts">
const {portfolioPanel} = usePinPanel();

const { moveText, slideRefs } = useMoveText();
const project_images = [
  "/images/portfolio/3/portfolio-1.jpg",
  "/images/portfolio/3/portfolio-2.jpg",
  "/images/portfolio/3/portfolio-3.jpg",
  "/images/portfolio/3/portfolio-4.jpg",
];

onMounted(() => {
  setTimeout(() => {
    portfolioPanel()
  },100)
})
</script>
