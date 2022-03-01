<template>
  <div class="post">
    <div>
      <div><strong>Title:</strong> {{ posts.title }}</div>
      <div><strong>Description:</strong> {{ posts.description }}</div>
    </div>
    <div class="post__buttons">
      <button-common @click="$emit('remove', post)">delete</button-common>
    </div>
  </div>
</template>

<script>
import ButtonCommon from "@/components/common/ButtonCommon";
export default {
  name: "OnePost",
  components: {ButtonCommon},
  props: {
    posts: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.post {
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin: 5px;
  border: 2px solid #8b8bf3;
}
.post__buttons{
  align-self: flex-end;
}


</style>