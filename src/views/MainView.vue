<template>
  <div>
    <Navigation />
    <VContent>
      <VContainer fluid fill-height>
        <VLayout align-center justify-center>
          <RouterView />
        </VLayout>
      </VContainer>
    </VContent>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Navigation from "@/components/Navigation.vue";
export default {
  name: "MainView",
  components: { Navigation },
  methods: {
    ...mapActions("devices", ["fetchDevices"]),
    ...mapActions("contractors", ["fetchContractors"]),
    ...mapActions("deviceLocations", ["fetchGeoLocations"])
  },
  async beforeMount() {
    await this.fetchDevices();
    await this.fetchContractors();
    await this.fetchGeoLocations();
    this.$router.push({ name: "contractors" });
  }
};
</script>
