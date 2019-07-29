<template>
  <VContainer grid-list-md text-center>
    <VLayout wrap>
      <VFlex md12>
        <VCard>
          <MapFilters
            @sendLocations="setLocations"
            @setWaypoints="setWaypoint"
          />
        </VCard>
        <VCard>
          <Map :locations="locations" :waypoints="waypoints" ref="map" />
        </VCard>
      </VFlex>
    </VLayout>
  </VContainer>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Map from "@/modules/map/components/Map.vue";
import MapFilters from "@/modules/map/components/MapFilters.vue";

export default {
  name: "MapView",
  data() {
    return { locations: [], waypoints: [] };
  },
  components: { Map, MapFilters },
  methods: {
    ...mapActions("deviceLocations", ["fetchGeoLocations"]),
    ...mapActions("contractors", ["fetchContractors"]),
    setLocations(value) {
      this.locations = value;
    },
    setWaypoint(value) {
      this.$refs.map.setWaypointsFromParent(value.locationHistory);
    }
  },
  computed: {
    ...mapGetters("deviceLocations", ["geoLocations", "currentLocations"])
  },
  async mounted() {
    this.locations = this.geoLocations;
  }
};
</script>

<style></style>
