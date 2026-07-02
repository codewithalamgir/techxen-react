<template>
  <div id="showcase-slider-main" class="showcase-slider-main">
    <div class="port-showcase-slider-spaces p-relative">
      <div
        class="port-showcase-slider-wrap tp-slider-parallax fix"
        id="showcase-slider-holder"
        data-pattern-img="/images/webgl/1.jpg"
      >
        <div
          class="swiper-container parallax-slider-active p-relative"
          id="showcase-slider"
        >
          <swiper
            v-bind="slider_setting"
            :modules="modules"
            id="trigger-slides"
            :onSlidePrevTransitionStart="() => slidePrevTransitionStart()"
            :onSlideNextTransitionStart="() => slideNextTransitionStart()"
          >
            <swiper-slide v-for="(item, i) in slider_data" :key="i">
              <div
                :class="`slide-wrap ${i === 0 ? 'active' : ''}`"
                :data-slide="i"
              ></div>
              <div class="container">
                <div class="row">
                  <div class="col-xl-12">
                    <div class="port-showcase-slider-item">
                      <div class="port-showcase-slider-content text-center">
                        <div class="port-showcase-slider-title">
                          <div>
                            <span>
                              <nuxt-link href="/portfolio-details-3">{{item.title}}</nuxt-link>
                            </span>
                          </div>
                        </div>
                        <div class="port-showcase-slider-subtitle">
                          <div>
                            <span>{{ item.brand }}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>

            <div class="port-showcase-slider-link d-none d-sm-flex">
              <nuxt-link href="/portfolio">
                <span>
                  <svg-arr-up-down />
                </span>
                <span>All Projects</span>
              </nuxt-link>
            </div>

            <div class="tp-slider-dot"></div>
            <div class="port-showcase-slider-social d-flex align-items-center d-none d-sm-flex">
              <a class="tp-hover-btn-item tp-hover-btn tp-magnetic-item not-hide-cursor"
                href="#">Fb</a>
              <a class="tp-hover-btn-item tp-hover-btn tp-magnetic-item not-hide-cursor"
                href="#">In</a>
              <a class="tp-hover-btn-item tp-hover-btn tp-magnetic-item not-hide-cursor"
                href="#">Be</a>
            </div>
          </swiper>
        </div>
      </div>
    </div>
    <!-- portfolio-showcase-area end-->

    <!-- canvas slider -->
    <div id="canvas-slider" class="canvas-slider" ref="webGLContainerRef">                
      <div class="slider-img" data-slide="0">
        <img class="slide-img" src="/images/home-60/slider/slider-1.jpg" alt="">
      </div>
      <div class="slider-img" data-slide="1">
        <img class="slide-img" src="/images/home-60/slider/slider-2.jpg" alt="">
      </div>
      <div class="slider-img" data-slide="2">
        <img class="slide-img" src="/images/home-60/slider/slider-3.jpg" alt="">
      </div>
      <div class="slider-img" data-slide="3">
        <img class="slide-img" src="/images/home-60/slider/slider-4.jpg" alt="">
      </div>
    </div>
    <!--/canvas slider --> 
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay, Mousewheel } from "swiper/modules";
import WebGL from "@/utils/webgl";
import {
  addEvents,
  slideNextTransitionStart,
  slidePrevTransitionStart,
} from "@/utils/webgl-slider";

const webGLContainerRef = ref<HTMLDivElement | null>(null);

// data
const slider_data = [
  {
    id: 1,
    title: "Silkvision",
    brand: "Branding",
  },
  {
    id: 2,
    title: "Top Paddock",
    brand: "Branding",
  },
  {
    id: 3,
    title: "Romain Avalle",
    brand: "Branding",
  },
  {
    id: 4,
    title: "Band Some",
    brand: "Branding",
  },
];

const slider_setting = {
  slidesPerView: 1,
  touchStartPreventDefault: false,
  speed: 1000,
  effect: "fade",
  loop: false,
  mousewheel: true,
  simulateTouch: true,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  pagination: {
    el: ".tp-slider-dot",
    clickable: true,
  },
};

const modules = [Navigation, Pagination, Autoplay, Mousewheel];

onMounted(() => {
  if (webGLContainerRef.value) {
    var vertex =
      "varying vec2 vUv; void main() {  vUv = uv;  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );	}";
    var fragment = `
			varying vec2 vUv;
		
			uniform sampler2D currentImage;
			uniform sampler2D nextImage;
			uniform sampler2D disp;
			uniform float dispFactor;
			uniform float effectFactor;
			uniform vec4 resolution;
		
			void main() {
		
				vec2 uv = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);
		
				vec4 disp = texture2D(disp, uv);
				vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);
				vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);
				vec4 _currentImage = texture2D(currentImage, distortedPosition);
				vec4 _nextImage = texture2D(nextImage, distortedPosition2);
				vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);
		
				gl_FragColor = finalTexture; }
		
			`;

    const webGL = new WebGL({
      vertex: vertex,
      fragment: fragment,
    });

    // Instantiate WebGL
    addEvents(webGL);
    // Append renderer element to container
    webGLContainerRef.value.appendChild(webGL.renderer.domElement);

    // Clean up function
    return () => {
      // Stop WebGL rendering
      webGL.stop();
    };
  }
});
</script>
