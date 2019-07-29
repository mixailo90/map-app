<template>
  <VCard class="map-holder" />
</template>

<script>
import gmapsInit from "@/utils/gmaps";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Map",
  props: {
    locations: { type: Array, default: () => [] },
    waypoints: { type: Array, default: () => {} }
  },
  watch: {
    locations: {
      immediate: true,
      handler(val) {
        this.mapLocations = val;
        this.removeMarkers();
        this.createMarkers();
      }
    }
  },
  data() {
    return {
      mapLocations: [],
      mapWaypoints: [],
      google: null,
      directionsDisplay: null,
      directionsService: null,
      geocoder: null,
      map: null,
      markers: []
    };
  },
  methods: {
    ...mapActions("deviceLocations", ["fetchGeoLocations"]),
    createMarkers() {
      this.markers = this.mapLocations.map(
        x =>
          new this.google.maps.Marker({
            position: x.currentLocation,
            map: this.map,
            title: x.name
          })
      );
    },
    removeMarkers() {
      for (let i = 0; i < this.markers.length; i++) {
        this.markers[i].setMap(null);
      }
    },
    setWaypointsFromParent(waypoints) {
      this.calculateAndDisplayRoute(
        this.directionsService,
        this.directionsDisplay,
        waypoints
      );
    },
    calculateAndDisplayRoute(directionsService, directionsDisplay, waypoints) {
      directionsService.route(
        {
          origin: waypoints[0],
          destination: waypoints[waypoints.length - 1],
          waypoints: waypoints,
          optimizeWaypoints: true,
          travelMode: "DRIVING"
        },
        function(response, status) {
          if (status === "OK") {
            directionsDisplay.setDirections(response);
          } else {
            window.alert("Directions request failed due to " + status);
          }
        }
      );
    }
  },
  computed: {
    ...mapGetters("deviceLocations", ["geoLocations", "currentLocations"])
  },
  async mounted() {
    await this.fetchGeoLocations();
    this.mapLocations = this.geoLocations;
    try {
      this.google = await gmapsInit();
      this.geocoder = new this.google.maps.Geocoder();
      this.map = new this.google.maps.Map(this.$el, {
        zoom: 3,
        center: { lat: 46.987747, lng: 18.412994 }
      });
      this.directionsService = new this.google.maps.DirectionsService();
      this.directionsDisplay = new this.google.maps.DirectionsRenderer();
      this.directionsDisplay.setMap(this.map);
    } catch (error) {
      console.error(error);
    }
  }
};
</script>

<style>
.map-holder {
  width: 100vw;
  height: calc(100vh - 300px);
}
</style>
