<template>
  <VTextField
    v-model="inputValue"
    :label="inputLabel"
    :placeholder="inputLabel"
    :outlined="true"
  ></VTextField>
</template>

<script>
export default {
  name: "DetailsItem",
  data() {
    return {
      inputValue: this.name,
      inputLabel: this.label
    };
  },
  props: {
    name: { type: [String, Array], required: true },
    label: { type: String, required: true }
  }
};
</script>
