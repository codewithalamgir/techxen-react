<template>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>

<script setup lang="ts">
const {tpSetScheme} = useThemeToggle();
onMounted(async () => {
	const wow = await import('wow.js')
	new wow.default().init()
});
onMounted(() => {
  tpSetScheme('tp-theme-dark');
})
</script>
