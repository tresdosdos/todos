import { ApiService } from '../services/apiService';

export default async ({ Vue }) => {
  Vue.prototype.$api = new ApiService();
};
