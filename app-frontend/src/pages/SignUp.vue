<template>
    <q-page class="flex flex-center" padding>
      <div class="full-width" style="max-width: 300px">
        <h5 class="q-my-md text-center">Sign-Up</h5>
        <q-card>
          <q-card-section>
            <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
              <q-input
                filled
                v-model="formData.name"
                label="Your Fullname"
                hint="Name and Surname"
                lazy-rules
                :rules="[(val: string) => (val && val.length > 0) || 'Please type something']"
              />
  
              <q-input
                filled
                hint="email@example.com"
                v-model="formData.email"
                label="Your mail"
                :rules="[(val: string) => !!val || 'Email is missing', isValidEmail]"
              />

              <q-input
                filled
                v-model="formData.password"
                label="Password *"
                hint = "Keep this information safe"
                type="password"
                :rules="[(val: string) => (val && val.length >= 8) || 'Password is short']"
              />
  
              <div>
              <q-btn
              color="black" 
              type="submit" 
              label="Signup" 
              class="fill-width" 
              ripple="{ center: true }"/>

              <q-btn
                  label="Reset"
                  type="reset"
                  color="black"
                  flat
                  class="q-ml-sm"
                />
              </div>
            </q-form>
          </q-card-section> 
            <q-separator color="black" />
            <q-card-section>
              <div style="display:inline-grid">
                <p style="padding-right:12px;">Already have an account?</p>
                
                <q-btn to="/" color="black" label="Login" />
              </div>
            </q-card-section>
          
        </q-card>
      </div>
    </q-page>
  </template>
  
  <script lang="ts">
  import { api } from 'boot/axios';
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'SignupDetails',
    data() {
      return {
        formData: {
          name: null,
          email: null,
          password: null,
        },
      };
    },
    methods: {
      async onSubmit() {
        try {
          await api.post('/auth/register', {
            name: this.formData.name,
            email: this.formData.email,
            password: this.formData.password,
          });
          
        } catch (e) {
          console.log(e)
          return alert('Incorrect username or password ');
        }
        this.$router.push({ path: '/' });
      },
      onReset() {
        this.formData.name = null;
        this.formData.email = null;
        this.formData.password = null;
      },
      isValidEmail(val: string) {
        const emailPattern =
          /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
        return emailPattern.test(val) || 'Invalid email';
      },
    },
  });
  </script>
  