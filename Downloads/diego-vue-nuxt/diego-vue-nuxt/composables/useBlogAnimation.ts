import {gsap} from "gsap";

export default function useBlogAnimation() {
  const sidebarStickyTrigger = ".tp-blog-sidebar-sticky-area";
  const socialStickyTrigger = ".tp-blog-social-sticky-area";
  const addStickyAnimation = (target: string, start: string, end: string) => {
    gsap.to(target, {
      scrollTrigger: {
        trigger:
          target === ".tp-blog-sidebar-sticky"
            ? sidebarStickyTrigger
            : socialStickyTrigger,
        scrub: 1,
        start,
        end,
        pin: target,
        markers: false,
      },
    });
  };

  const mm = gsap.matchMedia();
  mm.add("(min-width: 991px)", () => {
    addStickyAnimation(".tp-blog-sidebar-sticky", "top 8%", "bottom 115%");

    if (document.querySelector(".tp-blog-social-sticky")) {
      addStickyAnimation(".tp-blog-social-sticky", "top 10%", "bottom bottom");
    }
  });
}
