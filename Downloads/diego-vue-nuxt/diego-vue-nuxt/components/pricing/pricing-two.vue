<template>
  <div class="tp-price-4-area black-bg-5 pt-150 pb-120 black-bg-6">
      <div class="container container-1320">
        <div class="tp-price-4-title-wrap mb-90">
            <div class="row align-items-end">
              <div class="col-xl-2">
                  <div class="tp-about-4-subtitle-box">
                    <span class="tp-section-subtitle-5">EXPERTISE</span>
                  </div>
              </div>
              <div class="col-xl-10">
                  <div class="tp-about-4-title-box">
                    <h2 class="tp-section-title-5 mb-20 tp_text_invert" ref="invertRef">Our <br> pricing plans</h2>
                    <p class="tp_text_invert">[ Pricing that suits your needs ]</p>
                  </div>
              </div>
            </div>
        </div>
        <div class="row">
           
            <div v-for="(item) in pricing_data" :key="item.id" class="col-xl-4 col-lg-6 col-md-6 mb-40">
              <div :class="`tp-price-4-item ${item.active ? 'active' : ''} p-relative`">
                  <span class="tp-price-4-bdr-1 bdr-topleft"></span>
                  <span class="tp-price-4-bdr-2 bdr-topright"></span>
                  <span class="tp-price-4-bdr-3 bdr-bottomleft"></span>
                  <span class="tp-price-4-bdr-4 bdr-bottomright"></span>
                  <div class="tp-price-4-head">
                    <h4 class="tp-price-4-title">{{item.title}}</h4>
                    <span class="tp-price-4-price">${{item.price}}</span>
                    <p>{{item.sm_des}}</p>
                  </div>
                  <div class="tp-price-4-btn">
                    <nuxt-link class="tp-btn-4-1-price w-100" href="/contact">
                      BOOK NOW
                    </nuxt-link>
                  </div>
                  <div class="tp-price-4-list">
                    <ul>
                        <li v-for="(l,i) in item.features" :key="i">{{l}}</li>
                    </ul>
                  </div>
              </div>
            </div>
          
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">
const pricing_data = [
  {
    id: 1,
    title: "Premium",
    price: 2400,
    sm_des: `Have more active requests at a time?`,
    features: [
      `Full-day coverage`,
      `2 photographers`,
      `Online gallery`,
      `High-resolution edited images`,
      `Engagement session included`,
    ],
  },
  {
    id: 2,
    active: true,
    title: "Basic",
    price: 1200,
    sm_des: `Have more active requests at a time?`,
    features: [
      `Full-day coverage`,
      `2 photographers`,
      `Online gallery`,
      `Engagement session included`,
    ],
  },
  {
    id: 3,
    title: "Deluxe",
    price: 3500,
    sm_des: `Have more active requests at a time?`,
    features: [
      `Full-day coverage`,
      `3 photographers`,
      `Premium photo album`,
      `Pre-wedding photo sessions`,
      `Engagement session included`,
      `Online Gallery`,
    ],
  },
];
</script>
