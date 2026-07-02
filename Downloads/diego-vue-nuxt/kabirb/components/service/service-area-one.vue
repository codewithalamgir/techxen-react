<template>
  <section id="tp-sv" class="tp-services-area tp-sv tp-services-bg-text-animation fix">
      <div class="container container-large">
        <div class="tp-services-inner pb-195 p-relative z-index-1">

            <span class="tp-services-inner-border tp-vertical-line transition-3"></span>
            <span class="tp-services-inner-border right tp-vertical-line transition-3"></span>

            <div class="tp-services-bottom-text tp-services-bg-text ">
              <p>Services</p>
            </div>
            <div class="row gx-0">
              <div class="col-xl-6 col-lg-7">
                  <div class="tp-services-wrapper tp-services-capsule-wrapper p-relative  pt-100 pr-70"
                    data-tp-throwable-scene="true">
                    <div class="tp-section-title-wrapper tp_text_anim mb-170">
                        <div class="tp-section-title-inner p-relative">
                          <span class="tp-section-subtitle">Services</span>
                          <h3 class="tp-section-title tp_title_anim">Solution <br> we provide.</h3>
                        </div>
                        <p>Bringing Code, Design, and Marketing Together to Transform Digital Experiences.</p>
                    </div>
                    <!-- service capsule items -->
                    <service-capsule-items />
                    <!-- service capsule items -->
                  </div>
              </div>
              <div class="col-xl-6 col-lg-5">
                  <div class="tp-services-accordion tp-accordion tp-accordion-2 mt-90 pl-70 p-relative">
                    <span class="tp-services-accordion-border"></span>
                    <div class="accordion" id="accordionExample">
                        <div v-for="(item) in accordion_data" :key="item.id" :class="`accordion-item tp-services-accordion-item ${item.active ? 'active' :''}`">
                          <h2 class="accordion-header" :id="`heading-${item.tab_id}`">
                              <button :class="`accordion-button ${item.active ? '' : 'collapsed'}`" type="button"
                                data-bs-toggle="collapse" :data-bs-target="`#collapse-${item.tab_id}`" :aria-expanded="`${item.active ? 'true' : 'false'}`" :aria-controls="`collapse-${item.tab_id}`">
                                <span>{{`${item.id > 9 ? item.id : `0${item.id}`}`}}</span>
                                {{item.question}}
                              </button>
                          </h2>
                          <div :id="`collapse-${item.tab_id}`" :class="`accordion-collapse collapse ${item.active ? 'show' : ''}`" :aria-labelledby="`heading-${item.tab_id}`" data-bs-parent="#accordionExample">
                              <div class="accordion-body">
                                <p>{{item.answer}} </p>
                                <ul>
                                    <li v-for="(l,i) in item.lists" :key="i">{{l}}</li>
                                </ul>
                              </div>
                          </div>
                          <span class="accordion-item-border"></span>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </div>
  </section>
</template>

<script setup lang="ts">
import throwableAnimation from '@/utils/throwableAnim';

const accordion_data = [
    {
      id: 1,
      tab_id: "one",
      question: "Web Development",
      answer: "Project systematization is at the core of my development approach. I focus on creating scalable, high-performance websites.",
      lists: [
        "Full-stack development",
        "Server-side programming",
        "Front-end architecture",
      ]
    },
    {
      id: 2,
      tab_id: "two",
      active:true,
      question: "App Development",
      answer: "I build mobile and web apps that prioritize user experience and functionality across all devices.",
      lists: [
        "Native mobile apps",
        "Cross-platform development",
        "Performance optimization",
      ]
    },
    {
      id: 3,
      tab_id: "three",
      question: "UI/UX Design",
      answer: "Crafting seamless and engaging user experiences is my passion. I design intuitive interfaces that ensure usability and aesthetics.",
      lists: [
        "Interface design",
        "Prototyping and wireframing",
        "User testing and feedback",
      ]
    },
    {
      id: 4,
      tab_id: "four",
      question: "Digital Marketing",
      answer: "I provide tailored marketing strategies to ensure your digital presence drives growth and visibility.",
      lists: [
        "SEO and SEM",
        "Social media management",
        "Content marketing and strategy",
      ]
    }
  ];


  onMounted(() => {
    throwableAnimation();
  })
</script>