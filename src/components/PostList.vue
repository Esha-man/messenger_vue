<template>
  <div v-show="posts.length > 0" class="postList">
    <h3 class="postList">Posts list</h3>
    <transition-group name="onePost-list">
    <one-post
        :key="post.id"
        class="post"
        v-for="post in posts"
        v-bind:posts="post"
        @remove="$emit('remove', post)"
    >
    </one-post>
    </transition-group>
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
.onePost-list-item {
  display: inline-block;
  margin-right: 10px;
} 
.onePost-list-enter-active,
.onePost-list-leave-active {
  transition: all 0.3s ease;
}
.onePost-list-enter-from,
.onePost-list-leave-to {
  opacity: 0;
  transform: translateX(140px);
}
.onePost-list-move {
  transition: transform 0.4s ease;
}
.title {
  padding: 10px;
  
}
</style>