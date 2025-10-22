import {gsap} from "gsap";

export default function useMoveText() {
  const slideRefs = ref<Array<HTMLElement | null>>([]);

  const moveText = (event: MouseEvent, index: number) => {
    const hoverTextRef = slideRefs.value[index];
    if (hoverTextRef) {
      const item = hoverTextRef.getBoundingClientRect();
      const x = event.clientX - item.left;
      const y = event.clientY - item.top;

      const children = hoverTextRef.children;
      if (children[0] && children[0].children[2]) {
        (
          children[0].children[2] as HTMLElement
        ).style.transform = `translate(${x}px, ${y}px)`;
      }
    }
  };

  function btnMouseMove() {

    const footerBtnSection = document.querySelector('.tp-mouse-move-btn-section') as HTMLElement;
    const footerBtn = document.querySelector('.tp-mouse-move-btn') as HTMLElement;

    if (footerBtnSection && footerBtn) {
      footerBtnSection.addEventListener('mousemove', (e: MouseEvent) => {
        const x = e.clientX;
        const y = e.clientY;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const center = viewportWidth / 2;
        const centerHeight = viewportHeight / 2;

        if (x > center) {
          gsap.to(footerBtn, {
            x: 100,
            duration: 2,
            ease: 'power4.out'
          });
        } else {
          gsap.to(footerBtn, {
            x: -100,
            duration: 2,
            ease: 'power4.out'
          });
        }

        if (y > centerHeight) {
          gsap.to(footerBtn, {
            y: 100,
            duration: 2,
            ease: 'power4.out'
          });
        } else {
          gsap.to(footerBtn, {
            y: -100,
            duration: 2,
            ease: 'power4.out'
          });
        }
      });
    }

  }
  return {
    slideRefs,
    moveText,
    btnMouseMove,
  }
}