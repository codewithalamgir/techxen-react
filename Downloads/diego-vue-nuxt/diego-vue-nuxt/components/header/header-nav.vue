<template>
  <ul>
    <li v-for="(menu) in menu_data" :key="menu.id" :class="`${menu.sub_menus?'has-dropdown':''} ${menu.home_dropdown ? 'p-static' : ''}`">
        <nuxt-link :href="menu.link">{{menu.title}}</nuxt-link>
        <div v-if="menu.home_dropdown" class="tp-submenu submenu has-homemenu">
          <div class="row gx-6 row-cols-1 row-cols-md-2 row-cols-lg-4">
              <div v-for="(hm,i) in menu.sub_menus" :key="i" class="col homemenu">
                <div class="homemenu-thumb mb-15">
                    <nuxt-link :href="hm.link">
                      <img :src="hm.img" alt="">
                    </nuxt-link>
                </div>
                <div class="homemenu-content text-center">
                    <h4 class="homemenu-title">
                      <nuxt-link :href="hm.link">{{hm.title}}</nuxt-link>
                    </h4>
                </div>
              </div>
          </div>
        </div>
        <ul v-if="menu.sub_menus && !menu.home_dropdown" class="tp-submenu submenu">
          <li v-for="(sm,i) in menu.sub_menus" :key="i">
            <nuxt-link :href="sm.link">{{sm.title}}</nuxt-link>
          </li>
        </ul>
    </li>
  </ul>
</template>

<script setup lang="ts">
import menu_data from '@/data/menu-data';
</script>