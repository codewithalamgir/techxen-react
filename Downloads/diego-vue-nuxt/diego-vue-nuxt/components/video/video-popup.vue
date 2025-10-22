<template>
  <div id="video-overlay" class="video-overlay" @click="closeVideo">
    <a class="video-overlay-close" @click.prevent="closeVideo">×</a>
  </div>
</template>

<script setup lang="ts">
const {closeVideo} = useVideoPopup();
</script>
