<template>
  <div class="app">
    <div class="headerWrapper">
      <h1>Posts</h1>
      <button-common @click="showDialog">
        create
      </button-common>
    </div>
    <dialog-window :show="dialogVisible" v-model:show="dialogVisible">
      <post-form @createNewPost="createPost"/>
    </dialog-window>
    <post-list
        v-bind:posts="posts"
        @remove="removePost"
    />
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import DialogWindow from "@/components/common/DialogWindow";

export default {
  components: {
    DialogWindow,
    PostList, PostForm,
  },
  data() {
    return {
      posts: [
        {id: 1, title: "Javascript", description: "Good programming language"},
        {id: 2, title: "TS", description: "Very good programming language"},
        {id: 3, title: "Java", description: "Hard programming language"},
      ],
      dialogVisible: false,
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
      this.dialogVisible = false
    },
    removePost(post) {
      this.posts = this.posts.filter(el => el.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true
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

.headerWrapper {
  display: flex;
  flex-direction: column;
  padding: 10px;

}
</style>