<template>
  <q-page class="main-container">
    <div class="sub-container">
      <h2>SignUp</h2>
      <div class="details-section">
        <input type="text" placeholder="Your FullName" label="Name and Surname">
        <input type="text" placeholder="Your Email" label="Email">
        <input type="password" placeholder="password" label="Password">
        <div>
          <q-btn>SIGNUP</q-btn>
          <q-btn>RESET</q-btn>
        </div>
        <q-separator color="black"></q-separator>
        <h3>Already have an account?</h3>
        <q-btn to="/">LOGIN</q-btn>
    </div>
    </div>
  </q-page>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.main-container{
  display: flex;
  justify-content: center;
  align-items: center;
}
.details-section{
  display: flex;
  flex-direction: column;
}
</style>