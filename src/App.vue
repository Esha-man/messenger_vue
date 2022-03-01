<template>
  <div class="app">
    <post-form @createNewPost="createPost"/>
    <post-list v-bind:posts="posts"/>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";

export default {
  components: {
    PostList, PostForm,
  },
  data() {
    return {
      posts: [
        {id: 1, title: "Javascript", description: "Good programming language"},
        {id: 2, title: "TS", description: "Very good programming language"},
        {id: 3, title: "Java", description: "Hard programming language"},
      ],
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
    },

  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>