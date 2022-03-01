<template>
  <div>
    <h3>Users list</h3>
    <one-post
        :key="post.id"
        class="post"
        v-for="post in posts"
        v-bind:posts="post"
        @remove="$emit('remove', post)"
    >

    </one-post>
  </div>
</template>

<script>

import OnePost from "@/components/OnePost";

export default {
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

</style>