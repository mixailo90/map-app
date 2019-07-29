import http from "@/services/http";

export const SET_DEVICES = "SET_DEVICES";

export default {
  namespaced: true,
  state: {
    devices: []
  },
  mutations: {
    [SET_DEVICES](state, devices) {
      state.devices = devices;
    }
  },
  actions: {
    async fetchDevices({ commit }) {
      const { data } = await http.get("./devices.json");
      commit(SET_DEVICES, data);
    }
  },
  getters: {
    devices(state) {
      return state.devices;
    }
  }
};
