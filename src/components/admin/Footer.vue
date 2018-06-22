<template>
  <footer class="footer">
    <p class="text">Filter - The F2E 前端修練精神時光屋 [第二週賽事] | 高雄旅遊景點API應用 | Front End Development by HSI-MAO CHEN</p>
    <a class="link" href="https://github.com/hsimao/" target="_blank"><i class="icon ion-logo-github"></i></a><a class="link" href="https://codepen.io/hsimao" target="_blank"><i class="icon ion-logo-codepen"></i></a>
  </footer>
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
$color-white: #fff
$color-red: #FF345D
$color-gray: #a6a9ae
$color-font: #263238
$color-primary: #45e994
$color-secondary: #23bcbb

.footer
  display: flex
  justify-content: center
  align-items: center
  margin-top: 30px
  padding: 6px 30px
  background-image: linear-gradient(to right bottom, #45e994, #18dfa5, #00d4b1, #00c8b9, #23bcbb)
.text
  color: $color-font
  font-size: 16px
  letter-spacing: 1px
  margin-right: 10px
  opacity: 0.7
.link
  color: $color-font
  margin-right: 10px
  i
      margin-top: 3px
      color: $color-font
      font-size: 22px
</style>
