<template>
  <div>

    <!-- back to top start -->
    <back-to-top />
    <!-- back to top end -->

    <!-- header start -->
    <header-three
      :style_3="true"
      :hCls1="`${headerInnerStyle ? 'tp-header-5-inner-style' : ''} tp-header-5-style`"
      :hCls2="`${headerInnerStyle ? 'tp-header-5-inner-style' : ''} tp-header-5-sticky-bg`"
      containerCls="container container-1720"
      offcanvasCls="tp-offcanvas-update-bg-2"
    />
    <!-- header end -->

    <div id="smooth-wrapper">
      <div id="smooth-content">
        <main class="fix">
          <slot />
        </main>
        <!-- footer -->
        <footer-four />
        <!-- footer -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const layoutProps = useAttrs();
const headerInnerStyle = ref<boolean>(layoutProps.innerStyle ? true : false);
</script>
