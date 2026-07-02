<template>
  <div class="section">
    <div
      class="tp-hero-2__bg black-bg-3 tp-hero-2__space-3 d-flex align-items-start justify-content-center z-index-1 p-relative fix"
    >
      <div
        class="tp-hero-distort-2"
        style="background-image: url(/images/hero/hero-2-overlay.png)"
      ></div>
      <div class="tp-hero-2__circle-wrapper">
        <span class="tp-hero-2__circle-1"></span>
        <span class="tp-hero-2__circle-2"></span>
        <span class="tp-hero-2__circle-3"></span>
        <span class="tp-hero-2__circle-4"></span>
      </div>
      <div class="tp-hero-2__boder-circle tp-hero-2__boder-circle-tr">
        <span></span>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="tp-hero-2__service-accordion">
              <span class="tp-hero-2__service-title">
                <img
                  class="tp-zoom-in-out"
                  src="/images/services/shape/services-shape-3.png"
                  alt=""
                />
                OUR SERVICES
              </span>
              <div class="accordion" id="accordionExample">
                <div
                  v-for="(item, i) in service_data"
                  :key="item.id"
                  class="accordion-items tp-hero-2__accordion-item tp-hover-reveal-item active"
                  @mousemove="($event) => handleMouseMove($event, '.tp-hover-reveal-item')"
                >
                  <h2 class="accordion-header">
                    <button
                      class="accordion-buttons"
                      type="button"
                      data-bs-toggle="collapse"
                      :data-bs-target="`#collapse-${item.id}`"
                      :aria-expanded="`${item.active ? 'true' : 'false'}`"
                      :aria-controls="`collapse-${item.id}`"
                    >
                      <svg-line />
                      {{ item.question}}
                      <span>{{ i > 8 ? i : `0${i + 1}` }}</span>
                      <span class="accordion-btn-wrap">
                        <span class="accordion-btn"></span>
                      </span>
                    </button>
                  </h2>
                  <div
                    class="tp-hover-reveal-bg"
                    :style="`background-image:url(${item.bg_img})`"
                  ></div>
                  <div
                    :id="`collapse-${item.id}`"
                    :class="`accordion-collapse collapse ${item.active ? 'show' : ''}`"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <p>{{ item.ans }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { handleMouseMove } = useHoverReveal();
const service_data = [
  {
    id: "one",
    active: true,
    bg_img: "/images/faq/faq-4.jpg",
    question: "Visual design",
    ans: "Crafting well designed digital products is our superpower and we're not afraid to use it! The product design phase is where your business ideas and our creative vision come to life. Crafting well designed digital products is our superpower and we're not afraid to use it! The product design phase.",
  },
  {
    id: "two",
    bg_img: "/images/faq/faq-1.jpg",
    question: "Product design",
    ans: "Crafting well designed digital products is our superpower and we're not afraid to use it! The product design phase is where your business ideas and our creative vision come to life. Crafting well designed digital products is our superpower and we're not afraid to use it! The product design phase.",
  },
  {
    id: "three",
    bg_img: "/images/faq/faq-2.jpg",
    question: "UI kits / Design systems",
    ans: "Crafting well designed digital products is our superpower and we're not afraid to use it! The product design phase is where your business ideas and our creative vision come to life. Crafting well designed digital products is our superpower and we're not afraid to use it! The product design phase.",
  },
  {
    id: "four",
    bg_img: "/images/faq/faq-3.jpg",
    question: "Strategy",
    ans: "Crafting well designed digital products is our superpower and we're not afraid to use it! The product design phase is where your business ideas and our creative vision come to life. Crafting well designed digital products is our superpower and we're not afraid to use it! The product design phase.",
  },
];
</script>
