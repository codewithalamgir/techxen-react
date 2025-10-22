<template>
  <div class="tp-port-3-area black-bg-5">
      <div class="tp-port-3-bg tp-port-3-height d-flex justify-content-center align-items-center cursor-style" data-background="/images/portfolio-details-3/hero-bg.jpg" style="background: url(/images/portfolio-details-3/hero-bg.jpg);">
        <div class="tp-port-3-title-box">
            <h4 class="tp-port-3-title">Studio Shoot</h4>
        </div>
      </div>
      <div class="tp-port-3-content-wrap pt-140">
        <div class="container container-1350">
            <div class="row">
              <div class="col-xl-5 col-lg-4" ref="portRef">
                  <div class="tp-port-3-content-left">
                    <h4 class="tp-port-3-content-title">Project Details</h4>
                    <div class="tp-port-3-content-info-wrap">
                        <div class="tp-port-3-content-info d-flex align-content-start">
                          <span>Date:</span>
                          <span>May 1th, 2024</span>
                        </div>
                        <div class="tp-port-3-content-info d-flex align-content-start">
                          <span>Client:</span>
                          <span>Envato Users</span>
                        </div>
                        <div class="tp-port-3-content-info d-flex align-content-start">
                          <span>Services:</span>
                          <span>Photography, Family Shoots <br> Fashion, Event</span>
                        </div>
                    </div>
                    <div class="tp-port-3-content-description mb-40">
                        <span>Description:</span>
                        <p>Lorem ipsum dolor sit amet conseur adipisci inerene. Maecenas volutpat, diam eni sagittis quam porta quam. Sed id dolor consectetur fermentum volutpat accumsan purus iaculis libero.</p>
                    </div>
                    <div class="tp-port-2-title-box">
                        <a class="tp-btn-4-1-price sm" href="#">Visit Link</a>
                    </div>
                  </div>
              </div>
              <div class="col-xl-7 col-lg-8">
                  <div class="tp-port-3-thumb-right cursor-style">
                    <div class="tp-port-3-thumb mb-40">
                        <img src="/images/portfolio-details-3/port-1.jpg" alt="">
                    </div>
                    <div class="tp-port-3-thumb mb-40">
                        <img src="/images/portfolio-details-3/port-2.jpg" alt="">
                    </div>
                    <div class="tp-port-3-thumb mb-40">
                        <img src="/images/portfolio-details-3/port-3.jpg" alt="">
                    </div>
                    <div class="tp-port-3-thumb mb-40">
                        <img src="/images/portfolio-details-3/port-4.jpg" alt="">
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </div>
      
      <div class="tp-port-3-navigation-style">
        <div class="container container-1350">
            <div class="row">
              <div class="col-xl-12">
                  <div class="porfolio-details__navigation-wrap">
                    <div class="row align-items-center">
                        <div class="col-xl-4 col-lg-4 col-md-4 col-12">
                          <div class="porfolio-details__navigation-content text-center text-md-start">
                              <a href="#"><i class="fa-regular fa-arrow-left"></i><span>Preview</span></a>
                              <h4>UX in Ecommerce</h4>
                          </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-4 col-12">
                          <div class="porfolio-details__navigation-bar porfolio-details__navigation-bar-2 text-center">
                              <a href="#">
                                <span>
                                    <svg-dots />
                                </span>
                              </a>
                          </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-4 col-12">
                          <div class="porfolio-details__navigation-content next text-center text-md-end">
                              <a href="#"><span>Next</span><i class="fa-regular fa-arrow-right"></i></a>
                              <h4>Tiktok Ads</h4>
                          </div>
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
import {gsap} from "gsap";
import imagesLoaded from "imagesloaded";
const portRef = ref<HTMLElement | null>(null);

onMounted(() => {

  const imageContainer = document.querySelector(`.tp-port-3-area`);

  if (imageContainer) {
    imagesLoaded(imageContainer, function () {
      let mm = gsap.matchMedia();
      mm.add("(min-width:1199px)", () => {
        gsap.to(portRef.value, {
          scrollTrigger: {
            trigger: ".tp-port-3-area",
            start: "top -60%",
            end: "bottom 120%",
            pin: ".tp-port-3-content-left",
            pinSpacing: false,
          }
        })
      })
    });
  } else {
    console.error('Image container not found');
  }

  
})
</script>