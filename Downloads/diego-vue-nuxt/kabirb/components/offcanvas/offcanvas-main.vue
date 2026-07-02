<template>
  <div :class="`tp-offcanvas-area ${isOffCanvasOpen?'opened':''} ${cls}`">
      <div class="tp-offcanvas-bg is-left"></div>
      <div class="tp-offcanvas-bg is-right d-none d-md-block">
         <div class="tp-offcanvas-shape">
            <img class="tp-offcanvas-shape-1" src="/images/offcanvas/bg-shape-2.png" alt="">
         </div>
      </div>
      <div class="tp-offcanvas-wrapper-2">
         <div class="tp-offcanvas-left">
            <div class="tp-offcanvas-left-wrap d-flex justify-content-between align-items-center">
               <div class="tpoffcanvas__logo">
                  <img class="logo-white" :src="`${style_2 ? '/images/logo/logo-white.png' : '/images/logo/logo.png'}`" alt="">
                  <img v-if="!style_2" class="logo-black" src="/images/logo/logo-black.png" alt="">
               </div>
               <div class="tp-offcanvas-close d-md-none text-end">
                  <button @click="closeOffcanvas" class="tp-offcanvas-close-btn tp-offcanvas-close-btn">
                     <span class="text">
                        <span>close</span>
                     </span>
   
                     <span class="d-inline-block">
                        <span>
                           <svg-close/>
                        </span>
                     </span>
                     
                  </button>
               </div>
            </div>
            <div class="tp-main-menu-mobile menu-hover-active counter-row">
               <nav>
                  <offcanvas-menus />
               </nav>
            </div>
         </div>
         <div class="tp-offcanvas-right d-none d-md-block">
            <div class="tp-offcanvas-close text-end">
               <button @click="closeOffcanvas" class="tp-offcanvas-close-btn tp-offcanvas-close-btn">
                  <span class="text">
                     <span>close</span>
                  </span>

                  <span class="d-inline-block">
                     <span>
                      <svg-close/>
                     </span>
                  </span>
                  
               </button>
            </div>
            <div class="tp-offcanvas-right-inner d-flex flex-column justify-content-between h-100">
               
               <div class="tpoffcanvas__right-info">
                  <div class="tpoffcanvas__tel">
                     <a href="tel:61404093954">+966 559758082</a>
                  </div>
                  <div class="tpoffcanvas__mail">
                     <a href="mailto:hellokabir@coderlity.com">
                        hello kabir@coderlity.com</a>
                  </div>
                  <div class="tpoffcanvas__text">
                     <p>If in doubt. reach out.</p>
                  </div>
               </div>
               
               <div class="tpoffcanvas__social-link">
                  <ul>
                     <li><a href="#">Dribbble</a></li>
                     <li><a href="#">Instagram</a></li>
                     <li><a href="#">Linkedin</a></li>
                     <li><a href="#">Behance</a></li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
import social_data from "@/data/social-data";
withDefaults(defineProps<{isOffCanvasOpen:boolean;cls?:string;style_2?:boolean}>(),{
  cls:"",
  style_2:false
});
const emit = defineEmits();

const closeOffcanvas = () => {
  emit('closeOffcanvas');
};
</script>