<template>
  <button class="buttonCommon"><slot></slot></button>
</template>

<script>
export default {
  name: "ButtonCommon",
  props: {
    posts: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.buttonCommon {
  align-self: flex-end;
  width: 90px;
  height: 40px;
  margin-top: 10px;
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;
  background: bisque;
  box-shadow: 5px 5px 2px 1px rgba(0, 0, 255, .2);
}
</style>