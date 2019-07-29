import axios from "axios";

class HttpService {
  constructor() {
    this.http = axios.create();

    this.handleRequest = this.handleRequest.bind(this);

    this.http.interceptors.request.use(this.handleRequest);
  }

  // Set the Vuex store to be used inside this service.
  setStore(store) {
    this.store = store;
  }

  // Handles GET requests.

  get(url, config = {}) {
    return this.http.get(url, config);
  }

  // Handles PATCH requests.
  patch(url, data = {}, config = {}) {
    return this.http.patch(url, data, config);
  }

  // Handles POST requests.
  post(url, data = {}, config = {}) {
    return this.http.post(url, data, config);
  }

  // Handles PUT requests.
  put(url, data = {}, config = {}) {
    return this.http.put(url, data, config);
  }

  // Handles DELETE requests.

  delete(url, config = {}) {
    return this.http.delete(url, config);
  }

  // Request interceptor that add Authorization header on request.

  handleRequest(config) {
    // Would be for adding auth token to request
    const token = "";
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  }

}

export default new HttpService();
