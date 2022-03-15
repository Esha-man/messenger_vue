<template>
  <div class="app">
    <div class="headerWrapper">
      <h1>Posts</h1>
      <div class="btn">
      <button-common 
      @click="showDialog"> create </button-common>
      <my-select 
      v-model="selectedSort"
      :options="sortOptions"
       />
      </div>
    </div>
    <dialog-window 
    :show="dialogVisible" 
    v-model:show="dialogVisible">
      <post-form 
      @createNewPost="createPost" />
    </dialog-window>
    <post-list 
    v-if="!isLoad" 
    :posts="sortedPosts" 
    @remove="removePost" />
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import DialogWindow from "@/components/common/DialogWindow";
import axios from "axios";
import MySelect from './components/MySelect.vue';

export default {
  components: {
    DialogWindow,
    PostList,
    PostForm,
    MySelect,
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      modificatorvalue: "",
      isLoad: false,
      selectedSort: "",
      sortOptions: [
        {value:"title", name: "sort by name"},
        {value:"body", name: "sort by description"},
      ],
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((el) => el.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    async fetchPost() {
      this.isLoad = true;
      try {
        let response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        this.posts = response.data;
      } catch (e) {
        alert("error: " + e);
      } finally {
        this.isLoad = false;
      }
    },
  },
  mounted() {
    this.fetchPost();
  },
  computed: {
sortedPosts(){
  return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
}
  },
  watch: {
  
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: beige;
 
}

.headerWrapper {
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.btn {
display: flex;
justify-content: space-between;
max-width: 500px;
}
</style>