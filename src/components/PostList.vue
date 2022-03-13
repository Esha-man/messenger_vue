<template>
  <div v-show="posts.length > 0" class="postList">
    <h3 class="postList">Posts list</h3>
    <one-post
        :key="post.id"
        class="post"
        v-for="post in posts"
        v-bind:posts="post"
        @remove="$emit('remove', post)"
    >
    </one-post>
  </div>
  <h3 v-show="posts.length === 0" class="title">
    I wait your post!
  </h3>
</template>

<script>

import OnePost from "@/components/OnePost";

export default {
  name: "PostList",
  components: {OnePost},
  props: {
    posts: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped>
.postList {

}

.title {
  padding: 10px;
  
}
</style>