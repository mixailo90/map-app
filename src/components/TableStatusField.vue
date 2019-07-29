<template>
  <VChip :class="'status-color-' + status">
    {{ status }}
  </VChip>
</template>

<script>
export default {
  name: "TableStatusField",
  props: {
    status: { type: String, required: true }
  }
};
</script>
<style lang="scss" scoped>
.status-color {
  &-ACTIVE {
    color: #fff !important;

    background: green !important;
  }
  &-STANDBY {
    color: #fff !important;

    background: orange !important;
  }
  &-INACTIVE {
    color: #fff !important;

    background: red !important;
  }
}
</style>
