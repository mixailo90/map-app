import http from "@/services/http";

export const SET_CONTRACTORS = "SET_CONTRACTORS";

export default {
  namespaced: true,
  state: {
    contractors: []
  },
  mutations: {
    [SET_CONTRACTORS](state, contractors) {
      state.contractors = contractors;
    }
  },
  actions: {
    async fetchContractors({ commit }) {
      const { data } = await http.get("./contractors.json");
      commit(SET_CONTRACTORS, data);
    }
  },
  getters: {
    contractors(state) {
      return state.contractors;
    }
  }
};
