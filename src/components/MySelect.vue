<template>
  <select v-model="modelValue" @change="changeOption" class="select">
    <option disabled value="">select from list</option>
    <option v-for="option in options" :key="option.value" :value="option.value">{{option.name}}</option>
  </select>
</template>

<script>
export default {
  name: "my-select",
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOption (event) {
this.$emit("update:modelValue", event.target.value)
    }
  }
};
</script>

<style scoped>
.select {
  width: 200px;
  height: 40px;
  margin-top: 10px;
  padding: 5px;
  background: #fff;
  border: 2px solid black;
  box-shadow: 5px 5px 2px 1px rgba(0, 0, 255, 0.2);

  border-radius: 5px;
}
</style>