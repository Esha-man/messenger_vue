<template>
  <input :value="modelValue" @input="updateInput" class="inputCommon" type="text">
</template>

<script>
export default {
  name: "InputCommon",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value)
    }
  }

}
</script>

<style scoped>
.inputCommon {
  width: 100%;
  margin: 5px 5px 0 0;
  border-radius: 7px;
}
</style>