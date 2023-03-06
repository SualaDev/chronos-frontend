<template>
  <div class="main-container">
    <div class="sub-container">
      <div class="header-section">
        <h2>Shopping Cart</h2>
        <p>Remove All</p>
      </div>
      <div>
        <h2>Apple Juice </h2>
        <button>+</button>
        <p>2</p>
        <button>-</button>
        <p>$2.99</p>
        <p>Save for later</p>
        <p>Remove</p>
      </div>
      <div>
        <h2>Sub-Total</h2>
        <p>2 items</p>
        <h3>$6.18</h3>
        <button>Checkout</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:"CartPage"
  }
</script>

<style lang="scss" scoped>
.main-container{
  background: lightblue;
}
.sub-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #FFF;
}
.header-section{
  display: flex;
  column-gap: 5rem;
  align-items: center;
}
.header-section h2{
  font-size: 1.5rem;
}
</style>