<template>
  <div class="ab-personal-info__area black-bg-3 pb-30 tp-personal-info-pin-section">
      <div class="container">
        <div class="row">
            <div class="col-xl-6 col-lg-6">
              <div class="tp-personal-info-pin">
                  <div class="ab-personal-info__left-box mr-200">
                    <div class="tp-services-wrapper tp-services-capsule-wrapper p-relative"
                        data-tp-throwable-scene="true">
                        <div class="ab-personal-info__left-content">
                          <h4 class="ab-personal-info__left-content-title">
                              <span>
                                <svg-pen-2 />
                              </span>
                              Personal Info
                          </h4>
                          <p>Perceived end knowledge certainly day sweetness why cordially.</p>
                          <a href="mailto:kabir@coderlity.com">kabir@coderlity.com</a>
                          <a href="tel:+966559758082">
                            <span> <img src="/images/about/whatsap.png" alt=""></span> 
                            +966 559 758 082
                          </a>
                        </div>
                        <!-- service capsule items -->
                        <service-capsule-items />
                        <!-- service capsule items -->
                    </div>
                  </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6">
              <div class="ab-personal-info__right-wrap">
                  <div class="ab-personal-info__skill mb-85 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".3s">
                    <h4 class="ab-personal-info__right-title">
                        <span>
                          <svg-light-bulb />
                        </span>
                        Skillsets
                    </h4>
                    <div class="p-progress-bar-wrap">
                      <div v-for="(item, index) in data.skills" :key="index" class="tp-progress-bar-item">
                        <label>{{ item.title }}</label>
                        <div class="tp-progress-bar">
                          <div class="progress">
                            <div
                              class="progress-bar wow slideInLeft"
                              data-wow-delay=".1s"
                              data-wow-duration="2s"
                              role="progressbar"
                              :data-width="`${item.percent}%`"
                              :aria-valuenow="item.percent"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              :style="{
                                width: `${item.percent}%`,
                                visibility: 'visible',
                                animationDuration: '2s',
                                animationDelay: '0.1s',
                                animationName: 'slideInLeft'
                              }">
                              <span>{{ item.percent }}%</span>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div class="ab-personal-info__exprience mb-85 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".5s">
                    <h4 class="ab-personal-info__right-title">
                        <span>
                          <svg-experience />                                       
                        </span>
                        Experience
                    </h4>
                    <div v-for="(item) in data.experience_data" :key="item.id" class="ab-personal-info__exprience-box d-flex align-items-start ">
                        <span class="ab-personal-info__exprience-length">{{ item.time }}</span>
                        <div class="ab-personal-info__exprience-content">
                          <h4 class="ab-personal-info__exprience-title">{{item.title}}</h4>
                          <span>{{item.company}}</span>
                        </div>
                    </div>
                  </div>

                  <div class="ab-personal-info__exprience mb-85 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".7s">
                    <h4 class="ab-personal-info__right-title">
                        <span>
                          <svg-education />
                        </span>
                        Education
                    </h4>
                    <div v-for="(item) in data.education_data" :key="item.id" class="ab-personal-info__exprience-box d-flex align-items-start ">
                        <span class="ab-personal-info__exprience-length">{{ item.time }}</span>
                        <div class="ab-personal-info__exprience-content">
                          <h4 class="ab-personal-info__exprience-title">{{item.title}}</h4>
                          <span>{{item.collage}}</span>
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

const data = {
  skills: [
    {
      id: 1,
      title: "Full Stack Deveolopment",
      percent: 90
    },
    {
      id: 2,
      title: "MERN ( Express, React, Node, Next js & VueJS )",
      percent: 85
    },
    {
      id: 3,
      title: "Designing ( Figma, Photoshop, illustrator, indesign )",
      percent: 80
    },
    {
      id: 4,
      title: "Digital Marketing",
      percent: 99
    }
  ],
  experience_data: [
    {
      id: 1,
      time: "2021 - Present",
      title: "Full Stack Developer",
      company: "Coderlity.com",
    },
    {
      id: 2,
      time: "2018 - 2021",
      title: "Designing & Marketing Freelancer",
      company: "Upwork.com",
    },
    {
      id: 3,
      time: "2014 - 2018",
      title: "Digital Marketeting Specialist",
      company: "Amazon.com",
    }

  ],
  education_data: [
    {
      id: 1,
      time: "2021 - 2022",
      title: "Mern Stack Development.",
      collage: "Creative IT Institute.",
    },
    {
      id: 2,
      time: "2014 - 2015",
      title: "Profasonal Digital Markering.",
      collage: "Creative IT Institute.",
    },
    {
      id: 3,
      time: "2011 - 2014",
      title: "Bachelor of Social Science.",
      collage: "Gangachara Govt College, Rangpur.",
    }

  ]
};

onMounted(() => {
  const imageContainer = document.querySelector('.tp-personal-info-pin-section');
  if (imageContainer) {
      imagesLoaded(imageContainer, function () {
      let mm = gsap.matchMedia();
      mm.add("(min-width:991px)", () => {
        gsap.to('.tp-personal-info-pin', {
          opacity: 1,
          scrollTrigger: {
            trigger: '.tp-personal-info-pin-section',
            end: "bottom bottom",
            scrub: 1,
            start: 'top 10%',
            pin: '.tp-personal-info-pin',
            markers: false
          }
        })
      })
    });
  } else {
      console.error('Image container not found');
   }
})
</script>