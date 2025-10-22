<template>
  <section class="tp-skill-area pt-115 pb-105 p-relative z-index-1 fix theme-bg-2"
       style="background-image: url(/images/skill/bg-distort.png);">
      <div class="tp-skill-shape">
        <span class="tp-skill-shape-1"></span>
        <span class="tp-skill-shape-2"></span>
      </div>
      <div class="container">
        <div class="row">
            <div class="col-xl-12">
              <div class="tp-skill-section-title">
                  <div class="tp-section-title-wrapper tp_text_anim mb-30 text-center">
                    <div class="tp-section-title-inner tp_title_anim p-relative">
                        <span class="tp-section-subtitle">Advantage</span>
                        <h3 class="tp-section-title">Skills & tools</h3>
                    </div>
                    <p>For those who know what they're looking for..</p>
                  </div>
              </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-12">
              <div class="tp-skill-tab tp-tab d-flex align-items-center justify-content-center mb-70">
                  <nav>
                    <div class="nav nav-tabs tp-marker-tab" id="nav-tab" role="tablist">
                        <button class="nav-link " id="nav-tech-tab" data-bs-toggle="tab"
                          data-bs-target="#nav-tech" type="button" role="tab" aria-controls="nav-tech"
                          aria-selected="true">Tech</button>
                        <button class="nav-link active" id="nav-design-tab" data-bs-toggle="tab"
                          data-bs-target="#nav-design" type="button" role="tab" aria-controls="nav-design"
                          aria-selected="false">Design</button>
                        <button class="nav-link" id="nav-marketing-tab" data-bs-toggle="tab"
                          data-bs-target="#nav-marketing" type="button" role="tab" aria-controls="nav-marketing"
                          aria-selected="false">Digital Marketing</button>
                        <span id="lineMarker"></span>
                    </div>
                  </nav>
              </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-12">
              <div class="tab-content" id="nav-tabContent">
                  <div v-for="(item,i) in skill_data" :key="i" :class="`tab-pane fade ${item.active ? 'show active' : ''}`" :id="`nav-${item.tab_id}`" role="tabpanel" :aria-labelledby="`nav-${item.tab_id}-tab`"
                    tabindex="0">
                    <div class="tp-skill-tab-content tp-skill-radius">
                        <div class="row">
                          <div v-for="(s,i) in item.items" :key="i" class="col-xl-2 col-lg-3 col-md-3 col-6">
                              <div class="tp-skill-item text-center">
                                <div
                                    class="tp-skill-thumb d-flex align-items-center justify-content-center flex-column">
                                    <div class="tp-skill-icon">
                                      <span>
                                          <img :src="s.img" alt="">
                                      </span>
                                    </div>
                                    <h3 class="tp-skill-count">
                                      <span>{{s.percent}}</span>%
                                    </h3>
                                </div>
                                <div class="tp-skill-content">
                                    <h3 class="tp-skill-title">{{s.title}}</h3>
                                </div>
                              </div>
                          </div>
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
const {tpTabLine2} = useTabLine();

const skill_data = [
  {
    tab_id: "tech",
    items: [
      {
        img: '/images/skill/angular.png',
        title: "Angular",
        percent: 85
      },
      {
        img: '/images/skill/wp.png',
        title: "WordPress",
        percent: 95
      },
      {
        img: '/images/skill/nodejs.png',
        title: "NodeJS",
        percent: 60
      },
      {
        img: '/images/skill/html.png',
        title: "HTML",
        percent: 97
      },
      {
        img: '/images/skill/webflow.png',
        title: "Webflow",
        percent: 80,
      },
      {
        img: '/images/skill/vue.png',
        title: "Vue",
        percent: 90
      }
    ],
  },
  {
    tab_id: "design",
    active: true,
    items: [
      {
        img: '/images/skill/figma.png',
        title: "Figma",
        percent: 95,
      },
      {
        img: '/images/skill/canva.png',
        title: "Canva",
        percent: 98
      },
      {
        img: '/images/skill/photoshop.png',
        title: "Photoshop",
        percent: 98
      },
      {
        img: '/images/skill/xd.png',
        title: "Adobe XD",
        percent: 85
      },
      {
        img: '/images/skill/in.png',
        title: "InVision",
        percent: 70
      },
      {
        img: '/images/skill/ai.png',
        title: "Illustrator",
        percent: 80
      }
    ],
  },
  {
    tab_id: "marketing",
    items: [
      {
        img: '/images/skill/seo.png',
        title: "SEO",
        percent: 90
      },
      {
        img: '/images/skill/smm.png',
        title: "SMM",
        percent: 85
      },
      {
        img: '/images/skill/sem.png',
        title: "SEM",
        percent: 80
      },
      {
        img: '/images/skill/contain.png',
        title: "Content Marketing",
        percent: 95
      },
      {
        img: '/images/skill/ads.png',
        title: "Google Ads",
        percent: 87,
      },
      {
        img: '/images/skill/analytics.png',
        title: "Google Analytics",
        percent: 80
      }
    ],
  }
];

onMounted(() => {
  tpTabLine2();
})
</script>