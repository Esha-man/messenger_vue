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
  width: 75px;
  height: 35px;
  margin-top: 10px;
  padding: 5px;
  border: 1px solid black;
  background: beige;
}
</style>