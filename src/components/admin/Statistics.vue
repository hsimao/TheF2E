<template>
  <div class="statistics">
    <div class="title">statistics</div>
    <div class="subtitle">Last 6 Months Sales</div>
    <ul class="lines">
      <li class="line" v-for="month in months"><div class="line-bg" :class="'line-'+month.number"></div><span>{{month.month}}</span></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      months: [{
        month: 'Jan',
        number: '80'
      },{
        month: 'Feb',
        number: '90'
      },{
        month: 'Mar',
        number: '40'
      },{
        month: 'Apr',
        number: '50'
      },{
        month: 'May',
        number: '70'
      },{
        month: 'Jun',
        number: '30'
      },
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
$color-white: #fff
$color-red: #FF345D
$color-gray: #a6a9ae
$color-font: #263238
$color-primary: #45e994
$color-secondary: #23bcbb

.statistics
  background-color: $color-white
  box-shadow: 0 20px 40px 0 rgba(black,0.2)
  border-radius: 4px
  padding: 20px 30px

.subtitle
  margin-top: 25px
  text-align: center

.lines
  display: flex
  flex: row nowrap
  margin: 0
  margin-top: 50px
  padding: 0
  list-style: none

.line
  position: relative
  flex: 1 1 auto
  height: 250px
  &:before
    content: ''
    position: absolute
    width: 5px
    height: 100%
    bottom: 0
    left: 50%
    transform: translateX(-50%)
    background-color: rgba($color-gray,0.4)

  &-bg
    position: absolute
    left: 50%
    bottom: 0px
    transform: translateX(-50%)
    width: 5px
    background: linear-gradient(rgba($color-primary,0.7), rgba($color-secondary,0.8))
  &-bg.line-30
    height: 30%
  &-bg.line-40
    height: 40%
  &-bg.line-50
    height: 50%
  &-bg.line-70
    height: 70%
  &-bg.line-80
    height: 80%
  &-bg.line-90
    height: 90%

  span
    position: absolute
    width: 100%
    bottom: -40px
    text-align: center
    color: $color-gray
    font-size: 16px
    font-weight: 300
    letter-spacing: 1px
</style>
