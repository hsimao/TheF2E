<template>
  <div class="admin">
    <Nav></Nav>
    <div class="tool">tool</div>
    <div class="numberCard">numberCard</div>
    <div class="chart">chart</div>
    <div class="transaction">transaction</div>
    <div class="order">order</div>
  </div>
</template>

<script>

import Nav from '@/components/admin/Nav'

export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Nav,
  }
}
</script>

<style lang="sass">
*
  box-sizing: border-box

a
  text-decoration: none

body
  margin: 0
  font-size: 20px
  font-family: 'Helvetica Neue', '微軟正黑體', sans-serif

.admin
  position: relative
  display: flex
  flex-flow: row wrap

.nav
  position: absolute
  left: 0
  top: 0
  width: 250px
  height: 100vh

.tool
  width: 100%
  height: 70px
  background-color: red

.numberCard
  width: 100%
  height: 150px
  background-color: green

.chart
  width: 100%
  height: 400px
  background-color: yellow

.transaction, .order
  width: 50%
  height: 450px
  background-color: black

.order
  background-color: #fff
    // <nav class="nav">nav</nav>
    // <div class="tool">tool</div>
    // <div class="numberCard">numberCard</div>
    // <div class="chart">chart</div>
    // <div class="transaction">transaction</div>
    // <div class="order">order</div>
</style>
