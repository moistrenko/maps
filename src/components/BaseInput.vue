<template>
  <input
    class="input"
    :value="value"
    @change="$emit('updateValue', $event.target.value)"
    :type="type"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  model: {
    prop: "value",
    event: "updateValue",
  },
  props: {
    value: {
      type: String,
    },
    type: {
      required: true,
      type: String,
    },
    placeholder: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.input {
  height: 40px;
  padding: 5px;
  min-width: 300px;
}
</style>
