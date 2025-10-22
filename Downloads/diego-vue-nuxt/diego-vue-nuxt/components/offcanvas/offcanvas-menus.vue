<template>
  <ul>
    <template v-for="(item, index) in menu_data" :key="index">
      <li v-if="item.home_dropdown" :class="`has-dropdown ${isActive ? '' : 'active'}`" @mouseover="isActive = true" @mouseleave="isActive = false">
        <nuxt-link :href="item.link" :class="navTitle === item.title ? 'expanded' : ''">
          {{ item.title }}
          <button class="dropdown-toggle-btn" @click="toggleMobileMenu(item.title)" :class="navTitle === item.title ? 'dropdown-opened' : ''">
            <svg-plus/>
          </button>
        </nuxt-link>
        <ul class="tp-submenu submenu" v-if="navTitle === item.title" :style="navTitle === item.title ? 'display: block' : ''">
          <li v-for="(sub_menu, sub_index) in item.mobile_menus" :key="sub_index">
            <nuxt-link :href="sub_menu.link">{{ sub_menu.title }}</nuxt-link>
          </li>
        </ul>
      </li>
      <li v-else-if="item.has_dropdown" :class="`has-dropdown ${isActive ? '' : 'active'}`" @mouseover="isActive = true" @mouseleave="isActive = false">
        <nuxt-link :href="item.link" :class="navTitle === item.title ? 'expanded' : ''">
          {{ item.title }}
          <button class="dropdown-toggle-btn" @click="toggleMobileMenu(item.title)" :class="navTitle === item.title ? 'dropdown-opened' : ''">
            <svg-plus/>
          </button>
        </nuxt-link>
        <ul class="tp-submenu submenu" v-if="navTitle === item.title" :style="navTitle === item.title ? 'display: block' : ''">
          <li v-for="(sub_menu, sub_index) in item.sub_menus" :key="sub_index">
            <nuxt-link :href="sub_menu.link">{{ sub_menu.title }}</nuxt-link>
          </li>
        </ul>
      </li>
      <li v-else :class="`${isActive ? '' : 'active'}`" @mouseover="isActive = true" @mouseleave="isActive = false">
        <nuxt-link :href="item.link">{{ item.title }}</nuxt-link>
      </li>
    </template>
  </ul>

</template>

<script setup lang="ts">
import menu_data from '@/data/menu-data';

const isActive = ref<boolean>(false);
const navTitle = ref('');

const toggleMobileMenu = (menu: string) => {
  navTitle.value = navTitle.value === menu ? '' : menu;
};

</script>