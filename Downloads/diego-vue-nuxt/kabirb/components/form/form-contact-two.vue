<template>
  <form id="contact-form" class="box" @submit="onSubmit">
    <div class="row">
        <div class="col-xl-12">
          <div class="contact-inner__category mb-85">
              <h4 class="contact-inner__category-title">I'm interested in...</h4>
              <div class="contact-inner__category-wrapper">
                <label v-for="(c,i) in categories" :key="i" :class="`contact-category-btn ${state.activeCategory.includes(c) ? 'active' : ''}`" @click="handleActiveCategory(c)">{{c}}</label>
              </div>
          </div>
        </div>
    </div>
    <div class="contact-inner__wrapper">
        <div class="postbox__comment-form">
          <h3 class="contact-inner__form-title">Request A Quote</h3>
          <div class="row gx-20">
              <div class="col-xxl-6 col-xl-6 col-lg-6 mb-35">
                <div class="postbox__comment-input">
                  <Field name="name" v-slot="{ field }">
                    <input v-bind="field" name="name" type="text" class="inputText">
                  </Field>
                  <span class="floating-label">Your Name</span>
                </div>
                <err-msg :msg="errors.name"/>
              </div>
              <div class="col-xxl-6 col-xl-6 col-lg-6 mb-35">
                <div class="postbox__comment-input">
                  <Field name="company" v-slot="{ field }">
                    <input v-bind="field" name="company" type="text" class="inputText">
                  </Field>
                    <span class="floating-label">Company</span>
                </div>
                <err-msg :msg="errors.company"/>
              </div>

              <div class="col-xxl-12 mb-35">
                <div class="postbox__comment-input">
                  <Field name="email" v-slot="{ field }">
                    <input v-bind="field" name="email" type="email" class="inputText">
                  </Field>
                    <span class="floating-label">Your Email</span>
                </div>
                <err-msg :msg="errors.email"/>
              </div>

              <div class="col-xxl-12 mb-20">
                <div class="postbox__comment-input">
                  <Field name="message" v-slot="{ field }">
                    <textarea v-bind="field" name="message" class="textareaText"></textarea>
                  </Field>
                    <span class="floating-label-2">Your Comment</span>
                </div>
                <err-msg :msg="errors.message"/>
              </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-12">
              <div class="contact-inner__category mb-45">
                <h4 class="contact-inner__category-title">Project budget (USD)</h4>
                <div class="contact-inner__category-wrapper">
                    <label v-for="(b,i) in budgets" :key="i" :class="`contact-budget-btn ${state.activeBudget === b ? 'active' : ''}`" @click="handleBudget(b)">{{b}}</label>
                </div>
              </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xxl-12">
              <div class="postbox__comment-btn">
                <button type="submit" class="tp-btn-grey-lg">
                    <span>
                      <i>Send Message</i>
                    </span>
                </button>
              </div>
          </div>
        </div>
    </div>
    <p class="ajax-response"></p>
  </form>
</template>

<script setup lang="ts">
const categories = ref([
  'Branding','Web Design','App Design','Logo','Digital Marketing','Android Development','iOS Development','Design Concept','Other'
]);
const budgets = ref(['10-20k','30-40k','40-50k','50-100k',' > 100k']);
const state = reactive({
  activeCategory: ['Branding','Logo'],
  activeBudget: '40-50k'
});

const handleActiveCategory = (c: string) => {
  if(state.activeCategory.includes(c)){
    state.activeCategory.splice(state.activeCategory.indexOf(c),1);
  }
  else{
    state.activeCategory.push(c);
  }
};
const handleBudget = (b: string) => {
  state.activeBudget = b;
};

import { useForm,Field } from 'vee-validate';
import * as yup from 'yup';
import emailjs from "@emailjs/browser";

interface IFormValues {
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  company?: string | null;
  message?: string | null;
}
const { errors, handleSubmit,resetForm } = useForm<IFormValues>({
  validationSchema: yup.object({
    name: yup.string().required().label("Name"),
    email: yup.string().required().email().label("Email"),
    phone: yup.string().required().label("Phone"),
    company: yup.string().required().label("Company"),
    message: yup.string().required().label("Message")
  }),
});

const onSubmit = handleSubmit(values => {
  
  const templateParams = {
      name: values.name,
      email: values.email,
      subject: values.phone,
      message: values.message,
      company: values.company,
    };
    if (values) {
      emailjs
        .send(
          'service_gnu2rla', 
          'template_ilrquco', 
          templateParams,
          'tDbxqotWh8Z0dv0h6'
        )
        .then(
          (response) => {
            alert('Your message sent successfully');
          },
          (err) => {
            alert(err?.text);
          }
        );
    }
  resetForm()
});
</script>