<template>
  <div class="tp-portfolio-item mb-70">
      <nuxt-link href="/portfolio-details">
        <div class="tp-portfolio-thumb img-1 w-img fix ">
            <div class="tp-portfolio-thumb-img ">
              <img data-speed="0.85" :src="item.img" alt="">
            </div>
        </div>
        <div class="tp-portfolio-content">
            <h3 class="tp-portfolio-title">{{item.title}} </h3>

            <div class="tp-portfolio-meta d-flex align-items-center">
              <span class="tp-portfolio-meta-count">{{item.id > 9 ? item.id : `0${item.id}`}}</span>

              <span class="tp-portfolio-meta-arrow">
                  <svg-meta-arrow/>
              </span>

              <div class="tp-portfolio-meta-hover">
                  <span>{{item.category}}</span>
                  <span class="tp-portfolio-meta-link">View Project</span>
              </div>
            </div>
        </div>
      </nuxt-link>
  </div>
</template>

<script setup lang="ts">
import type { IPortfolioDT } from "@/types/portfolio-d-t";

defineProps<{item:IPortfolioDT}>();
</script>