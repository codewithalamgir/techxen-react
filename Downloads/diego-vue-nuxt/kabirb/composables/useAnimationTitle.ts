import {gsap} from "gsap";

export default function useAnimationTitle() {
  const { $SplitText } = useNuxtApp();
  gsap.registerPlugin($SplitText as any);
  const SplitText:any = $SplitText;

  const title = document.querySelector('.tp_title_anim');
  const text = document.querySelector('.tp_text_anim p');
  if (typeof window !== "undefined") {
    if (title) {
      let splitTitleLines = gsap.utils.toArray(".tp_title_anim");
      splitTitleLines.forEach((splitTextLine:any) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: splitTextLine,
            start: 'top 90%',
            end: 'bottom 60%',
            scrub: false,
            markers: false,
            toggleActions: 'play none none none'
          }
        });

        const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
        gsap.set(splitTextLine, { perspective: 400 });
        itemSplitted.split({ type: "lines" })
        tl.from(itemSplitted.lines, {
          duration: 1,
          delay: 0.3,
          opacity: 0,
          rotationX: -80,
          force3D: true,
          transformOrigin: "top center -50",
          stagger: 0.1
        });
      });
    }


    if (text) {
      let splitTextLines = gsap.utils.toArray(".tp_text_anim p");

      splitTextLines.forEach((splitTextLine:any) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: splitTextLine,
            start: 'top 90%',
            // duration: 2,
            end: 'bottom 60%',
            scrub: false,
            markers: false,
            toggleActions: 'play none none none'
          }
        });

        const itemSplitted = new SplitText(splitTextLine, { type: "lines" });
        gsap.set(splitTextLine, { perspective: 400 });
        itemSplitted.split({ type: "lines" })
        tl.from(itemSplitted.lines, {
          duration: 1,
          delay: 0.7,
          opacity: 0,
          rotationX: -80,
          force3D: true,
          transformOrigin: "top center -50",
          stagger: 0.1
        });
      });
    }


  }

  // title animation for home 05
  if (typeof window !== "undefined") {
    let project_text = gsap.timeline({
      scrollTrigger: {
        trigger: ".tp-project-5-2-area",
        start: 'top center-=350',
        end: "bottom 150%",
        pin: ".tp-project-5-2-title",
        markers: false,
        pinSpacing: false,
        scrub: 1,
      }
    })
    project_text.set(".tp-project-5-2-title", {
      scale: .6,
      duration: 2
    })
    project_text.to(".tp-project-5-2-title", {
      scale: 1,
      duration: 2
    })
    project_text.to(".tp-project-5-2-title", {
      scale: 1,
      duration: 2
    }, "+=2")
  }

    // title animation for home 05
  const st = document.querySelectorAll('.tp-split-text');
  if (st.length === 0) return;
  gsap.registerPlugin(SplitText);
  st.forEach((el:any) => {
      const split = new SplitText(el, {
          type: "lines,words,chars",
          linesClass: "tp-split-line"
      });

      gsap.set(el, { perspective: 400 });

      if (el.classList.contains('tp-split-in-right')) {
          gsap.set(split.chars, {
              opacity: 0,
              x: "50",
              ease: "Back.easeOut",
          });
      }
      if (el.classList.contains('tp-split-in-left')) {
          gsap.set(split.chars, {
              opacity: 0,
              x: "-50",
              ease: "circ.out",
          });
      }
      if (el.classList.contains('tp-split-in-up')) {
          gsap.set(split.chars, {
              opacity: 0,
              y: "80",
              ease: "circ.out",
          });
      }
      if (el.classList.contains('tp-split-in-down')) {
          gsap.set(split.chars, {
              opacity: 0,
              y: "-80",
              ease: "circ.out",
          });
      }

      el.anim = gsap.to(split.chars, {
          scrollTrigger: {
              trigger: el,
              start: "top 90%",
          },
          x: "0",
          y: "0",
          rotateX: "0",
          scale: 1,
          opacity: 1,
          duration: 0.4,
          stagger: 0.02,
      });
  });
  
}