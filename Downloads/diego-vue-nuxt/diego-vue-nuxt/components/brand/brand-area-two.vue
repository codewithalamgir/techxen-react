<template>
  <div class="ab-brand__area black-bg-3 pb-100 ab-brand__plr">
      <div class="container-fluid">
        <div class="row gx-20 row-cols-xl-6 row-cols-lg-4 row-cols-md-3 row-cols-sm-2">
            <div v-for="i in 6" :key="i" class="col-xl mb-20">
              <div class="ab-brand__item wow tpfadeUp" data-wow-duration=".9s" :data-wow-delay="`.${i+1}s`">
                  <a href="">
                    <span>
                        <svg-brand-icon/>
                    </span>
                  </a>
              </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">

</script>