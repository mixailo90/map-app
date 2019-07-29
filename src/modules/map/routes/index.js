import MapView from "../views/MapView.vue";

export default [
  {
    path: "/map",
    name: "map",
    component: MapView,
    meta: {
      isAuthenticated: true
    },
  }
];
