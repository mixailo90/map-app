<template>
  <VNavigationDrawer
    v-model="drawer"
    app
    dark
    src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
  >
    <VList dense v-for="navItem in navigationArray" :key="navItem">
      <NavigationItem :routeData="navItem" />
    </VList>
  </VNavigationDrawer>
</template>

<script>
import NavigationItem from "@/components/NavigationItem.vue";
export default {
  name: "Navigation",
  components: {
    NavigationItem
  },
  data() {
    return {
      drawer: null,
      navigationArray: [
        { name: "contractors", icon: "mdi-account-search" },
        { name: "devices", icon: "mdi-cellphone-wireless" },
        { name: "map", icon: "mdi-map" }
      ]
    };
  }
};
</script>
