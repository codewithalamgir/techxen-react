<template>
  <template v-if="!style_2">
    <div
      v-for="item in footer_social"
      :key="item.id"
      class="col-xl-4 col-lg-4 col-md-6 mb-30"
    >
      <a href="#">
        <div
          class="tp-footer-social-item d-flex align-items-center justify-content-between"
        >
          <span class="tp-footer-anim-border"></span>
          <div class="tp-footer-social-text z-index-1">
            <span class="child-1">{{ item.name }}</span>
            <span class="child-2">{{ item.title }}</span>
          </div>
          <div class="tp-footer-social-icon z-index-1">
            <span v-html="item.icon"></span>
          </div>
        </div>
      </a>
    </div>
  </template>

  <div v-if="style_2" class="tp-footer-4__social">
    <a v-for="s in social_2" :key="s.id" :href="s.link" target="_blank">
      <span v-html="s.icon"></span>
    </a>
  </div>
</template>

<script setup lang="ts">
defineProps<{ style_2?: boolean }>();
const footer_social = [
  {
    id: 1,
    name: "Behance",
    title: "@codekabir",
    icon: `<svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1 6H6.83333C8.25 6 9.33333 7.08333 9.33333 8.5C9.33333 9.91667 8.25 11 6.83333 11H1.83333C1.33333 11 1 10.6667 1 10.1667V1.83333C1 1.33333 1.33333 1 1.83333 1H6C7.41667 1 8.5 2.08333 8.5 3.5C8.5 4.91667 7.41667 6 6 6H1Z" stroke="currentcolor" stroke-width="1.5" stroke-miterlimit="10" /> <path d="M10.9997 7.66634H17.6664C17.6664 5.83301 16.1664 4.33301 14.333 4.33301C12.4997 4.33301 10.9997 5.83301 10.9997 7.66634ZM10.9997 7.66634C10.9997 9.49967 12.4997 10.9997 14.333 10.9997H15.7497" stroke="currentcolor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" /> <path d="M15.5831 2.25H13.0831" stroke="currentcolor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" /> </svg>`,
  },
  {
    id: 2,
    name: "Dribble",
    title: "@codekabir",
    icon: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M2.07295 12.9993C4.28172 16.825 9.17363 18.1358 12.9993 15.927C14.5588 15.0267 15.7003 13.6806 16.356 12.1425C17.3088 9.90737 17.2355 7.26695 15.927 5.00067C14.6186 2.73439 12.3686 1.35064 9.95647 1.05826C8.29667 0.857067 6.56009 1.17262 5.00067 2.07295C1.17497 4.28172 -0.135817 9.17363 2.07295 12.9993Z" stroke="currentcolor" stroke-width="1.5" /> <path d="M12.9595 15.8578C12.9595 15.8578 12.2084 10.5858 10.6004 7.80063C8.99241 5.01548 5.04119 2.14298 5.04119 2.14298M5.46266 16.0532C6.64777 12.478 12.5618 8.51493 16.8898 9.46439M12.5309 1.96875C11.3408 5.505 5.54035 9.41017 1.23254 8.56176" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" /> </svg>`,
  },
  {
    id: 3,
    name: "Instagram",
    title: "@codewithkabir",
    icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11.5 1H4.5C2.567 1 1 2.567 1 4.5V11.5C1 13.433 2.567 15 4.5 15H11.5C13.433 15 15 13.433 15 11.5V4.5C15 2.567 13.433 1 11.5 1Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /> <path  d="M10.8002 7.55921C10.8866 8.14178 10.7871 8.73676 10.5158 9.25952C10.2446 9.78228 9.81539 10.2062 9.28932 10.471C8.76326 10.7358 8.1671 10.8279 7.58564 10.7344C7.00417 10.6408 6.46702 10.3663 6.05057 9.94982C5.63413 9.53338 5.3596 8.99622 5.26603 8.41476C5.17247 7.8333 5.26463 7.23714 5.52941 6.71107C5.7942 6.18501 6.21812 5.75583 6.74087 5.48458C7.26363 5.21333 7.85861 5.11382 8.44119 5.20021C9.03543 5.28833 9.58558 5.56524 10.0104 5.99003C10.4352 6.41482 10.7121 6.96496 10.8002 7.55921Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /> <path d="M11.8499 4.15137H11.8599" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /> </svg>`,
  },
];

