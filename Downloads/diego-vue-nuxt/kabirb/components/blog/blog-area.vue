<template>
  <div class="blog-list__area blog-list__ptb fix">
    <div class="container">
      <div class="row">
        <div class="blog-list__title-box">
          <span class="blog-list__subtitle tp-char-animation">Insights</span>
          <h4 class="blog-list__title tp-char-animation">
            Discover Articles and Guides to Help You.
          </h4>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-12">
          <div class="blog-list__tab-wrap">
            <div class="blog-list__tab-btn">
              <ul class="nav nav-tab" id="myTab" role="tablist">
                <li v-for="(cate, i) in categories" :key="i" class="nav-item">
                  <button
                    :class="`nav-links ${cate === activeCate ? 'active' : ''}`"
                    @click="handleCategory(cate)"
                  >
                    <span>{{ cate }}</span>
                    [{{blog_items.filter((b) => b.category === cate).length}}]
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <div class="blog-list__slider-main">
                <div class="blog-list__slider-wrap mb-80">
                  <swiper
                    v-bind="slider_setting"
                    :modules="[Navigation, Scrollbar]"
                    class="swiper-container blog-list__slider-active p-relative"
                  >
                    <div class="blog-list__scrollbar"></div>
                    <swiper-slide v-for="b in sliderBlogs" :key="b.id">
                      <blog-slider-item :blog="b" />
                    </swiper-slide>
                    <div class="blog-list__arrow-box d-none d-md-block">
                      <button class="blog-list__arrow-next me-2">
                        <i class="fa-solid fa-angle-left"></i>
                      </button>
                      <button class="blog-list__arrow-prev">
                        <i class="fa-solid fa-angle-right"></i>
                      </button>
                    </div>
                  </swiper>
                </div>
                <div class="blog-list__wrapper">
                  <div class="row gx-50">
                    <div
                      v-for="blog in filterBlogs.filter((b) => !b.slider)"
                      :key="blog.id"
                      class="col-xl-6 col-lg-6 col-md-6"
                    >
                      <blog-list-item :blog="blog" />
                    </div>
                  </div>
                </div>
                <div class="blog-list__btn text-center">
                  <a class="tp-btn-black-lg" href="#">
                    Load more
                    <span>
                      <i class="fa-sharp fa-regular fa-arrow-right"></i>
                    </span>
                  </a>
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
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Scrollbar } from "swiper/modules";
import blog_data from "@/data/blog-data";
const blog_items = [...blog_data].filter((b) => b.page === "blog");
const categories = new Set([...blog_items].map((b) => b.category));
const categoryArray = Array.from(categories);
const activeCate = ref<string>(categoryArray[0]);

function handleCategory(c: string) {
  activeCate.value = c;
}

const filterBlogs = computed(() => {
  return blog_items.filter((b) => b.category === activeCate.value);
});

const sliderBlogs = computed(() => {
  return filterBlogs.value.filter((b) => b.slider);
});

const slider_setting = {
  speed: 800,
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: ".blog-list__arrow-next",
    prevEl: ".blog-list__arrow-prev",
  },
  scrollbar: {
    el: ".blog-list__scrollbar",
    clickable: true,
  },
  breakpoints: {
    "1200": {
      slidesPerView: 1,
    },
    "992": {
      slidesPerView: 1,
    },
    "768": {
      slidesPerView: 1,
    },
    "576": {
      slidesPerView: 1,
    },
    "0": {
      slidesPerView: 1,
    },
  },
};
</script>
