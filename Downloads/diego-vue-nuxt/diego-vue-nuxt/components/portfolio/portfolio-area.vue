<template>
  <section class="tp-portfolio-area tp-btn-trigger-2 p-relative z-index-1 pt-280 pb-40 fix">
      <div class="tp-portfolio-top-text tp-portfolio-bg-text d-flex align-items-center">
        <p>Latest Project</p>
        <p>Latest Project</p>
      </div>
      <div class="container">
        <div class="row">
            <div class="col-xl-6 col-lg-6">
              <div class="tp-portfolio-wrapper pr-30 pt-55">
                  <div class="tp-section-title-wrapper mb-60">
                    <div class="tp-section-title-inner tp_title_anim p-relative">
                        <span class="tp-section-subtitle tp-portfolio-subtitle">Project</span>
                        <h3 class="tp-section-title tp_title_anim">Latest <br> projects</h3>
                    </div>
                  </div>

                  <div class="tp-portfolio-item-wrapper">
                    <!-- portfolio item -->
                    <portfolio-item :item="portfolio_items[0]" />
                  </div>

                  <div class="tp-portfolio-more tp-hover-btn-wrapper tp-btn-bounce-2 d-none d-lg-block">
                    <nuxt-link href="/portfolio-details"
                        class="tp-hover-btn tp-hover-btn-item tp-btn-circle-2 d-flex align-items-center justify-content-center flex-column">
                        <span class="tp-btn-circle-text-2">
                          Explore <br> All Project
                          <span class="tp-btn-circle-arrow-2">
                              <svg-circle-2/>
                          </span>
                        </span>
                        <i class="tp-btn-circle-dot"></i>
                    </nuxt-link>
                  </div>

              </div>
            </div>
            <div class="col-xl-6 col-lg-6">
              <div class="tp-portfolio-item-wrapper pl-50">
                  <!-- portfolio item -->
                  <portfolio-item v-for="item in portfolio_items.slice(1,3)" :key="item.id" :item="item" />
              </div>
            </div>
        </div>
      </div>
  </section>
</template>

<script setup lang="ts">
import portfolio_data from '@/data/portfolio-data';
const portfolio_items = [...portfolio_data].slice(0,3);

</script>