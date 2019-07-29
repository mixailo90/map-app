<template>
  <span>{{ formatDate }}</span>
</template>

<script>
import format from "date-fns/format";
export default {
  name: "TableFormatDate",
  props: {
    date: {
      type: [Object, String],
      default: ""
    },
    format: {
      type: String,
      default: "DD.MM.YYYY"
    }
  },
  data() {
    return {};
  },
  computed: {
    formatDate() {
      if (this.date !== null) {
        return format(new Date(this.date.date || this.date), this.format);
      }
      return "-";
    }
  }
};
</script>
