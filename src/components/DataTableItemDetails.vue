<template>
  <VOverlay
    class="data-table-item-details"
    :value="showOverlay"
    :absolute="false"
  >
    <VCard width="600" class="content-wrapper">
      <VCard-title>
        Details
      </VCard-title>
      <DetailsItem
        v-for="(value, label) in details"
        :name="value"
        :label="label"
        :key="value.id"
      />
      <VBtn @click="$router.go(-1)">
        Save
      </VBtn>
      <VBtn icon @click="$router.go(-1)">
        <VIcon>mdi-close</VIcon>
      </VBtn>
    </VCard>
  </VOverlay>
</template>

<script>
import DetailsItem from "@/components/DetailsItem.vue";
export default {
  name: "DataTableItemDetails",
  components: { DetailsItem },
  props: {
    detailsData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      details: this.detailsData,
      overlay: true
    };
  },
  computed: {
    showOverlay() {
      return this.overlay;
    }
  }
};
</script>
<style lang="scss" scoped>
.data-table-item-details {
  .content-wrapper {
    padding: 50px;
  }
}
</style>
