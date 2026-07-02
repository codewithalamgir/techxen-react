<template>
  <div class="tp-insta-4-area black-bg-5 pt-120 cursor-style">
      <div class="row justify-content-center">
        <div class="col-xl-3 col-lg-4">
            <div class="tp-insta-4-title-box text-center mb-60">
              <h4 class="tp-insta-4-title">FOLLOW ME ON INSTAGRAM <span>@Kabir</span></h4>
            </div>
        </div>
      </div>
      <div class="row gx-0 row-cols-xl-5 row-cols-lg-5 row-cols-md-3 row-cols-sm-2">
        <div v-for="(item, i) in instagram_data" :key="i" class="col-xl">
            <div class="tp-insta-4-thumb fix">
              <a class="hide-cursor" :href="item.link" target="_blank">
                  <img :src="item.img" alt="image">
              </a>
            </div>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">
const instagram_data = [
  {link:'https://www.instagram.com',img:'/images/new-img/instagram/insta-1.jpg'},
  {link:'https://www.instagram.com',img:'/images/new-img/instagram/insta-2.jpg'},
  {link:'https://www.instagram.com',img:'/images/new-img/instagram/insta-3.jpg'},
  {link:'https://www.instagram.com',img:'/images/new-img/instagram/insta-4.jpg'},
  {link:'https://www.instagram.com',img:'/images/new-img/instagram/insta-5.jpg'},
]
</script>