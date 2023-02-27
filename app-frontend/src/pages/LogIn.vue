<template>
  <q-page class="main-container">
    <div class="sub-container">
      <h2>Login</h2>
      <div class="email-section">
        <input type="text" placeholder="example@gmail.com" label="Email">
        <input type="password" placeholder="password" label="Password">
        <button class="login">LOGIN</button>
        <q-separator color="black"></q-separator>
      <p>Don't hane an account?</p>
      <q-btn to="/signup" class="sign-up">SIGNUP</q-btn>
      </div>      
    </div>
  </q-page>
</template>

<script>
  export default {
    name:"LogInPage"
  }
</script>

<style lang="scss" scoped>
.main-container{
  display: flex;
  justify-content: center;
  align-items: center;
}
.sub-container h2{
  text-align: center;
  font-size: 1rem;
  max-width: 300px;
}
.email-section{
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  box-shadow: 0 1px 5px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%);
  padding: 3rem;
}
.login{
  background-color: #fff;
  color: #000;
  border-radius: .2rem;
}
.sign-up{
  background-color: #000;
  color: #fff;
  border-radius: .2rem;
}
</style>