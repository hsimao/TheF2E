<template>
  <div class="tool">
    <input type="text" class="search" placeholder="Search">
    <i class="ion ion-ios-search"></i>
    <div class="right">
      <i class="ion ion-md-globe"></i>
      <i class="ion ion-md-qr-scanner"></i>
      <i class="ion ion-md-notifications-outline"><div class="tag">4</div></i>
      <i class="ion ion-md-list"></i>
      <img :src="manager" alt="" class="manager">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      bg: 'https://images.pexels.com/photos/990818/pexels-photo-990818.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
      manager: 'https://scontent.ftpe1-1.fna.fbcdn.net/v/t1.0-9/10339555_10202100354097039_4938999326384238111_n.jpg?_nc_cat=0&oh=4fb20080809fc43caa7c9a76a3e3ec39&oe=5BBBC1B7'
    }
  }
}
</script>

<style lang="sass" scoped>
$color-white: #fff
$color-red: #FF345D
$color-gray: #a6a9ae
$color-font: #263238

.tool
  position: relative
  display: flex
  align-items: center
  padding: 0 30px
  .search
    height: 35px
    min-width: 220px
    line-height: 35px
    padding: 0 10px
    outline: none
    border-radius: 100px
    border: solid 1px $color-gray
    font-size: 16px
    font-weight: 300
  .search + i
    font-size: 22px
    margin-left: -30px

  .right
    flex: 1 1 auto
    display: flex
    justify-content: flex-end
    align-items: center
    > *
      margin-left: 30px
    > i
      font-size: 24px
      color: $color-font
      position: relative
    i .tag
      position: absolute
      top: -14px
      right: -14px
      color: $color-white
      font-weight: 400
      border: solid 1px $color-white

  i
    font-size: 40px
  .manager
    width: 40px
    border-radius: 50%

</style>
