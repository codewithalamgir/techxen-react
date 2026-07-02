import ScrollSmoother from "~/assets/plugins/gsap-scroll-smoother";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      ScrollSmoother:ScrollSmoother
    }
  }
})