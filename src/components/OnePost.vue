<template>
  <div class="post">
    <div>
      <div><strong>Title:</strong> {{ posts.title }}</div>
      <div><strong>Description:</strong> {{ posts.body }}</div>
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
   border: 1px solid black;
  border-radius: 5px;

}
.post__buttons{
  align-self: flex-end;
}


</style>