<template>
  <div>
    <back-to-top/>
    <header-five />
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <main>
          <slot />
        </main>
        <footer-one cls="tp-footer__customize  black-bg-3 p-relative fix z-index-1" :style_2="true"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  document.body.classList.add('black-bg-3');
});
</script>
