<template>
  <div class="blog-list__sm-item mb-60 pb-30">
    <div class="blog-list__sm-thumb">
      <nuxt-link :href="`/blog-details/${blog.id}`">
        <img :src="blog.img" alt="" />
      </nuxt-link>
    </div>
    <div class="blog-list__sm-category">
      <span v-for="(t, i) in blog.tag" :key="i">{{ t }}</span>
    </div>
    <div class="blog-list__sm-title-box">
      <h4 class="blog-list__sm-title">
        <nuxt-link :href="`/blog-details/${blog.id}`">
          <div v-html="blog.title"></div>
        </nuxt-link>
      </h4>
    </div>
    <div class="blog-list__sm-author d-flex align-items-center">
      <div class="blog-list__sm-author-avata">
        <img :src="blog.avatar" alt="" />
      </div>
      <div class="blog-list__sm-author-content">
        <h4>{{ blog.author }}</h4>
        <span>{{ blog.date }}<i>.</i>{{ blog.time }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IBlogDT } from "@/types/blog-d-t";

defineProps<{ blog: IBlogDT }>();
</script>
