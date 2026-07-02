<template>
  <div>
    <header>
      <div class="tp-header-area tp-header-mob-space tp-header-transparent p-relative">
        <span class="tp-header-border" style="width: 100%"></span>
        <div class="container container-large">
          <div class="tp-header-box p-relative">
            <div class="row align-items-center">
              <div class="col-xl-2 col-lg-2 col-md-5 col-6">
                <div class="logo">
                  <nuxt-link class="logo-white" href="/">
                    <img src="/images/logo/logo.png" alt="" style="width: 115px" />
                  </nuxt-link>
                  <nuxt-link class="logo-black" href="/">
                    <img
                      style="width: 115px"
                      src="/images/logo/logo-black.png"
                      alt=""
                    />
                  </nuxt-link>
                </div>
              </div>
              <div class="col-xl-6 col-lg-7 d-none d-lg-block">
                <div class="main-menu">
                  <nav class="tp-main-menu-content">
                    <!-- header nav -->
                    <header-nav />
                    <!-- header nav -->
                  </nav>
                </div>
              </div>
              <div class="col-xl-4 col-lg-3 col-md-7 col-6">
                <div class="tp-header-right d-flex align-items-center justify-content-end">
                  <div class="tp-theme-toggle">
                    <label
                      class="tp-theme-toggle-main themepure-theme-toggle"
                      for="this-s"
                    >
                      <span class="tp-theme-toggle-light">
                        <svg-light-icon />
                      </span>
                      <input
                        type="checkbox"
                        class="themepure-theme-toggle-input"
                        id="this-s"
                      />
                      <i class="tp-theme-toggle-slide"></i>
                      <span class="tp-theme-toggle-dark">
                        <svg-dark-icon />
                      </span>
                    </label>
                  </div>
                  <div class="tp-header-cv ml-10 d-none d-md-block">
                    <a class="tp-header-cv-btn" href="/images/cv/my_cv.pdf">
                      <svg-download />
                    </a>
                  </div>
                  <div class="tp-header-hamburger ml-20">
                    <button
                      @click="handleOffCanvas"
                      class="tp-hamburger-btn tp-hamburger-btn-white tp-menu-bar tp-offcanvas-open-btn-2"
                      type="button"
                    >
                      <span></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- header area end -->

    <!-- header area start -->
    <header>
      <div id="sticky-header" :class="`tp-header-area tp-header-mob-space tp-header-transparent p-relative tp-int-menu tp-header-sticky-cloned ${isStickyVisible && sticky?'tp-header-pinned':''}`">
        <div class="container container-large">
          <div class="tp-header-box p-relative">
            <div class="row align-items-center">
              <div class="col-xl-2 col-lg-2 col-md-5 col-6">
                <div class="logo">
                  <nuxt-link class="logo-white" href="/">
                    <img style="width: 115px" src="/images/logo/logo.png" alt="" />
                  </nuxt-link>
                  <nuxt-link class="logo-black" href="/">
                    <img
                      style="width: 115px"
                      src="/images/logo/logo-black.png"
                      alt=""
                    />
                  </nuxt-link>
                </div>
              </div>
              <div class="col-xl-6 col-lg-7 d-none d-lg-block">
                <div class="main-menu">
                  <nav class="tp-main-menu-content">
                    <!-- header nav -->
                    <header-nav />
                    <!-- header nav -->
                  </nav>
                </div>
              </div>
              <div class="col-xl-4 col-lg-3 col-md-7 col-6">
                <div class="tp-header-right d-flex align-items-center justify-content-end">
                  <div class="tp-theme-toggle">
                    <label
                      for="this-ss" :class="`tp-theme-toggle-main themepure-theme-toggle ${isActive ? 'dark-active' : 'light-active'}`"
                      @change="toggleTheme"
                    >
                      <span class="tp-theme-toggle-light">
                        <svg-light-icon />
                      </span>
                      <input
                        type="checkbox"
                        class="themepure-theme-toggle-input"
                        id="this-ss"
                      />
                      <i class="tp-theme-toggle-slide"></i>
                      <span class="tp-theme-toggle-dark">
                        <svg-dark-icon />
                      </span>
                    </label>
                  </div>
                  <div class="tp-header-cv ml-10 d-none d-md-block">
                    <a class="tp-header-cv-btn" href="/images/cv/mycv.docx">
                      <svg-download />
                    </a>
                  </div>
                  <div class="tp-header-hamburger ml-20">
                    <button
                      @click="handleOffCanvas"
                      class="tp-hamburger-btn tp-hamburger-btn-white tp-menu-bar tp-offcanvas-open-btn-2"
                      type="button"
                    >
                      <span></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- header area end -->
  </div>

  <!-- offcanvas area start -->
  <offcanvas-two :isOffCanvasOpen="isOffCanvasOpen" @close-offcanvas="handleOffCanvas"/>
  <!-- offcanvas area end -->
</template>

<script setup lang="ts">
const {sticky,isStickyVisible} = useSticky();
const {isActive,toggleTheme,tpInitTheme} = useThemeToggle();

const isOffCanvasOpen = ref<boolean>(false);

const handleOffCanvas = () => {
  isOffCanvasOpen.value = !isOffCanvasOpen.value;
};

onMounted(() => {
    tpInitTheme();
    const themeInput = document.querySelector('.themepure-theme-toggle-input') as HTMLInputElement;
    themeInput.addEventListener('change', toggleTheme);
})
</script>
