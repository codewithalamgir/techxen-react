<template>
  <div>
    <!-- blog title -->
    <div class="blog-standard__area pt-200">
      <div class="container">
        <div class="row">
          <div class="blog-list__title-box">
            <span class="blog-list__subtitle tp-char-animation">Recent Articles</span>
            <h4 class="blog-list__title tp-char-animation">From Our Blogs</h4>
          </div>
        </div>
      </div>
    </div>
    <!-- blog title -->

    <!-- postbox area start -->
    <section class="postbox__area tp-blog-sidebar-sticky-area pb-120">
      <div class="container">
        <div class="row">
          <div class="col-xxl-8 col-xl-8 col-lg-8">
            <div class="postbox__wrapper">
              <template v-for="blog in blog_items" :key="blog.id">
                <blog-postbox-item :blog="blog" />
              </template>
              <div class="blog-list__btn">
                <a class="tp-btn-black-lg" href="#">Load more
                  <span><i class="fa-sharp fa-regular fa-arrow-right"></i></span>
                </a>
              </div>
            </div>
          </div>
          <div class="col-xxl-4 col-xl-4 col-lg-4">
            <!-- sidebar -->
            <blog-sidebar />
            <!-- sidebar -->
          </div>
        </div>
      </div>
    </section>
    <!-- postbox area end -->
  </div>
</template>

<script setup lang="ts">
import blog_data from "@/data/blog-data";
const blog_items = [...blog_data].filter((b) => b.page === "blog-postbox");
</script>
