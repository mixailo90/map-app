<template>
  <div class="navigation-item">
    <VListItem @click="navigateTo">
      <div class="nav-icon-holder">
        <VIcon>{{ routeData.icon }}</VIcon>
      </div>
      <VListItemContent>
        <VListItemTitle>{{ routeData.name }}</VListItemTitle>
      </VListItemContent>
    </VListItem>
  </div>
</template>

<script>
export default {
  name: "NavigationItem",
  data() {
    return {};
  },
  props: {
    routeData: {
      type: Object,
      required: true
    },
    icons: {}
  },
  methods: {
    navigateTo() {
      this.$router.push({ name: this.routeData.name });
    }
  }
};
</script>
<style lang="scss">
.nav-icon-holder {
  margin-right: 10px;
}
</style>
