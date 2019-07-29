import Vue from "vue";
import Vuex from "vuex";
import contractors from "@/modules/contractors/store";
import devices from "@/modules/devices/store";
import deviceLocations from "@/modules/map/store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ...contractors,
    ...devices,
    ...deviceLocations
  }
});
