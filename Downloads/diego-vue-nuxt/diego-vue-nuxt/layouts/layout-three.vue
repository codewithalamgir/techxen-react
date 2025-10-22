<template>
  <div>

    <!-- back to top start -->
    <back-to-top/>
    <!-- back to top end -->

    <!-- header start -->
    <header-three/>
    <!-- header end -->

    <div id="smooth-wrapper" class="black-bg-3">
      <div id="smooth-content">
        <main>
          <slot />
        </main>
        <!-- footer -->
        <footer-two/>
        <!-- footer -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
