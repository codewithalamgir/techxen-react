<template>
  <div id="porfolio-details" class="porfolio-details__info-wrap black-bg-3 pt-120 pb-100">
    <div class="container">
        <div class="row">
          <div class="col-xl-5 col-lg-4">
              <div class="porfolio-details__left-info">
                <div class="porfolio-details__left-content">
                    <h4 class="porfolio-details__left-info-title">Clients</h4>
                    <span>The Organic Crave</span>
                </div>
                <div class="porfolio-details__left-content">
                    <h4 class="porfolio-details__left-info-title">Role in project</h4>
                    <span>UX/UI Design - branding</span>
                </div>
                <div class="porfolio-details__left-content">
                    <h4 class="porfolio-details__left-info-title mb-20">Services</h4>
                    <span>Branding</span>
                    <span>Graphic Design</span>
                    <span>Packaging</span>
                </div>
                <div class="porfolio-details__left-content">
                    <h4 class="porfolio-details__left-info-title">Year</h4>
                    <span>2024</span>
                </div>
              </div>
          </div>
          <div class="col-xl-7 col-lg-8">
              <div class="porfolio-details__right-info">
                <div class="porfolio-details__right-title-box">
                    <span class="tp-section-subtitle-4 mb-20">ABOUT THE PROJECT</span>
                    <h4 class="tp-section-title-4 mb-35">Delivering Better Business News With an Improved User Experience.</h4>
                    <p>Booster is a B2B platform focused on increasing the revenues and overall efficiency of enterprises, whether big or small. The company offers trade analytics, consultations, and other commerce-related services to help businesses convert their visitors into leads.</p>
                </div>
                <div class="porfolio-details__right-btn">
                    <a class="tp-btn-border-md" href="#">
                      View Website
                      <span>
                          <svg-arrow-up-4 />
                      </span>
                    </a>
                </div>
              </div>
          </div>
        </div>
    </div>
  </div>

  <div class="porfolio-details__overview-wrapper black-bg-3">
    <div class="container">
        <div class="row">
          <div class="col-xl-12">
              <div class="porfolio-details__overview-thumb mb-100">
                <img data-speed="0.6" src="/images/portfolio/port-details-2.jpg" alt="">
              </div>
          </div>
          <div class="porfolio-details__overview-box mt-120 pb-135">
              <div class="row">
                <div class="col-xl-5 col-lg-4">
                    <div class="porfolio-details__overview-left">
                      <h4 class="porfolio-details__overview-title mb-40">Overview</h4>
                    </div>
                </div>
                <div class="col-xl-7 col-lg-8">
                    <div class="porfolio-details__overview-right">
                    <p>The technology that drives some of the best Platforms
                      Out there is nothing without great planning </p>
                      <div class="porfolio-details__overview-list">
                          <ul>
                            <li>Placeat laborum quam.</li>
                            <li>Corporis explicabo voluptas exercitationem</li>
                            <li> In inventore consequatur autem.</li>
                          </ul>
                      </div>
                    </div>
                </div>
              </div>
          </div>
          <div class="porfolio-details__result-box pb-70">
              <div class="row">
                <div class="col-xl-5 col-lg-4">
                    <div class="porfolio-details__result-left">
                      <h4 class="porfolio-details__overview-title mb-40">Results</h4>
                    </div>
                </div>
                <div class="col-xl-7 col-lg-8">
                    <div class="porfolio-details__result-right">
                      <div class="porfolio-details__result">
                          <span class="child-1"><em data-purecounter-duration=".7" data-purecounter-end="120" class="purecounter">120</em>%</span>
                          <span class="child-2">Months Project Duration</span>
                      </div>
                      <div class="porfolio-details__result">
                          <span class="child-1"><em data-purecounter-duration=".7" data-purecounter-end="45" class="purecounter">45</em>%</span>
                          <span class="child-2">Average daily signups</span>
                      </div>
                      <div class="porfolio-details__result">
                          <span class="child-1"> <em data-purecounter-duration=".7" data-purecounter-end="300" class="purecounter">300</em>%</span>
                          <span class="child-2">Average daily signups</span>
                      </div>
                    </div>
                </div>
              </div>
          </div>

        <client-only>
          <div class="porfolio-details__thumb-box tp-project-3__area">
              <div class="row">
                <div class="col-xl-12">
                    <div class="tp-portfolio-item-wrapper-3">
                      <div v-for="(imgSrc,i) in images" :key="i" class="tp-portfolio-item-3 portfolio-panel pb-80 tp-hover-reveal-text">
                          <a href="#">
                            <img :src="imgSrc" alt="">
                            <span></span>
                          </a>
                      </div>
                    </div>
                </div>
              </div>
          </div>
        </client-only>

          <div class="porfolio-details__navigation-wrap pb-125">
              <div class="row align-items-center">
                <div class="col-xl-4 col-lg-4 col-md-4 col-12">
                    <div class="porfolio-details__navigation-content text-center text-md-start">
                      <a href="#">
                          <i class="fa-regular fa-arrow-left"></i>
                          <span>Preview</span>
                      </a>
                      <h4>
                          Crisis Cleanup
                      </h4>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-12">
                    <div class="porfolio-details__navigation-bar text-center">
                      <a href="#">
                          <span>
                            <svg-dots />
                          </span>
                      </a>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-12">
                    <div class="porfolio-details__navigation-content next text-center text-md-end">
                      <a href="#"><span>Next</span><i class="fa-regular fa-arrow-right"></i></a>
                      <h4>
                          Tough Built
                      </h4>
                    </div>
                </div>
              </div>
          </div>

        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const {portfolioPanel} = usePinPanel();
const images = [
  '/images/portfolio/portfolio-details-img.jpg',
  '/images/portfolio/portfolio-details-img-2.jpg',
  '/images/portfolio/portfolio-details-img-3.jpg',
];

onMounted(() => {
  setTimeout(() => {
    portfolioPanel()
  },50)
})
</script>