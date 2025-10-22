<template>
  <div :class="`tp-offcanvas-area-2 tp-menu-2 ${isOffCanvasOpen?'opened':''}`">
      <div class="tp-offcanvas-shape">
         <img class="tp-offcanvas-shape-2" src="/images/offcanvas/bg-shape-3.png" alt="">
      </div>
      <div class="tp-offcanvas-circle-1">
         <span></span>
      </div>
      <div class="tp-offcanvas-circle-2">
         <span></span>
      </div>
      <div class="tp-offcanvas-wrapper">
         <div class="tp-offcanvas-top-2 d-flex align-items-center justify-content-between">
            <div class="tp-offcanvas-logo-2">
               <a href="#">
                  <img class="logo-white" src="/images/logo/logo.png" alt="">
                  <img class="logo-black" src="/images/logo/logo-black.png" alt="">
               </a>
            </div>
            <div class="tp-offcanvas-close-2">
               <button @click="closeOffcanvas" class="tp-offcanvas-close-btn-2 tp-offcanvas-open-btn-2">
                  <svg-close/>
               </button>
            </div>
         </div>
         <div class="tp-offcanvas-main-2">
            <div class="tp-offcanvas-content-2">
               <h3 class="tp-offcanvas-content-title-2">Hello There!</h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
            </div>
            <div class="tp-main-menu-mobile d-lg-none">
               <nav>
                  <offcanvas-menus />
               </nav>
            </div>
            <div class="tp-offcanvas-gallery">
               <div class="row gx-2">
                  <div v-for="(imgSrc,i) in gallery_images" :key="i" class="col-md-3 col-3">
                     <div class="tp-offcanvas-gallery-img fix">
                        <a href="#"><img :src="imgSrc" alt=""></a>
                     </div>
                  </div>
               </div>
            </div>
            <div class="tp-offcanvas-contact-2">
               <h3 class="tp-offcanvas-contact-title-2">Information</h3>

               <ul>
                  <li><a href="tel:1245654">+966559 758 082</a></li>
                  <li><a href="mailto:kabir@coderlity.com">kabir@coderlity.com</a></li>
                  <li><a href="#">Al Aziziya, Jeddah, Saudi Arabia</a></li>
               </ul>
            </div>
            <div class="tp-offcanvas-social-2">
               <h3 class="tp-offcanvas-contact-title-2">Follow Us</h3>
               <ul>
                  <li>
                     <a href="https://www.instagram.com/codewithkabir/" target="_blank" rel="noopener">
                        <svg-instagram />
                     </a>
                  </li>
                  <li>
                     <a href="https://dribbble.com/codekabir" target="_blank" rel="noopener">
                        <svg-dribble />
                     </a>
                  </li>
                  <li>
                     <a href="https://www.behance.net/codekabir" target="_blank" rel="noopener">
                        <svg-behance />
                     </a>
                  </li>
                  <li>
                     <a href="https://www.youtube.com/@codebykabir" target="_blank" rel="noopener">
                        <svg-youtube />
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{isOffCanvasOpen:boolean;}>(),{});
const emit = defineEmits();

const closeOffcanvas = () => {
  emit('closeOffcanvas');
};
const gallery_images = [
  '/images/offcanvas/offcanvas-1.jpg',
  '/images/offcanvas/offcanvas-2.jpg',
  '/images/offcanvas/offcanvas-3.jpg',
  '/images/offcanvas/offcanvas-2.jpg',
];
</script>