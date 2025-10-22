import { gsap } from "gsap";

export default function useSmoothScroll() {
  const isSmoothScroll = ref<boolean>(true);

  const { $ScrollSmoother, $ScrollTrigger } = useNuxtApp();
  gsap.registerPlugin($ScrollTrigger as any, $ScrollSmoother as any);

  if (isSmoothScroll.value) {
    const smother = $ScrollSmoother as any;
    smother.create({
      smooth: 1.35,
      effects: true,
      smoothTouch: false,
      normalizeScroll: false,
      ignoreMobileResize: true,
    });
  }
  else {
    console.log('Smooth scroll is disabled');
  }
}