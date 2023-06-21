<template>
    <q-page padding>
      <div side>
        <h3>Success!</h3>
        <p>Your total is: {{ total }}</p>
      </div>
    </q-page>
  </template>
  
  <script lang="ts">
  import { useAuthStore } from 'src/stores/auth';
  const store = useAuthStore();
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'SuccessPage',
    data() {
      return {
        total: store.total,
      };
    },
  });
  </script>
  