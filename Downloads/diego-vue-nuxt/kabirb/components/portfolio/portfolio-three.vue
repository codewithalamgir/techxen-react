<template>
   <div class="porfolio-inner__thumb-wrapper tp-portfolio-effect portfolio-list-scroll-text-animation p-relative fix  black-bg-3 pt-80 pb-50" data-scrub="0.0001">
      <div class="portfolio-list-scroll-text pb-80 d-flex align-items-center">
        <p>Latest Project</p>
        <p>Latest Project</p>
      </div>
      <div class="container">
        <div class="row grid gx-90">
            <div class="col-xl-6 grid-item">

              <div class="tp-portfolio-item-wrapper">
                 <!-- portfolio item -->
                 <portfolio-item v-for="item in portfolio_data.slice(0,3)" :key="item.id" :item="item"/>
                  <!-- portfolio item -->

              </div>
            </div>
            <div class="col-xl-6 grid-item">

              <div class="tp-portfolio-item-wrapper">
                  <!-- portfolio item -->
                  <portfolio-item v-for="item in portfolio_data.slice(3,6)" :key="item.id" :item="item"/>
                  <!-- portfolio item -->

              </div>
            </div>

        </div>
      </div>
  </div>
</template>

<script setup lang="ts">

const portfolio_data = [
  {
    id: 1,
    img: '/images/portfolio/port-inner-up-1.jpg',
    title: 'Space Needle',
    category: 'Branding',
  },
  {
    id: 2,
    img: '/images/portfolio/port-inner-up-4.jpg',
    title: 'Crisis Cleanup',
    category: 'Branding',
  },
  {
    id: 3,
    img: '/images/portfolio/port-inner-up-5.jpg',
    title: 'Space Needle',
    category: 'Branding',
  },
  {
    id: 4,
    img: '/images/portfolio/port-inner-up-2.jpg',
    title: 'Space Needle',
    category: 'Branding',
  },
  {
    id: 5,
    img: '/images/portfolio/port-inner-up-3.jpg',
    title: 'Crisis Cleanup',
    category: 'Branding',
  },
  {
    id: 6,
    img: '/images/portfolio/portfolio-2.jpg',
    title: 'Space Needle',
    category: 'Branding',
  }
];

</script>