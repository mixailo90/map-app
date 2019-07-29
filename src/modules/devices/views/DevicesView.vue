<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <VCard>
    <VCard-title>
      Devices
      <VSpacer></VSpacer>
    </VCard-title>
    <DataTable :items="items" :headers="headers" table-usage="device" />
    <RouterView />
  </VCard>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import DataTable from "@/components/DataTable.vue";

export default {
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
        { text: "Time of installation", value: "timeOfInstallation" },
        { text: "Time of last update", value: "timeOfLastUpdate" },
        { text: "Version", value: "version" },
        { text: "Used by", value: "usedBy" }
      ]
    };
  },
  methods: {
    ...mapActions("devices", ["fetchDevices"])
  },
  async beforeMount() {
    await this.fetchDevices();
    this.items = this.devices;
  },
  computed: {
    ...mapGetters("devices", ["devices"])
  }
};
</script>
