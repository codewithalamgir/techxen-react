<template>
  <div class="tp-project-5-2-area pt-120 pb-130 coffe-bg z-index-1">
      <div class="container container-1790">
        <div class="row">
            <div class="col-xl-12">
              <div class="tp-project-5-2-title-box mb-170 text-center">
                  <h4 class="tp-project-5-2-title">Portfolio</h4>
              </div>
            </div>
        </div>
        <div class="tp-project-5-2-wrap z-index-1">
            <div v-for="pItems in portfolio_data" :key="pItems.id" class="tp-project-5-2-item-wrap">
              <div class="row align-items-center justify-content-between">
                  <div v-for="item in pItems.items" :key="item.id" :class="`${item.col}`">
                    <nuxt-link class="cursor-hide" href="/portfolio-details-2">
                        <div :class="`tp-project-5-2-item ${item.id === 3 ? 'space-left' : ''} not-hide-cursor`" data-cursor="View<br>Demo">
                          <div class="tp-project-5-2-thumb">
                              <img :src="item.img" alt="">
                          </div>
                          <div class="tp-project-5-2-content">
                              <span>{{item.date}}</span>
                              <h4 class="tp-project-5-2-title-sm">{{item.title}}</h4>
                          </div>
                        </div>
                    </nuxt-link>
                  </div>
              </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-xl-3 col-lg-4 col-md-6">
              <div class="tp-project-5-2-btn text-center p-relative">
                  <div class="tp-project-5-2-shape d-none d-lg-block">
                    <span>
                        <svg-shape-line />
                    </span>
                  </div>
                  <nuxt-link href="/portfolio">
                    SEE MORE PROJECTS
                    <span>
                        <svg-arrow-up-3/>
                    </span>
                  </nuxt-link>
              </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">

const portfolio_data = [
  {
    id:1,
    items: [
      {
        id: 1,
        img: '/images/home-05/project-2/project-1.jpg',
        date: `Modelling - 2024`,
        title: `Hannah & John`,
        col: `col-xxl-3 col-xl-4 col-lg-6 col-md-6`,

      },
      {
        id: 2,
        img: '/images/home-05/project-2/project-2.jpg',
        date: `Modelling - 2024`,
        title: `Siyantika  Glory`,
        col: `col-xxl-6 col-xl-6 col-lg-6 col-md-6`,

      },
    ]
  },
  {
    id:2,
    items: [
      {
        id: 3,
        img: '/images/home-05/project-2/project-3.jpg',
        date: `Modelling - 2024`,
        title: `Out of this world`,
        col: `col-xxl-6 col-xl-6 col-lg-6 col-md-6`,

      },
      {
        id: 4,
        img: '/images/home-05/project-2/project-4.jpg',
        date: `Modelling - 2024`,
        title: `Album cover`,
        col: `col-xxl-3 col-xl-4 col-lg-5 col-md-6`,

      },
    ]
  },
  {
    id:3,
    items: [
      {
        id: 5,
        img: '/images/home-05/project-2/project-5.jpg',
        date: `Modelling - 2024`,
        title: `The Smiths`,
        col: `col-xxl-3 col-xl-4 col-lg-6 col-md-6`,

      },
      {
        id: 6,
        img: '/images/home-05/project-2/project-6.jpg',
        date: `Modelling - 2024`,
        title: `Digital Paintings`,
        col: `col-xxl-6 col-xl-6 col-lg-6 col-md-6`,
      },
    ]
  },
]
</script>