<template>
  <div class="tp-footer-6-instagram-wrap">
      <div class="row">
        <div v-for="(item,i) in instagram_data" :key="i" class="col-xl-3 col-lg-3 col-md-6">
            <div class="tp-footer-6-instagram-thumb fix mb-30">
              <a :href="item.link" target="_blank">
                  <img :src="item.img" alt="image">
              </a>
            </div>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">
const instagram_data = [
  {link:'https://www.instagram.com',img:'/images/home-05/instagram/insta-1.jpg'},
  {link:'https://www.instagram.com',img:'/images/home-05/instagram/insta-2.jpg'},
  {link:'https://www.instagram.com',img:'/images/home-05/instagram/insta-3.jpg'},
  {link:'https://www.instagram.com',img:'/images/home-05/instagram/insta-4.jpg'},
]
</script>