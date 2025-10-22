import ScrollTrigger from "~/assets/plugins/gsap-scroll-trigger";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      ScrollTrigger:ScrollTrigger 
    }
  }
})
