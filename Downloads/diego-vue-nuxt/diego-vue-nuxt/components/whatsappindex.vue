<template>
  <div>
    <h1>Welcome to My Website</h1>
    <!-- WhatsApp Chat Button -->
    <WhatsAppButton />
  </div>
</template>

<script>
import WhatsAppButton from '@/components/WhatsAppButton.vue'; // Import the WhatsApp button component

export default {
  components: {
    WhatsAppButton, // Register the component
  },
};
</script>

<style scoped>
/* You can add global styles here if needed */
</style>