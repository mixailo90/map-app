<template>
  <VDataTable
    :headers="headers"
    :items="items"
    :items-per-page="pageSize"
    class="elevation-1"
    :search="search"
    item-key="name"
  >
    <template v-slot:item.id="{ item }">
      <button @click="navigateTo(item)">{{ item.id }}</button>
    </template>
    <template v-slot:item.usedBy="{ item }">
      <button @click="navigateToContractor(item.usedBy)">
        {{ item.usedBy }}
      </button>
    </template>
    <template v-slot:item.status="{ item }">
      <TableStatusField :status="item.status" />
    </template>
    <template v-slot:item.timeOfInstallation="{ item }">
      <TableFormatDate :date="item.timeOfInstallation" />
    </template>
    <template v-slot:item.timeOfLastUpdate="{ item }">
      <TableFormatDate :date="item.timeOfLastUpdate" />
    </template>
    <template v-slot:item.timeAdded="{ item }">
      <TableFormatDate :date="item.timeAdded" />
    </template>
    <template v-slot:item.timeContractAppliesAt="{ item }">
      <TableFormatDate :date="item.timeContractAppliesAt" />
    </template>
  </VDataTable>
</template>
<script>
import TableStatusField from "@/components/TableStatusField.vue";
import TableFormatDate from "@/components/TableFormatDate.vue";
import { mapGetters } from "vuex";

export default {
  name: "DataTable",
  components: { TableStatusField, TableFormatDate },
  props: {
    tableUsage: {
      type: String,
      required: true
    },
    headers: {
      type: Array,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    pageSize: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      search: ""
    };
  },
  methods: {
    navigateTo(item) {
      this.$router.push({
        name: `${this.tableUsage}-details`,
        params: { id: item.id, detailsData: item, overlay: true }
      });
    },
    navigateToContractor(contractorName) {
      let contractor = this.contractors.find(
        contractorItem => contractorItem.name === contractorName
      );
      this.$router.push({
        name: `device-contractor-details`,
        params: { id: contractor.id, detailsData: contractor, overlay: true }
      });
    }
  },
  computed: {
    ...mapGetters("contractors", ["contractors"])
  }
};
</script>
