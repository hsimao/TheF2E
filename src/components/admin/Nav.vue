<template>
  <div class="nav" :style="bgUrl(bg)">
    <a href="/" class="logo">the f2e</a>
    <div class="lock-btn" @click="lock"><i class="ion" :class="isLock==true ? 'active ion-md-radio-button-on' : 'ion-md-radio-button-off'"></i></div>
    <ul class="items" @click="navToggle()">
      <li class="orders" data-type="orders">
        <a href="#"><i class="ion ion-md-cart"></i><span>Orders</span><i class="ion ion-md-arrow-dropdown"></i></a>
        <div class="subItem"><a href="#">Orders1</a></div>
        <div class="subItem"><a href="#">Orders2</a></div>
        <div class="subItem"><a href="#">Orders3</a></div>
      </li>
      <li class="product" data-type="product">
        <a href="#"><i class="ion ion-ios-cube"></i><span>Product</span><i class="ion ion-md-arrow-dropdown"></i></a>
        <div class="subItem"><a href="#">Product1</a></div>
        <div class="subItem"><a href="#">Product2</a></div>
        <div class="subItem"><a href="#">Product3</a></div>
      </li>
      <li class="message" data-type="message">
        <a href="#"><i class="ion ion-ios-chatboxes"></i><span>Message</span><div class="tag">2</div><i class="ion ion-md-arrow-dropdown"></i></a>
        <div class="subItem"><a href="#">Message1</a></div>
        <div class="subItem"><a href="#">Message2</a></div>
        <div class="subItem"><a href="#">Message3</a></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['isLock'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      bg: 'https://images.pexels.com/photos/990818/pexels-photo-990818.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
      itemH: 0,
      current: '',
      eItemBox: null,
      eItems: null

    }
  },
  methods: {
    bgUrl(url){
      return `backgroundImage: url('${url}')`
    },
    lock(){
      this.$emit('toggleLock')
    },
    navToggle(){
      let targetLi = event.target.closest('li')
      let items = targetLi.querySelectorAll('.subItem')
      let height

      //添加展開動畫
      if (this.current === targetLi.dataset.type) {
        this.toggleCloseAll()
        this.current = ''
      } else {
        targetLi.classList.add('active')
        height = this.itemH + this.itemH * items.length
        this.toggleOpen(targetLi, height)
        this.current = targetLi.dataset.type
      }

    },
    toggleCloseAll(){
      this.eItems.forEach((item)=>{
        item.classList.remove('active')
        TweenMax.to(item, .3, {
          height: this.itemH,
          ease: Power1.easeIn
        })
      })
    },
    toggleOpen(el, value){
        TweenMax.to(el, .3, {
          height: value,
          ease: Power1.easeIn
        })
    },

    domInit(){
      let itemEl = document.querySelector('.orders a')
      this.itemH = parseInt(getComputedStyle(itemEl).height)
      this.eItemBox = document.getElementsByClassName('items')[0]
      this.eItems = [...this.eItemBox.querySelectorAll('li')]
    }
  },
  mounted(){
    this.domInit()
  }
}
</script>

<style lang="sass" scoped>
$color-white: #fff
$color-red: #FF345D
$color-primary: #45e994
$color-secondary: #23bcbb

.nav
  background-size: cover
  z-index: 10
  box-shadow: 0 20px 40px 0 rgba(black, 0.2)
  transition: all .6s cubic-bezier(0.175, 0.885, 0.32, 1.275)
  &:before
    content: ''
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    background-color: rgba(black,0.75)
    z-index: -1

  .logo,.lock-btn
    display: inline-block
    height: 40px
    line-height: 40px
    margin-top: 20px
    text-align: center
    color: $color-white
    vertical-align: top
    margin-bottom: 10px
  .logo
    position: relative
    width: 115px
    margin-left: -55px
    margin-bottom: 20px
    font-size: 25px
    text-transform: uppercase
    white-space: nowrap
    letter-spacing: 1px
    font-weight: 300
    background-color: $color-primary
    transition: all .6s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    &:before
      content: ''
      position: absolute
      bottom: -5px
      right: 0px
      height: 0
      width: 0
      border-top: 5px solid darken($color-primary,20)
      border-right: 5px solid transparent

  .lock-btn
    position: absolute
    top: 0
    right: 0
    opacity: 0
    transition: all .3s
    font-size: 30px
    color: $color-primary
    cursor: pointer
    i.active
      color: $color-primary
    &:before
      content: ''
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%,-50%)
      width: 0px
      height: 0px
      border-radius: 50%
      background-color: $color-primary
      opacity: 1
      transition: all .6s
    &:hover
      &:before
        width: 40px
        height: 40px
        opacity: 0
    &:active
      &:before
        width: 0
        height: 0
        opacity: 1

  ul.items
    list-style: none
    margin: 0
    padding: 0
    li
      background-color: rgba($color-white,0.125)
      margin-bottom: 5px
      padding-left: 14px
      height: 50px
      overflow: hidden
      transition: all .6s cubic-bezier(0.175, 0.885, 0.32, 1.275)
      a
        display: flex
        height: 50px
        line-height: 50px
        align-items: center
        color: $color-white
      i
        position: relative
        width: 30px
        font-size: 30px
        padding-right: 50px
        transition: all .6s cubic-bezier(0.175, 0.885, 0.32, 1.275)
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
        transition: all .3s
      .tag
        margin-right: 10px

      .subItem
        visibility: hidden
        padding-left: 20px
        border-left: 1px solid $color-white
        margin-left: 10px
        transition: all .3s
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

.nav.lock, .nav:hover
  width: 250px
  .logo
    width: 70%
    margin-left: 0px
    font-size: 30px
    background-color: transparent
    &:before
      display: none
  .lock-btn
    right: 20px
    opacity: 1
  .items
    li
      padding-left: 26px
      i
        font-size: 24px
        padding-right: 0

.nav ul li.active
  .subItem
    visibility: visible
  a i.ion-md-arrow-dropdown
    transform: rotate(0deg)
</style>
