export default function use3dSlider(projectLength: number) {
  const activeIndex = ref(2);

  const numberOfSlides = ref(projectLength);
  const handleArrowClick = (direction: "left" | "right") => {
    const nextIndex =
      direction === "left" ? activeIndex.value - 1 : activeIndex.value + 1;
    if (nextIndex >= 0 && nextIndex < numberOfSlides.value) {
      activeIndex.value = nextIndex;
    }
  };

  watch(activeIndex, () => {
    const tp3dSlideWrapper = document.getElementById("tp-3d-slide-wrapper");
    if (!tp3dSlideWrapper) return;

    const dir = document.documentElement.getAttribute("dir");
    let startX = 0;
    let endX = 0;
    const handleTouchStart = (event: TouchEvent) => {
      startX = event.touches[0].clientX;
    };
    const handleTouchEnd = (event: TouchEvent) => {
      endX = event.changedTouches[0].clientX;
      handleSwipe();
    };
    const handleSwipe = () => {
      const deltaX = endX - startX;
      const sensitivity = 50;
      if (Math.abs(deltaX) > sensitivity) {
        if ((dir === "rtl" && deltaX < 0) || (dir !== "rtl" && deltaX > 0)) {
          activeIndex.value = activeIndex.value + 1;
        } else {
          activeIndex.value = activeIndex.value - 1;
        }
      }
    };

    tp3dSlideWrapper.addEventListener("touchstart", handleTouchStart);
    tp3dSlideWrapper.addEventListener("touchend", handleTouchEnd);

    const handleDotClick = (index: number) => {
      if (index >= 0 && index < numberOfSlides.value) {
        activeIndex.value = index;
      }
    };

    const updateSlides = () => {
      const slides = document.querySelectorAll(".tp-3d-slide");

      slides.forEach((slide, index) => {
        const classes = ["prev-1", "prev-2", "active", "next-1", "next-2"];
        slide.classList.remove(...classes);

        if (index === activeIndex.value) {
          slide.classList.add("active");
        } else if (index === activeIndex.value - 1) {
          slide.classList.add("prev-1");
        } else if (index === activeIndex.value - 2) {
          slide.classList.add("prev-2");
        } else if (index === activeIndex.value + 1) {
          slide.classList.add("next-1");
        } else if (index === activeIndex.value + 2) {
          slide.classList.add("next-2");
        }
      });
    };

    const handleDotClickWrapper = (index: number) => {
      handleDotClick(index);
    };
    document.querySelectorAll(".dots span").forEach((dot, index) => {
      dot.addEventListener("click", () => handleDotClickWrapper(index));
    });

    updateSlides();

    return () => {
      tp3dSlideWrapper.removeEventListener("touchstart", handleTouchStart);
      tp3dSlideWrapper.removeEventListener("touchend", handleTouchEnd);
      document.querySelectorAll(".dots span").forEach((dot, index) => {
        dot.removeEventListener("click", () => handleDotClickWrapper(index));
      });
    };
  });


  return {
    activeIndex,
    handleArrowClick,
  }
}
