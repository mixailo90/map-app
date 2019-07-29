<template>
  <VCard>
    <VCard-title>
      Contractors
      <VSpacer></VSpacer>
    </VCard-title>
    <DataTable :items="items" :headers="headers" table-usage="contractors" />
    <RouterView />
  </VCard>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import DataTable from "@/components/DataTable.vue";

export default {
  name: "ContractorsView",
  components: { DataTable },
  data() {
    return {
      search: "",
      items: [],
      headers: [
        {
          text: "Id",
          value: "id"
        },
        { text: "Name", value: "name" },
        { text: "Type", value: "type" },
        { text: "Status", value: "status" },
        { text: "Time added", value: "timeAdded" },
        { text: "Time contract applies at", value: "timeContractAppliesAt" },
        { text: "Devices", value: "devices" }
      ]
    };
  },
  methods: {
    ...mapActions("contractors", ["fetchContractors"])
  },
  async beforeMount() {
    await this.fetchContractors();
    this.items = this.contractors;
  },
  computed: {
    ...mapGetters("contractors", ["contractors"])
  }
};
</script>
