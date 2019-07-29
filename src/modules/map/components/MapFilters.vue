<template
  ><VContainer fluid class="map-filters">
    <VLayout wrap align-center>
      <VFlex xs5>
        <VFlex xs12>
          <VSelect
            v-model="selectedStatus"
            item-value="status"
            item-text="status"
            :items="status"
            label="Status"
            @change="filterDevices"
          ></VSelect>
        </VFlex>
        <VFlex xs12>
          <VSelect
            v-model="selectedContractors"
            multiple
            item-value="name"
            item-text="name"
            :items="contractorsList"
            label="Contractors"
            @change="filterDevices"
          ></VSelect>
        </VFlex>
        <VBtn @click="resetFilter"> Clear filters</VBtn>
      </VFlex>
      <VFlex xs7>
        <div class="device-list">
          <div
            @click="sendWaypoint(device)"
            v-for="device in filteredDeviceLocations"
            :key="device.id"
          >
            {{ device.name }}
          </div>
        </div>
      </VFlex>
    </VLayout>
  </VContainer>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "MapFilters",
  data() {
    return {
      filteredDeviceLocations: [],
      deviceLocations: [],
      status: ["STANDBY", "ACTIVE", "INACTIVE"],
      selectedStatus: null,
      selectedContractors: [],
      selectedDevice: null
    };
  },
  methods: {
    sendWaypoint(device) {
      this.$emit("setWaypoints", device);
    },
    filterDevices() {
      if (this.selectedContractors.length === 0) {
        this.filteredDeviceLocations = this.deviceLocations.filter(
          item => item.status === this.selectedStatus
        );
      }
      if (this.selectedStatus === null) {
        this.filteredDeviceLocations = this.deviceLocations.filter(item =>
          this.selectedContractors.find(
            contractor => contractor === item.usedBy
          )
        );
      }
      if (this.selectedContractors.length > 0 && this.selectedStatus !== null) {
        this.filteredDeviceLocations = this.deviceLocations.filter(
          item =>
            item.status === this.selectedStatus &&
            this.selectedContractors.find(
              contractor => contractor === item.usedBy
            )
        );
      }
      this.$emit("sendLocations", this.filteredDeviceLocations);
    },
    resetFilter() {
      this.selectedStatus = null;
      this.selectedContractors = [];
      this.filteredDeviceLocations = this.deviceLocations;
    }
  },
  mounted() {
    this.deviceLocations = this.geoLocations;
    this.filteredDeviceLocations = [...this.deviceLocations];
  },
  computed: {
    ...mapGetters("contractors", ["contractors"]),
    ...mapGetters("deviceLocations", ["geoLocations"]),
    contractorsList() {
      return this.contractors;
    }
  }
};
</script>

<style lang="scss" scoped>
.map-filters {
  .device-list {
    height: 200px;
    padding: 20px;
    div {
      position: relative;
      float: left;
      cursor: pointer;
      background: #808080;
      color: #fff;
      width: 100px;
      margin-right: 20px;
      border-radius: 20px;
      padding: 5px 10px 5px 10px;
      margin-top: 20px;
      &:hover {
        background: #6697ff;
      }
    }
  }
}
</style>
