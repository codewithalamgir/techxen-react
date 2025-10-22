<template>
  <div :class="`sidebar__wrapper tp-blog-sidebar-sticky ${cls}`">
      <div class="sidebar__widget mb-60">
        <div class="sidebar__widget-content">
            <h3 class="sidebar__widget-title">Search Here</h3>
            <div class="sidebar__search">
              <form action="#">
                  <div class="sidebar__search-input-2">
                    <input type="text" placeholder="Search...">
                    <button type="submit">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.6 16.2C12.7974 16.2 16.2 12.7974 16.2 8.6C16.2 4.40264 12.7974 1 8.6 1C4.40264 1 1 4.40264 1 8.6C1 12.7974 4.40264 16.2 8.6 16.2Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M16.9984 17L15.3984 15.4" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                  </div>
              </form>
            </div>
        </div>
      </div>
      <div class="sidebar__widget mb-60">
        <h3 class="sidebar__widget-title">Category</h3>
        <div class="sidebar__widget-content">
            <ul>
              <li><nuxt-link href="/blog">Design<span>[7]</span></nuxt-link></li>
              <li><nuxt-link href="/blog">Experience<span>[4]</span></nuxt-link></li>
              <li><nuxt-link href="/blog">Uncategorized<span>[0]</span></nuxt-link></li>
              <li><nuxt-link href="/blog">Digital<span>[3]</span></nuxt-link></li>
            </ul>
        </div>
      </div>
      <div class="sidebar__widget mb-60">
        <h3 class="sidebar__widget-title">Recent Post</h3>
        <div class="sidebar__widget-content">
            <div class="sidebar__post rc__post">
              <div v-for="(rc) in rc_posts" :key="rc.id" class="rc__post mb-30 d-flex align-items-center">
                  <div class="rc__post-thumb mr-20">
                    <nuxt-link :href="`/blog-details/${rc.id}`">
                      <img :src="rc.img" alt="">
                    </nuxt-link>
                  </div>
                  <div class="rc__post-content">
                    <h3 class="rc__post-title">
                        <nuxt-link :href="`/blog-details/${rc.id}`">
                          {{rc.title}}
                        </nuxt-link>
                    </h3>
                    <div class="rc__meta d-flex align-items-center">
                        <span>{{rc.category}}</span>
                        <span class="text-2"><i>.</i>{{rc.date}}</span>
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </div>
      <div class="sidebar__widget mb-60">
        <h3 class="sidebar__widget-title">Tags</h3>
        <div class="sidebar__widget-content">
            <div class="tagcloud">
              <a href="#">symphony</a>
              <a href="#">nokia</a>
              <a href="#">tech</a>
              <a href="#">Samsung</a>
              <a href="#">Alcatel</a>
              <a href="#">mous</a>
              <a href="#">landing</a>
              <a href="#">Oppos</a>
            </div>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">
import blog_data from "@/data/blog-data";
const rc_posts = [...blog_data].slice(-2);
withDefaults(defineProps<{cls?: string}>(),{
  cls:''
});
</script>