const social_2 = [
  {
    id: 1,
    link: "https://www.behance.net",
    icon: `<svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12.25 13.75H4.75C2.5 13.75 1 12.625 1 10V4.75C1 2.125 2.5 1 4.75 1L12.25 1C14.5 1 16 2.125 16 4.75V10C16 12.625 14.5 13.75 12.25 13.75Z" stroke="currentcolor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" /> <path d="M12.25 5.12488L9.9025 6.99988C9.13 7.61488 7.8625 7.61488 7.09 6.99988L4.75 5.12488" stroke="currentcolor" stroke-width="1.5" stroke-miterlimit="10"  stroke-linecap="round" stroke-linejoin="round" /></svg>`,
  },
  {
    id: 2,
    link: "https://www.dribbble.com",
    icon: `<svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M2.50589 12.2494C4.57662 15.836 9.16278 17.0648 12.7494 14.9941C14.2113 14.15 15.2816 12.888 15.8962 11.4461C16.7895 9.35066 16.7208 6.87526 15.4941 4.75063C14.2674 2.62599 12.1581 1.32872 9.89669 1.05462C8.34063 0.866 6.71259 1.16183 5.25063 2.00589C1.66403 4.07662 0.435172 8.66278 2.50589 12.2494Z" stroke="currentcolor" stroke-width="1.5" /> <path d="M12.712 14.9291C12.712 14.9291 12.0079 9.98655 10.5004 7.37547C8.99289 4.76439 5.28862 2.07143 5.28862 2.07143M5.68375 15.1123C6.79479 11.7605 12.3392 8.04512 16.3967 8.93525M12.3103 1.90808C11.1945 5.22332 5.75659 8.88441 1.71802 8.08903" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" /> </svg>`,
  },
  {
    id: 3,
    link: "mailto:kabir@coderliy.com",
    icon: `<svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1 5.50008H6.25009C7.52511 5.50008 8.50013 6.47509 8.50013 7.75012C8.50013 9.02514 7.52511 10.0002 6.25009 10.0002H1.75001C1.30001 10.0002 1 9.70015 1 9.25014V1.75001C1 1.30001 1.30001 1 1.75001 1H5.50008C6.7751 1 7.75012 1.97502 7.75012 3.25004C7.75012 4.52506 6.7751 5.50008 5.50008 5.50008H1Z" stroke="currentcolor" stroke-width="1.5" stroke-miterlimit="10" /> <path d="M9.99988 7.00005H16C16 5.35002 14.65 4 12.9999 4C11.3499 4 9.99988 5.35002 9.99988 7.00005ZM9.99988 7.00005C9.99988 8.65008 11.3499 10.0001 12.9999 10.0001H14.275" stroke="currentcolor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" /> <path d="M14.1249 2.125H11.8749" stroke="currentcolor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" /> </svg>`,
  },
  {
    id: 4,
    link: "https://www.youtube.com",
    icon: `<svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12.75 13H5.25C3 13 1.5 11.5 1.5 9.25V4.75C1.5 2.5 3 1 5.25 1H12.75C15 1 16.5 2.5 16.5 4.75V9.25C16.5 11.5 15 13 12.75 13Z" stroke="currentcolor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" /> <path d="M8.70822 5.14898L10.802 6.40526C11.5558 6.90777 11.5558 7.66154 10.802 8.16405L8.70822 9.42033C7.8707 9.92285 7.20068 9.50409 7.20068 8.58281V6.07025C7.20068 4.98147 7.8707 4.64646 8.70822 5.14898Z" fill="currentcolor" /> </svg>`,
  },
];
</script>
