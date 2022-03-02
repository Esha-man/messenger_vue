<template>
  <form class="form" @submit.prevent>
    <h4>Add new post</h4>
    <span class="span"><strong>Title:</strong></span>
    <input-common
        v-model="post.title"
        type="text"
        placeholder="add title"></input-common>
    <span class="span"><strong>Description:</strong></span>
    <input-common
        v-model="post.description"
        type="text"
        placeholder="add description"></input-common>
    <button-common @click="createPost">post</button-common>
  </form>
</template>

<script>
import ButtonCommon from "@/components/common/ButtonCommon";
import InputCommon from "@/components/common/InputCommon";

export default {
  name: "PostForm",
  components: {InputCommon, ButtonCommon},
  data() {
    return {
      post: {
        title: "",
        description: "",
      }
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now()
      this.$emit("createNewPost", this.post)
      this.post = {
        title: "",
        description: "",
      }
    }
  }
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  padding: 20px;
  /*margin: 5px;*/
  border: 2px solid #8b8bf3;
  border-radius: 10px;
}

.span {
  margin-top: 10px;
}


</style>