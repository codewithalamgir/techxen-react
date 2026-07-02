<template>
  <div class="blog-list__slider-item">
    <div class="row align-items-center">
      <div class="col-xl-8">
        <div class="blog-list__slider-title-box">
          <h4 class="blog-list__slider-title">
           <nuxt-link :href="`/blog-details/${blog.id}`">
            <div v-html="blog.title"></div>
          </nuxt-link>
          </h4>
        </div>
      </div>
    </div>
    <div class="blog-list__author-wrap mb-20">
      <div class="row align-items-end">
        <div class="col-xl-3 col-lg-3 col-md-4 mb-20">
          <div class="blog-list__author-info d-flex align-items-center">
            <div class="blog-list__author-avata">
              <img :src="blog.avatar" alt="" />
            </div>
            <div class="blog-list__author-details">
              <h4 class="blog-list__author-title">{{ blog.author }}</h4>
              <span>{{ blog.designation }}</span>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-8 mb-20">
          <div class="blog-list__meta-box text-start text-lg-center">
            <span class="category">{{ blog.category }}</span>
            <span>{{ blog.date }}</span>
            <span>{{ blog.time }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-12">
        <div class="blog-list__slider-thumb">
          <img :src="blog.img" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IBlogDT } from "@/types/blog-d-t";

defineProps<{ blog: IBlogDT }>();
</script>
