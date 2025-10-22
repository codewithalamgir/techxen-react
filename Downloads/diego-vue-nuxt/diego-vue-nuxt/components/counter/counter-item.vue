<template>
  <span ref="targetElement">{{ counted }}</span>
</template>

<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core';

interface CounterProps {
  min: number;
  max: number;
}

const props = defineProps<{min:number;max:number}>();

const counted = ref(props.min);
const targetElement = ref<HTMLSpanElement | null>(null);

const startCountup = () => {
  const intervalId = setInterval(() => {
    counted.value += Math.ceil(props.max / 20);
    if (counted.value >= props.max) {
      clearInterval(intervalId);
      counted.value = props.max;
    }
  }, 70);
};

const handleIntersection = () => {
    counted.value = props.min;
    startCountup();
};

const { stop } = useIntersectionObserver(
  targetElement,
  ([{ isIntersecting }], observerElement) => {
    if (isIntersecting) {
      handleIntersection();
    }
  },
)

onUnmounted(() => {
  stop();
});
</script>
