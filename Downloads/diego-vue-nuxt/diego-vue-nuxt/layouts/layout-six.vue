<template>
  <div>
    <back-to-top/>
    <header-five :style_2="headerStyle" />
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <main>
          <slot />
        </main>
        <footer-five/>
      </div>
    </div>
    <video-popup />
  </div>
</template>

<script setup lang="ts">
const layoutProps = useAttrs();
const headerStyle = ref<boolean>(layoutProps.style_2 ? true : false);

onMounted(() => {
  document.body.classList.add('black-bg-3');
})
</script>
