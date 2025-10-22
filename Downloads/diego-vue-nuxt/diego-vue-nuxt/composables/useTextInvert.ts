import { gsap } from "gsap";
import imagesLoaded from "imagesloaded";

export default function useTextInvert(cls:string) {
  const { $SplitText } = useNuxtApp();
  gsap.registerPlugin($SplitText as any);
  const SplitText: any = $SplitText;

  if (typeof window !== "undefined") {
    const imageContainer = document.querySelector(`.${cls}`);

    if (imageContainer) {
      imagesLoaded(imageContainer, function () {
        const split = new SplitText(".tp_text_invert, .tp_text_invert_2", { type: "lines" });
        console.log('split', split);
        split.lines.forEach((target: any) => {
          gsap.to(target, {
            backgroundPositionX: 0,
            ease: "none",
            scrollTrigger: {
              trigger: target,
              scrub: 1,
              start: 'top 85%',
              end: "bottom center"
            }
          });
        });
      });
    } else {
      console.error('Image container not found');
    }
  }
}
