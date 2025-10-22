<template>
  <div>
    <back-to-top/>
    <header-one />
    <div
      id="smooth-wrapper"
      class="tp-page-wrapper theme-bg"
      style="background-image:url(/images/bg/distort-bg.png)"
    >
      <div id="smooth-content">
        <main>
          <slot />
        </main>
        <footer-one/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
