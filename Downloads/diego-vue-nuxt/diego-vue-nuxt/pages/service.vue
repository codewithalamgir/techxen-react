<template>
  <div>

    <!-- header area -->
    <header-five />
    <!-- header area -->

    <div id="smooth-wrapper">
      <div id="smooth-content">
        <main>
          <!-- service hero area -->
          <service-hero-area />
          <!-- service hero area -->

          <!-- service area -->
          <service-area-three />
          <!-- service area -->

          <!-- service info area -->
          <service-info-area />
          <!-- service info area -->

          <!-- testimonial area -->
          <testimonial-one :style_2="true" />
          <!-- testimonial area -->

          <!-- pricing area -->
          <div class="sv-inner__price-area sv-inner__price-customize pb-70">
            <div class="container">
              <div class="row">
                <div class="col-xl-12">
                  <div class="sv-inner__price-title-box text-center">
                    <h4 class="tp-section-title-3 tp_title_anim">
                      Services & Pricing
                    </h4>
                    <p class="tp_title_anim">
                      No surprises. No hassles. Just right.
                    </p>
                  </div>
                </div>
              </div>
              <!-- pricing area -->
              <pricing-one :style_2="true" />
              <!-- pricing area -->
            </div>
          </div>
          <!-- pricing area -->

          <!-- brand area -->
          <brand-area-two />
          <!-- brand area -->
        </main>
        <footer-one
          cls="tp-footer__customize  black-bg-3 p-relative fix z-index-1"
          :style_2="true"
        />
      </div>
    </div>

    <!-- back to top -->
    <back-to-top />
    <!-- back to top -->
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: "Service Page - Kabir" });
definePageMeta({ layout: false });
const { servicesPanel } = usePinPanel();

onMounted(() => {
  useSmoothScroll();

  document.body.classList.add("black-bg-3");
  setTimeout(() => {
    useAnimationTitle();
    useCharAnimation();
    servicesPanel();
  },50)
});
</script>
