<template>
  <div class="admin">
    <Nav @toggleLock="isLock = !isLock" :isLock="isLock"></Nav>
    <div class="container" :class="{'lock':isLock}">
      <Tool></Tool>
      <NumberCard></NumberCard>
      <div class="chart">chart</div>
      <div class="transaction">transaction</div>
      <div class="order">order</div>
    </div>
  </div>
</template>

<script>

import Nav from '@/components/admin/Nav'
import Tool from '@/components/admin/Tool'
import NumberCard from '@/components/admin/NumberCard'

export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isLock: true
    }
  },
  components: {
    Nav,
    Tool,
    NumberCard
  }
}
</script>

<style lang="sass">
$color-bg: #F5F7FA
$color-red: #FF345D

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
  width: 250px
  height: 100vh

.container.lock
  margin-left: 250px
  width: calc(100% - 250px)
.container
  position: relative
  display: flex
  flex-flow: row wrap
  width: 100%

  .tool
    width: 100%
    height: 80px

  .numberCard
    width: 100%

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

// 通用style
.tag
  line-height: 1
  font-weight: 300
  font-size: 16px
  background-color: $color-red
  padding: 3px 6px
  border-radius: 100px
</style>
