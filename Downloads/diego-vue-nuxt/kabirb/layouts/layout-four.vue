<template>
  <div>

    <!-- back to top start -->
    <back-to-top />
    <!-- back to top end -->

    <!-- header start -->
    <header-three
      :style_2="true"
      hCls1="header-white-style-2"
      hCls2="tp-header-4-sticky-bg"
      offcanvasCls="tp-offcanvas-update-bg"
      :offcanvasWhiteLogo="true"
    />
    <!-- header end -->

    <div id="smooth-wrapper">
      <div id="smooth-content">
        <main class="fix">
          <slot />
        </main>
        <!-- footer -->
        <footer-three />
        <!-- footer -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
