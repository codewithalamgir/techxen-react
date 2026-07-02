<template>
  <div class="section">
    <div class="tp-hero-2__bg black-bg-3 tp-hero-2__space-6 d-flex align-items-start justify-content-center p-relative z-index-1 fix">
        <div class="tp-testimonial-2__star-shape">
          <img src="/images/testimonial/testi-star.png" alt="">
        </div>
        <div class="tp-hero-2__boder-circle">
          <span></span>
        </div>
        <div class="container">
          <div class="tp-testimonial-2__title-wrap">
              <div class="row align-items-end">
                <div class="col-xl-8 col-lg-8 col-md-8">
                    <div class="tp-testimonial-2__title-box">
                      <h4 class="tp-testimonial-2__title">What <br> Our Client Says</h4>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4">
                    <div
                      class="tp-testimonial-2__arrow-box text-end d-flex align-items-center justify-content-end">
                      <button class="tp-testimonial-2__slider-next tp-hover-arrow-down">
                          <span>
                            <svg-arrow-down/>
                            <svg-arrow-down/>
                          </span>
                      </button>
                      <button class="tp-testimonial-2__slider-prev tp-hover-arrow-up">
                          <span>
                            <svg-arrow-up/>
                            <svg-arrow-up/>
                          </span>
                      </button>
                    </div>
                </div>
              </div>
          </div>
          <div class="row">
              <div class="col-xl-4 col-lg-4 col-md-5">
                <div class="tp-testimonial-2__left-box">
                    <div class="tp-testimonial-2__btn-box ">
                      <div class="parallax-wrap d-inline-block">
                          <div class="parallax-element">
                            <a class="tp-btn-pink " href="#">
                                <span>
                                  <svg-arrow-up-sm/>
                                </span>
                                <span data-hover="BECOME A CLIENT">
                                  BECOME A CLIENT
                                </span>
                            </a>
                          </div>
                      </div>
                      <span class="tp-testimonial-2__review-text">
                          Rated 4.9 out of 5 based <br>
                          on 500+ reviews
                      </span>
                    </div>
                    <div class="tp-testimonial-2__shape-img text-center">
                      <img src="/images/testimonial/testimonia-2-1.png" alt="">
                    </div>
                </div>
              </div>
              <div class="col-xl-8 col-lg-8 col-md-7">
                <div class="tp-testimonial-2__slider-wrapper">
                    <swiper v-bind="slider_setting" :modules="[Autoplay,Navigation]" class="swiper-container tp-testimonial-2__slider-active fix">
                          <swiper-slide v-for="item in slider_data" :key="item.id">
                            <div class="tp-testimonial-2__slider-item">
                                <div class="tp-testimonial-2__slider-text">
                                  <p>{{item.review}}</p>
                                </div>
                                <div class="tp-testimonial-2__author d-flex align-items-center">
                                  <div class="tp-testimonial-2__avata">
                                      <img :src="item.img" alt="">
                                  </div>
                                  <div class="tp-testimonial-2__author-info">
                                      <h4 class="tp-testimonial-2__author-title">
                                        {{item.name}}
                                      </h4>
                                      <span>{{item.designation}}</span>
                                  </div>
                                </div>
                            </div>
                          </swiper-slide>
                    </swiper>
                </div>
              </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Swiper,SwiperSlide} from 'swiper/vue';
import {Autoplay,Navigation} from 'swiper/modules';

const slider_data = [
  {
    id: 1,
    img: '/images/testimonial/avata/avata-1.png',
    name: "Charlie Smith",
    designation: "CEO Founder",
    review: "Our design process was very patch work & impromptu before we met will. He's helped us build a solid design system & optimize our website.!",
  },
  {
    id: 2,
    img: '/images/testimonial/avata/avata-1.png',
    name: "Charlie Smith",
    designation: "CEO Founder",
    review: "Our design process was very patch work & impromptu before we met will. He's helped us build a solid design system & optimize our website.!",
  },
  {
    id: 3,
    img: '/images/testimonial/avata/avata-1.png',
    name: "Charlie Smith",
    designation: "CEO Founder",
    review: "Our design process was very patch work & impromptu before we met will. He's helped us build a solid design system & optimize our website.!",
  },
]
const slider_setting = {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: false,
  speed: 1200,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    prevEl: ".tp-testimonial-2__slider-next",
    nextEl: ".tp-testimonial-2__slider-prev",
  },
};
</script>