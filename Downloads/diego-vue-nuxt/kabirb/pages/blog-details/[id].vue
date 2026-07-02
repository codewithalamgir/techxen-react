<template>
  <div>
    <nuxt-layout name="layout-six">

      <!-- blog details area -->
      <template v-if="blog">
        <blog-details-area :blog="blog"/>
      </template>>
      <!-- blog details area -->

    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
import blog_data from "@/data/blog-data";
import type { IBlogDT } from "@/types/blog-d-t";
useSeoMeta({ title: "Blog Details Page - Kabir" });
definePageMeta({ layout: false });

const route = useRoute();
const router = useRouter();
const blogId = ref(route.params.id);
const blog = ref<IBlogDT | undefined>();


onMounted(() => {
  useSmoothScroll();

  
  blog.value = [...blog_data].find((b) => b.id === Number(blogId.value));
  if(!blog.value) {
    router.push('/blog');
  }
  else {
    
   }
});
</script>
