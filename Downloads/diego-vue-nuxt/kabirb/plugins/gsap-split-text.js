import SplitText from "~/assets/plugins/gsap-split-text";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      SplitText:SplitText 
    }
  }
})
