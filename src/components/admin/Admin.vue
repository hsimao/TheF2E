<template>
  <div class="admin">
    <Nav :class="{'lock':isLock}" @toggleLock="isLock = !isLock" :isLock="isLock"></Nav>
    <div class="container" :class="{'lock':isLock}">
      <Tool></Tool>
      <NumberCard></NumberCard>
      <Chart></Chart>
      <Statistics>transaction</Statistics>
      <ShoppingCart></ShoppingCart>
    </div>
    <Footer :class="{'lock':isLock}"></Footer>
  </div>
</template>

<script>
import Nav from '@/components/admin/Nav'
import Tool from '@/components/admin/Tool'
import NumberCard from '@/components/admin/NumberCard'
import Chart from '@/components/admin/Chart'
import Statistics from '@/components/admin/Statistics'
import ShoppingCart from '@/components/admin/ShoppingCart'
import Footer from '@/components/admin/Footer'

export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isLock: false
    }
  },
  components: {
    Nav,
    Tool,
    NumberCard,
    Chart,
    Statistics,
    ShoppingCart,
    Footer
  }
}
</script>

<style lang="sass">
$color-bg: #F5F7FA
$color-red: #FF345D
$color-font: #263238
$color-gray: #a6a9ae

*
  box-sizing: border-box

a
  text-decoration: none

body
  margin: 0
  font-size: 20px
  font-family: 'Helvetica Neue', '微軟正黑體', sans-serif
  background-color: $color-bg

.admin
  position: relative

.nav
  position: absolute
  left: 0
  top: 0
  width: 55px
  height: 100%

.footer
  width: calc(100% - 55px)
  margin-left: 55px
.footer.lock
  width: calc(100% - 250px)
  margin-left: 250px

.container.lock
  width: calc(100% - 250px)
  margin-left: 250px
.container
  position: relative
  display: flex
  flex-flow: row wrap
  padding: 0 30px
  width: calc(100% - 55px)
  margin-left: 55px

  .tool
    width: 100%
    height: 80px

  .numberCard
    width: 100%

  .chart
    width: 100%
    height: 500px

  .statistics, .shoppingCart
    height: 465px
  .statistics
    width: calc(35% - 30px)
    margin-right: 30px
  .shoppingCart
    width: 65%


// 通用style
.tag
  line-height: 1
  font-weight: 300
  font-size: 16px
  background-color: $color-red
  padding: 3px 6px
  border-radius: 100px

.title
  font-size: 22px
  letter-spacing: 1px
  text-transform: uppercase
  color: $color-font

.subtitle
  font-size: 18px
  color: darken($color-gray, 25)
  letter-spacing: 0.5px
</style>
