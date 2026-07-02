<template>
  <div class="tp-price-inner">
      <div class="row">
        <div v-for="item in pricing_data" :key="item.id" class="col-xl-4 col-lg-4 col-md-6 mb-70">
            <div class="tp-price-item">
              <div class="tp-price-head mb-100 text-center">
                  <h4 class="tp-price-head-title">{{ item.title }}</h4>
                  <span>{{ item.subtitle }} </span>
              </div>
              
              <div v-if="!item.style_2">
                <div class="tp-price-body mb-35 text-center">
                  <span :class="`${item.bodySubtitleCls ? item.bodySubtitleCls : ''}`">{{item.bodySubtitle}}</span>
                  <h4 class="tp-price-body-title">{{item.bodyTitle}}</h4>
                </div>
                <div class="tp-price-btn-box text-center">
                    <nuxt-link :class="`${style_2 ? 'tp-btn-price-white' : 'tp-btn-price'}`" href="/contact">
                      <div>
                          <span>{{item.btn_text}}</span>
                      </div>
                    </nuxt-link>
                </div>
              </div>

              <div v-if="item.style_2">
                <div class="tp-price-body text-center">
                  <span class="tp-price-text" v-html="item.bodyTitle"></span>
                </div>
                <div class="tp-price-btn-box text-center">
                    <nuxt-link :class="`${style_2 ? 'tp-btn-price-border-white':'tp-btn-price-border'}`" href="/contact">
                      <div>
                          <span>{{item.btn_text}}</span>
                      </div>
                    </nuxt-link>
                </div>
              </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{style_2?: boolean}>();
// pricing data
const pricing_data = [
  {
    id:1,
    title:'1 Month',
    subtitle:'Paid monthly',
    bodySubtitle:'Cancel anytime',
    bodySubtitleCls:'',
    bodyTitle:'$1300/mo',
    btn_text:'Get Started',
  },
  {
    id:2,
    title:'3 Months',
    subtitle:'Paid monthly',
    bodySubtitle:'Save $800',
    bodySubtitleCls:'tp-price-radius-border',
    bodyTitle:'$4200/mo',
    btn_text:'Get Started',
  },
  {
    id:3,
    title:'Check the skill',
    subtitle:'Check the skill',
    bodyTitle:'You can order <br> 1 free task',
    btn_text:'Free Skill Check',
    style_2:true,
  },
];
</script>