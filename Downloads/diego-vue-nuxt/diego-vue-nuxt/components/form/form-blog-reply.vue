<template>
  <form action="#" class="box">
    <div class="row gx-20">
      <div class="col-xxl-6 col-xl-6 col-lg-6">
          <div class="postbox__comment-input mb-35">
            <input type="text" class="inputText" required>
            <span class="floating-label">Your  Name</span>
            <span class="floating-label">Your Name</span>
          </div>
      </div>
      <div class="col-xxl-6 col-xl-6 col-lg-6">
          <div class="postbox__comment-input mb-35">
            <input type="text" class="inputText" required>
            <span class="floating-label">Your  Email</span>
          </div>
      </div>
      <div class="col-xxl-12">
          <div class="postbox__comment-input mb-20">
            <textarea class="textareaText" required></textarea>
            <span class="floating-label-2">Your  Comment</span>
          </div>
      </div>
      <div class="col-xxl-12">
          <div class="postbox__comment-agree">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  I agree that my submitted data is being collected and stored.
                </label>
            </div>
          </div>
      </div>
      <div class="col-xxl-12">
          <div class="postbox__comment-btn">
            <button type="submit" class="tp-btn-white-lg">
                <span>
                  <i>Post comment</i>
                </span>
            </button>
          </div>
      </div>
    </div>
</form>
</template>

<script setup lang="ts">

</script>