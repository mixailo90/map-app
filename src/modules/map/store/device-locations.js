import http from "@/services/http";

export const SET_GEO_LOCATIONS = "SET_GEO_LOCATIONS";

export default {
  namespaced: true,
  state: {
    geoLocations: []
  },
  mutations: {
    [SET_GEO_LOCATIONS](state, geoLocations) {
      state.geoLocations = geoLocations;
    }
  },
  actions: {
    async fetchGeoLocations({ commit }) {
      const { data } = await http.get("./geolocations.json");
      commit(SET_GEO_LOCATIONS, data);
    }
  },
  getters: {
    geoLocations(state) {
      return state.geoLocations;
    }
  }
};
