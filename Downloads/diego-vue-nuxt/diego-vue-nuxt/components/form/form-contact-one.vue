<template>
  <form action="#">
    <div class="row">
        <div class="col-xl-4 col-lg-4 mb-50">
          <div class="tp-contact-2__input">
              <input class="input-field" type="text" placeholder="Your Name">
              <span class="focus-border"></span>
          </div>
        </div>
        <div class="col-xl-4 col-lg-4 mb-50">
          <div class="tp-contact-2__input">
              <input class="input-field" type="text" placeholder="Your Email">
              <span class="focus-border"></span>
          </div>
        </div>
        <div class="col-xl-4 col-lg-4 mb-50">
          <div class="tp-contact-2__select">
              <ui-nice-select
                  :options="[
                    { value: 'subject', text: 'Subject (optional)' },
                    { value: 'support', text: 'Online Support' },
                    { value: 'security', text: 'Live Security' },
                    { value: 'protection', text: 'Hack Protection' }
                  ]"
                  name="subject"
                  :default-current="0"
                  @onChange="changeHandler"
                  class-name="input-field"
                />
              <span class="focus-border"></span>
          </div>
        </div>
        <div class="col-xl-12">
          <div class="tp-contact-2__textarea">
              <textarea class="input-field"
                placeholder="Your message here..."></textarea>
              <span class="focus-border"></span>
          </div>
        </div>
        <div class="col-xl-12">
          <div class="tp-contact-2__btn text-center ">
              <div class="parallax-wrap d-inline-block">
                <div class="parallax-element">
                    <button class="tp-btn-pink-large">
                      <span data-hover="Send Message">
                          Send Message
                      </span>
                    </button>
                </div>
              </div>
          </div>
        </div>
    </div>
  </form>
</template>

<script setup lang="ts">

const changeHandler = (e: { value: string; text: string }) => {
  console.log(e);
};
</script>