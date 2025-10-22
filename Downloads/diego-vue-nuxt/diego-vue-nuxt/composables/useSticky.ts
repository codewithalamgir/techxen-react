import { ref, onMounted, onUnmounted } from 'vue';



const useSticky = () => {
  const sticky = ref<boolean>(false);
  const isStickyVisible = ref<boolean>(false);

  let lastScrollTop = 0;

  const handleScroll = (): void => {
    const headerElement = document.getElementById('sticky-header');
    const headerHeight = headerElement?.offsetHeight || 0;

    const windowTop = window.scrollY;

    if (windowTop >= headerHeight) {
      sticky.value = true;
    } else {
      sticky.value = false;
      isStickyVisible.value = false;
    }

    if (sticky.value) {
      if (windowTop < lastScrollTop) {
        isStickyVisible.value = true;
      } else {
        isStickyVisible.value = false;
      }
    }

    const currentScrollTop = windowTop;
    if (currentScrollTop <= 500) {
      document.querySelector('.tp-int-menu')?.classList.remove('tp-header-pinned');
    }
    lastScrollTop = windowTop;
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  return {
    sticky,
    isStickyVisible,
  };
};

export default useSticky;
