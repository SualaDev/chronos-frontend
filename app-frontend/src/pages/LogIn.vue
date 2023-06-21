<template>
  <q-page class="flex flex-center" padding>
    <div class="full-width" style="max-width: 300px">
      <h5 class="q-my-md text-center">Login</h5>
      <q-card>
        <q-card-section>
          <q-form @submit="onSubmit">
            <q-input
              filled
              placeholder="email@example.com"
              v-model="formData.email"
              label="Email"
              :rules="[(val: string) => !!val || 'Email field is empty', isValidEmail]"
              class="q-mb-md"
            />
            <q-input
              filled
              v-model="formData.password"
              label="Password"
              color="primary"
              type="password"
              :rules="[(val: string) => (val && val.length >= 8) || 'Password is too short']"
              class="q-mb-sm"
            />

            <q-btn
              outline
              color="black"
              type="submit"
              label="login"
              class="fill-width"
              ripple="{ center: true }"
            />
          </q-form>
        </q-card-section>

        <q-separator color="black" />
        <q-card-section>
          <div style="display: inline-grid">
            <p style="padding-right: 12px">Don't have an account?</p>

            <q-btn to="/signup" color="black" label="Signup">
              <q-tooltip class="bg-accent"
                >We're happy you're joining us!</q-tooltip
              >
            </q-btn>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
// import { useAuthStore } from 'src/stores/auth';
// const store = useAuthStore();
import { api } from 'boot/axios';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'LoginDetails',
  data() {
    return {
      formData: {
        email: null,
        password: '',
      },
    };
  },
  methods: {
    async onSubmit() {
      try {
        const response = await api.post('auth/login', {
          email: this.formData.email,
          password: this.formData.password,
        });
        localStorage.token = response.data.token;
        localStorage.userName = response.data.user.name;
      } catch (e) {
        return alert('Incorrect username or password ');
      }
      this.$router.push({ path: '/home' });
    },
    isValidEmail(val: string) {
      const emailPattern =
        /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(val) || 'Invalid email';
    },
  },
});
</script>
