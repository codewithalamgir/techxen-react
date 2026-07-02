<template>
  <div class="ab-funfact__area ab-funfact__plr pt-110 pb-60 z-index-1 p-relative fix cursor-style">
      <div class="ab-funfact__bg ab-funfact__overlay">
        <div class="ab-funfact__bg-item" data-speed="1.1" style="background-image: url(/images/funfact/funfact-bg-1-2.jpg);"></div>
      </div>
      <div class="container">
        <div class="row">
            <div v-for="(item) in counter_data" :key="item.id" class="col-xl-4 col-lg-4 col-md-4 col-sm-6 mb-40">
              <div class="ab-funfact__item space-left-1 wow tpfadeUp" data-wow-duration=".9s" :data-wow-delay="item.delay">
                  <div class="ab-funfact__number">
                    <counter-item :min="0" :max="item.counter" />
                  </div>
                  <div class="ab-funfact__content">
                    <h4 class="ab-funfact__title-sm" v-html="item.title"></h4>
                  </div>
              </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">

const counter_data = [
  {
    id: 1,
    delay: '.3s',
    counter: 56,
    title: "Projects <br /> Completed",
  },
  {
    id: 2,
    delay: '.5s',
    counter: 12,
    title: "Years <br /> Of Experience",
  },
  {
    id: 3,
    delay: '.7s',
    counter: 34,
    title: "Client <br /> Satisfaction",
  }
]
</script>