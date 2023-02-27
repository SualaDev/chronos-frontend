<template>
  <q-page class="main-container">
    <h2 class="entry-text">SignUp</h2>
    <div class="sub-container">
      <div class="details-section">
        <input type="text" placeholder="Your FullName" label="Name and Surname">
        <input type="text" placeholder="Your Email" label="Email">
        <input type="password" placeholder="password" label="Password">
        <div class="btn-container">
          <q-btn>SIGNUP</q-btn>
          <q-btn>RESET</q-btn>
        </div>
        <q-separator color="black"></q-separator>
      </div>
      <div>
        <h3 class="user-check">Already have an account?</h3>
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
.entry-text{
  text-align: center;
  font-size: 1rem;
}
.main-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.sub-container{
  max-width: 300px;
  box-shadow: 0 1px 5px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%);
  padding: 1rem;
}
.details-section{
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
}
.btn-container{
  display: flex;
  column-gap: 1rem;
}
.user-check{
  font-size: 1rem;
}
</style>