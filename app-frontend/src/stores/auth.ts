import { defineStore } from 'pinia';

export const useAuthStore = defineStore('authStore', {
  state: () => {
    return { user: { name: '', email: '' }, token: '', total: null }; 
  },

  getters: {},

  actions: {},
});
