<template>
  <footer>
    <div :class="`tp-footer-bg ${cls}`" :style="`background-image: url(${bgImg});`">
      <div class="tp-footer-circle-1">
        <span></span>
      </div>
      <div class="tp-footer-circle-2">
        <span></span>
      </div>
      <div class="tp-footer-circle-3" data-speed=".7">
        <span></span>
      </div>
      <!-- footer area start -->
      <div :class="`tp-footer-area ${style_2 ? 'tp-footer-inner__customize' : ''} pt-120 pb-80`">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="tp-footer-content text-center">
                <h3 :class="`tp-footer-title ${style_2 ? '' : 'big'} tp_title_anim`">
                  Let's talk about <br> the next big thing
                </h3>
              </div>
            </div>
          </div>
          <div class="tp-footer-btn-box">
            <div class="row">
              <div class="col-xl-6 col-lg-6 col-md-6">
                <div class="tp-footer-btn text-center">
                  <a :class="`${style_2 ? 'tp-btn-white-xl' : 'tp-btn-green'} w-100`" href="mailto:WriteaMessage">
                    <div>
                      <span>Write a Message</span>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6">
                <div class="tp-footer-btn text-center">
                  <nuxt-link :class="`${style_2 ? 'tp-btn-grey-xl' : 'tp-btn-white-xl'} w-100`" href="/contact">
                    <div>
                      <span>Discuss Project</span>
                    </div>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
          <div class="row gx-50">
            <!-- Add Footer Social Links -->
            <div class="col-xl-12">
              <div class="social-links text-center">
                <a href="https://www.facebook.com/codewithalamgir" target="_blank" class="social-icon facebook">
                  <img src="/public/images/icon/social/facebook.png" alt="Facebook" />
                </a>
                <a href="https://www.youtube.com/@codebykabir" target="_blank" class="social-icon youtube">
                  <img src="/public/images/icon/social/youtube.png" alt="YouTube" />
                </a>
                <a href="https://www.tiktok.com/@coderlity" target="_blank" class="social-icon tiktok">
                  <img src="/public/images/icon/social/tiktok.png" alt="TikTok" />
                </a>
                <a href="https://www.instagram.com/codewithkabir/" target="_blank" class="social-icon instagram">
                  <img src="/public/images/icon/social/instagram.png" alt="Instagram" />
                </a>
                <a href="https://t.me/codebykabir" target="_blank" class="social-icon telegram">
                  <img src="/public/images/icon/social/telegram.png" alt="Telegram" />
                </a>
                <a href="https://x.com/codebykabir" target="_blank" class="social-icon twitter">
                  <img src="/public/images/icon/social/twitter.png" alt="Twitter" />
                </a>
                <a href="https://www.linkedin.com/in/codewithkabir/" target="_blank" class="social-icon linkedin">
                  <img src="/public/images/icon/social/linkedin.png" alt="LinkedIn" />
                </a>
                <a href="https://github.com/codewithalamgir" target="_blank" class="social-icon github">
                  <img src="/public/images/icon/social/github.png" alt="GitHub" />
                </a>
                <a href="https://www.behance.net/codekabir" target="_blank" class="social-icon behance">
                  <img src="/public/images/icon/social/behance.png" alt="Behance" />
                </a>
                <a href="https://dribbble.com/codekabir" target="_blank" class="social-icon dribbble">
                  <img src="/public/images/icon/social/dribbble.png" alt="Dribbble" />
                </a>
                <a href="https://wa.me/+966559758082" target="_blank" class="social-icon whatsapp">
                  <img src="/public/images/icon/social/WhatsApp.png" alt="WhatsApp" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- footer area end -->

      <!-- copyright area start -->
      <div class="tp-copyright-area pb-20">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-md-6">
              <div class="tp-copyright-content-left text-center text-md-start">
                <p>{{ new Date().getFullYear() }} Kabir, All Rights Reserved •
                  <span>Credits</span>
                </p>
              </div>
            </div>
            <div class="col-xl-6 col-md-6">
              <div class="tp-copyright-content-right text-center text-md-end">
                <span>{{ new Date().getFullYear() }} Portfolio</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- copyright area end -->
    </div>
  </footer>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ cls?: string; style_2?: boolean }>(), {
  cls: 'tp-footer-bg-light p-relative fix z-index-1 theme-bg-2',
  style_2: false,
});
const bgImg = ref<string>(props.style_2 ? '/images/footer/overly-bg-2.png' : '/images/skill/bg-distort.png');
</script>

<style scoped>
.social-links {
  margin-top: 20px;
}

.social-icon {
  display: inline-block;
  margin: 0 15px;
  width: 40px;
  height: 40px;
  transition: transform 0.3s ease-in-out;
}

.social-icon img {
  width: 100%;
  height: 100%;
}

.social-icon:hover {
  transform: scale(1.2);
}
</style>