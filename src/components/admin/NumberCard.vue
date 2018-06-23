<template>
  <div class="numberCard">
    <div class="card" v-for="card in cards">
      <div class="number">$ {{card.number}}</div>
      <div class="card-title">Total {{card.type}}</div>
      <div class="icon" :class="card.icon"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cards: [{
        number: '2156',
        type: 'Tax',
        icon: 'ion ion-ios-pie',
        icon2: 'ion ion-md-pie',
      },{
        number: '1567',
        type: 'Cost',
        icon: 'ion ion-ios-bulb'
      },{
        number: '2156',
        type: 'Sales',
        icon: 'ion ion-md-pulse'
      },{
        number: '2156',
        type: 'Earning',
        icon: 'class="ion ion-md-cash'
      },]
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

@mixin rwd($breakpoint)
	@if $breakpoint == sm
		@media (max-width: 568px) { @content }
	@if $breakpoint == md
		@media (max-width: 1024px) { @content }

.numberCard
  display: flex
  flex-flow: row wrap
  justify-content: space-between
  .card
    position: relative
    width: calc(25% - 16px)
    height: 170px
    background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898
    background-blend-mode: multiply,multiply
    border-radius: 4px
    padding: 15px
    color: $color-white
    overflow: hidden
    box-shadow: 0 4px 6px 0 rgba(black,0.2)
    +rwd(md)
      width: calc(50% - 8px)
      margin-bottom: 16px
    +rwd(sm)
      width: 100%

    .number
      position: relative
      font-size: 30px
      font-weight: 300
      z-index: 2

    &-title
      position: relative
      font-size: 16px
      font-weight: 300
      letter-spacing: 1px
      z-index: 2

    .icon
      position: absolute
      font-size: 170px
      right: -20px
      bottom: -20px
      color: $color-white
      opacity: 0.5

</style>
