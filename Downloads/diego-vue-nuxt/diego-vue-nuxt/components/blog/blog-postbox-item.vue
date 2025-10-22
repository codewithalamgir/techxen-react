<template>
  <article class="postbox__item mb-60">
    <div class="postbox__thumb">
      <nuxt-link v-if="!blog.slider" :href="`/blog-details/${blog.id}`">
        <img :src="blog.img" alt="" />
      </nuxt-link>
      <div class="postbox__date">
        <span>{{blog.date.split(' ')[0]}}</span>
        <h5>{{blog.date.split(' ')[1]}}</h5>
      </div>
      <div v-if="blog.video" class="postbox__play-btn">
        <a
          class="popup-video"
          href="#"
          @click.prevent="playVideo('rVHxkxJM3rY')"
          >
          <i class="fa-sharp fa-solid fa-play"></i>
        </a>
      </div>

      <div v-if="blog.slider" class="postbox__thumb-slider p-relative">
        <swiper v-bind="slider_setting" :modules="[Navigation, Autoplay]" class="swiper-container postbox__thumb-slider-active">
            <swiper-slide v-for="(imgSrc, i) in blog.slider_images" :key="i">
                <img :src="imgSrc" alt="">
            </swiper-slide>
        </swiper>
        <div class="postbox__slider-arrow-wrap d-none d-sm-block">
            <button class="postbox-arrow-prev">
              <i class="fa-sharp fa-solid fa-arrow-left"></i>
            </button>
            <button class="postbox-arrow-next">
              <i class="fa-sharp fa-solid fa-arrow-right"></i>
            </button>
        </div>
      </div>

    </div>
    <div class="postbox__content">
      <div class="postbox__meta">
        <span>{{blog.category}}</span>
        <i></i>
        <span>{{blog.comments}} Comments</span>
      </div>
      <h3 class="postbox__title">
        <nuxt-link :href="`/blog-details/${blog.id}`">
          <div v-html="blog.title"></div>
        </nuxt-link>
      </h3>
      <div class="postbox__text">
        <p>
          {{blog.desc}}...
        </p>
      </div>
      <div class="postbox__read-more">
        <nuxt-link :href="`/blog-details/${blog.id}`" class="tp-btn-border-lg">
          read more
        </nuxt-link>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import {Swiper,SwiperSlide} from 'swiper/vue';
import {Navigation,Autoplay} from 'swiper/modules';
import type { IBlogDT } from "@/types/blog-d-t";

const {playVideo} = useVideoPopup();

defineProps<{ blog: IBlogDT }>();

const slider_setting = {
  slidesPerView:1,
  autoplay:true,
  navigation: {
    nextEl: ".postbox-arrow-next",
    prevEl: ".postbox-arrow-prev",
  }
}
</script>
