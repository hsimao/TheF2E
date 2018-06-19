<template>
  <div class="nav" :style="bgUrl(bg)">
    <a href="/" class="logo">the f2e</a>
    <div class="lock-btn"><i class="ion" :class="isLock==true ? 'ion-md-radio-button-off' : 'ion-md-radio-button-on'"></i></div>
    <ul>
      <li class="active">
        <a href="/"><i class="ion ion-md-cart"></i><span>Orders</span><i class="ion ion-md-arrow-dropdown"></i></a>
        <div class="subItem"><a href="/">Orders1</a></div>
        <div class="subItem"><a href="/">Orders2</a></div>
        <div class="subItem"><a href="/">Orders3</a></div>
      </li>
      <li>
        <a href="/"><i class="ion ion-ios-cube"></i><span>Product</span><i class="ion ion-md-arrow-dropdown"></i></a>
        <div class="subItem"><a href="/">Product1</a></div>
        <div class="subItem"><a href="/">Product2</a></div>
        <div class="subItem"><a href="/">Product3</a></div>
      </li>
      <li>
        <a href="/"><i class="ion ion-ios-chatboxes"></i><span>Message</span><div class="tag">2</div><i class="ion ion-md-arrow-dropdown"></i></a>
        <div class="subItem"><a href="/">Message1</a></div>
        <div class="subItem"><a href="/">Message2</a></div>
        <div class="subItem"><a href="/">Message3</a></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      bg: 'https://images.pexels.com/photos/990818/pexels-photo-990818.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
      isLock: true
    }
  },
  methods: {
    bgUrl(url){
      return `backgroundImage: url('${url}')`
    }
  }
}
</script>

<style lang="sass" scoped>
$color-white: #fff
$color-red: #FF345D

.nav
  background-size: cover
  z-index: 1
  box-shadow: 0 20px 40px 0 rgba(black, 0.2)
  &:before
    content: ''
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    background-color: rgba(black,0.8)
    z-index: -1

  .logo,.lock-btn
    display: inline-block
    height: 80px
    line-height: 80px
    text-align: center
    color: $color-white
    vertical-align: top
    margin-bottom: 10px
  .logo
    width: 70%
    text-transform: uppercase
    letter-spacing: 1px
    font-size: 30px
    font-weight: 300

  .lock-btn
    width: 25%

  ul
    list-style: none
    margin: 0
    padding: 0
    li
      background-color: rgba($color-white,0.125)
      margin-bottom: 5px
      padding-left: 26px
      a
        display: flex
        height: 50px
        line-height: 50px
        align-items: center
        color: $color-white
      i
        position: relative
        font-size: 24px
        width: 30px
      span
        flex: 1 1 auto
        font-weight: 300
        font-size: 18px
        letter-spacing: 1px
      i.ion-md-arrow-dropdown
        position: relative
        right: 0
        transform: rotate(-180deg)
        text-align: center
      .tag
        line-height: 1
        font-weight: 300
        font-size: 16px
        background-color: $color-red
        padding: 3px 6px
        margin-right: 10px
        border-radius: 100px

      .subItem
        display: none
        padding-left: 20px
        border-left: 1px solid $color-white
        margin-left: 10px
        a
          font-weight: 300
          font-size: 18px
          letter-spacing: 1px
          position: relative
          &:before
            content: ''
            position: absolute
            top: 50%
            left: -20px
            width: 13px
            height: 1px
            background-color: $color-white

.nav ul li.active .subItem
  display: block !important

</style>
