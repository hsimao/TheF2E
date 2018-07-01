<template>
  <div class="container">
    <div class="gallery">
      <header class="header">
        <p>ccclothes</p>
        <h1 class="title">men's tops</h1>
      </header>
      <div class="gallery-item item-1">
        <div class="border"></div>
        <div class="rectangle"></div>
        <div class="line"></div>
        <div class="img"></div>
        <div class="gallery-title" data-line="linen blazer">linen blazer</div>
        <div class="number">01</div>
        <span>Men’s outfit</span>
      </div>
      <div class="gallery-item item-2">
        <div class="border"></div>
        <div class="rectangle"></div>
        <div class="line"></div>
        <div class="img"></div>
        <div class="gallery-title" data-line="FREELIFT">FREELIFT</div>
        <div class="number">02</div>
        <span>Men’s basics</span>
      </div>
      <div class="gallery-item item-3">
        <div class="border"></div>
        <div class="rectangle"></div>
        <div class="line"></div>
        <div class="img"></div>
        <div class="gallery-title" data-line="SUPER SKINNY">SUPER SKINNY</div>
        <div class="number">03</div>
        <span>Men’s pattern shirts</span>
      </div>
      <div class="gallery-item item-4">
        <div class="border"></div>
        <div class="rectangle"></div>
        <div class="line"></div>
        <div class="img"></div>
        <div class="gallery-title" data-line="DENIM">DENIM</div>
        <div class="number">04</div>
        <span>Men’s cadual</span>
      </div>
      <div class="gallery-item item-5">
        <div class="border"></div>
        <div class="rectangle"></div>
        <div class="line"></div>
        <div class="img"></div>
        <div class="gallery-title" data-line="SWEATSHIRTS">SWEATSHIRTS</div>
        <div class="number">05</div>
        <span>Men’s jacket</span>
      </div>
      <div class="gallery-item item-6">
        <div class="border"></div>
        <div class="rectangle"></div>
        <div class="line"></div>
        <div class="img"></div>
        <div class="gallery-title" data-line="VINTAGE DENIM">VINTAGE DENIM</div>
        <div class="number">06</div>
        <span>Men’s classic</span>
      </div>
      <div class="gallery-item item-7">
        <div class="border"></div>
        <div class="rectangle"></div>
        <div class="line"></div>
        <div class="img"></div>
        <div class="gallery-title" data-line="EDITION">EDITION</div>
        <div class="number">07</div>
        <span>Men’s shirts</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isLock: false
    }
  },
  components: {
  }
}
</script>

<style lang="sass">
$colorPrimary: #50E3C2

@mixin gridPos($row1, $row2, $col1, $col2)
  grid-row: #{$row1} / #{$row2}
  grid-column: #{$col1} / #{$col2}

@mixin gridRep($rowNum, $rowPx, $colNum, $colPx)
  display: grid
  grid-template-rows: repeat(#{$rowNum},#{$rowPx}px)
  grid-template-columns: repeat(#{$colNum},#{$colPx}px)

@mixin titleStyle1($px1: -16, $px2: -27)
  &:before,&:after
    content: attr(data-line)
    position: absolute
    left: 0
    width: 100%
    overflow: hidden
  &:before
    top: #{$px1}px
    height: 20px
    color: rgba(black,0.3)
  &:after
    top: #{$px2}px
    height: 15px
    color: rgba(black,0.1)

@mixin titleStyle2($dir: left, $px1: -15, $px2: -25)
  &:before,&:after
    content: attr(data-line)
    position: absolute
    top: 0
    width: 100%
    overflow: hidden
  &:before
    #{$dir}: #{$px1}px
    width: 20px
    color: rgba(black,0.3)
  &:after
    #{$dir}: #{$px2}px
    width: 15px
    color: rgba(black,0.1)
  @content



@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700,700i,900,900i')

*
  box-sizing: border-box

p,h1
  margin: 0
  padding: 0
  line-height: 1

body
  margin: 0

.container
  max-width: 1000px
  margin: 0 auto
  padding: 20px
  > *
    font-family: 'Roboto', sans-serif

.gallery
  +gridRep(20, 100, 8, 120)
  .header
    +gridPos(1, 2, 1, -1)
    text-align: center
    align-self: start
    justify-self: center
    p
      display: inline-block
      line-height: 24px
      padding: 0 10px
      font-size: 20px
      color: #fff
      letter-spacing: 0.5px
      text-transform: uppercase
      background-color: black
    .title
      margin-top: 14px
      line-height: 72px
      font-size: 72px
      font-weight: 900
      color: black
      text-transform: uppercase
  &-item
    position: relative
    > *
      position: relative
    .border
      width: 240px
      height: 200px
      border: solid 20px $colorPrimary
    .rectangle
      background-color: $colorPrimary
    .line
      width: 240px
      height: 100px
      background: linear-gradient(-45deg, $colorPrimary 0px, $colorPrimary 20px, transparent 20px, transparent 40px,$colorPrimary 40px, $colorPrimary 60px, transparent 60px, transparent 80px,$colorPrimary 80px, $colorPrimary 100px)
      // background: repeating-linear-gradient(-45deg,#50e3c2,#50e3c2 20px,transparent 0,transparent 40px)
      background-size: 56px 56px
      background-position: 100% 0%
      z-index: 10
    .img
      top: 0
      left: 0
      width: 100%
      height: 100%
      background-size: cover
      background-position: center
    .number
      font-size: 48px
      line-height: 48px
      font-weight: 900
    .gallery-title
      font-size: 48px
      line-height: 48px
      text-transform: uppercase
      font-weight: 900
    span
      font-size: 24px
      line-height: 28px
      font-style: italic
      z-index: 10

  .item-1
    +gridPos(2, 8, 1 ,6)
    +gridRep(6, 100, 5, 120)
    .img
      +gridPos(2, 6, 1 , -2)
      background-image: url('https://images.unsplash.com/photo-1513827379601-9dba5099a3f9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjF9&s=9b19616e232bd3897c5033df23102c6e&auto=format&fit=crop&w=1234&q=80')
    .gallery-title
      +gridPos(2, 3, 1, -1)
      +titleStyle1
      top: -12px
      left: -3px
    .border
      +gridPos(1, 3, 4, 6)
      top: 50px
      right: 60px
    .line,.number
      +gridPos(6, 7, 1, 2)
    .line
      left: 60px
      top: -50px
    .rectangle
      display: none
    span
      +gridPos(5, span 2, -2, span 1)
      writing-mode: vertical-lr

  .item-2
    +gridPos(3, 7, 6 ,-1)
    +gridRep(4, 100, 3, 120)
    .img
      +gridPos(2, 4, 1,span 2)
      background-image: url('https://images.unsplash.com/photo-1514632542677-48fae74a01b2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cf412aceb1d689765e387d30fca7210a&auto=format&fit=crop&w=1234&q=80')
    .gallery-title
      +gridPos(4, -1, 2, -1)
      +titleStyle1
      margin-top: 22px
    .border
      +gridPos(1, span2, 2, span 2)
    .rectangle
      width: 240px
      height: 200px
      top: 50px
      right: 60px
      +gridPos(1, span 2, 2, span 2)
    .number
      +gridPos(1, span1, 3, span 1)
      text-align: right
    .line
      display: none
    span
      +gridPos(1, span 1, 1 , -1)
      align-self: end
      left: -17px

  .item-3
    +gridPos(8, 12, 1 ,6)
    +gridRep(4, 100, 5, 120)
    .img
      +gridPos(2, span 2, 1, span 4)
      background-image: url('https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a0f994eef47e5fb1a67849703cc961b3&auto=format&fit=crop&w=750&q=80')
    .gallery-title
      +gridPos(1, 2, 2, -2)
      +titleStyle1
      text-align: right
      align-self: end
    .border
      +gridPos(2, span 2, 3, span 2)
      top: 50px
      left: 60px
    .rectangle
      +gridPos(1, 2, 1, 2)
      width: 240px
      height: 50px
      top: 50px
    .number
      +gridPos(4, 5, 5, 6)
    .line
      display: none
    span
      +gridPos(4, 5, 1, 3)
      text-align: right

  .item-4
    +gridPos(8, 13, 6 , -1)
    +gridRep(5, 100, 3, 120)
    .img
      +gridPos(2, span 4, 2, span 2)
      background-image: url('https://images.unsplash.com/photo-1484516758160-69878111a911?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=39466d66952b133d5a5cff642b970d05&auto=format&fit=crop&w=387&q=80')
    .gallery-title
      +gridPos(2, 4, 1, 2)
      justify-self: end
      align-self: start
      writing-mode: vertical-lr
      +titleStyle2(left, 43, 58)
        transform: scale(-1)
        &:before,&:after
          transform: scaleX(-1)
    .border
      +gridPos(1, span 2, 1, span 2)
      left: 60px
    .rectangle
      display: none
    .number
      +gridPos(5, 6, 1, 2)
      align-self: end
      justify-self: end
    .line
      +gridPos(5, 6, 2, -1)
      top: 50px
    span
      +gridPos(1, 3, 3, -1)
      justify-self: center
      top: -42px
      writing-mode: vertical-lr

  .item-5
    +gridPos(12, 15, 1 , 5)
    +gridRep(3, 100, 4, 120)
    .img
      +gridPos(2, span 2, 3, span 2)
      background-image: url('https://images.unsplash.com/photo-1525448198276-222de3961638?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=43fb25556cdbd191e520c7f28739e40d&auto=format&fit=crop&w=750&q=80')
      transform: scaleX(-1)
    .gallery-title
      +gridPos(2, 3, 1, -1)
      +titleStyle1
      align-self: end
      z-index: 11
    .border
      +gridPos(3, 4, 2, span 2)
      top: 50px
      height: 100px
    .rectangle
      display: none
    .number
      +gridPos(3, 4, 2, 3)
      align-self: end
    .line
      +gridPos(1, 3, 1, 2)
      top: 50px
      left: 60px
    span
      +gridPos(2, 3, 3, 5)
      justify-self: end
      left: 130px

  .item-6
    +gridPos(14, 19, 4 , -1)
    +gridRep(5, 100, 5, 120)
    .img
      +gridPos(2, span 4, 2, span 4)
      background-image: url('https://images.unsplash.com/photo-1519406709381-c1f293304b28?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=98c497a29f229085d9574ee8b6eeef8c&auto=format&fit=crop&w=334&q=80')
    .gallery-title
      +gridPos(1, 2, 3, -1)
      +titleStyle1
      align-self: end
    .border
      +gridPos(5, 6, 2, -1)
      top: 50px
      height: 100px
      width: 480px
    .rectangle
      +gridPos(4, 6, 1, 2)
      justify-self: end
      height: 200px
      width: 60px
    .number
      +gridPos(3, 4, 1, 2)
      justify-self: end
      align-self: end
    .line
      display: none
    span
      +gridPos(5, 6, 3, 5)
      justify-self: center
      align-self: end
      top: 30px

  .item-7
    +gridPos(16, -1, 1, 4)
    +gridRep(5, 100, 3, 120)
    .img
      +gridPos(2, -1, 1, 3)
      background-image: url('https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjF9&s=c3fe320bd592fb75fb54bf245817450d&auto=format&fit=crop&w=1534&q=80')
    .gallery-title
      +gridPos(2, 4, 3, 4)
      writing-mode: vertical-lr
      justify-self: start
      +titleStyle2(left, 44, 59)
        &:before,&:after
          transform: scaleX(-1)
    .border
      +gridPos(1, 4, 1, 3)
      top: 50px
      left: 60px
      height: 300px
    .rectangle
      +gridPos(4, -1, 3, 4)
      height: 200px
      width: 120px
    .number
      +gridPos(5, 6, 3, 4)
      justify-self: end
      align-self: end
    .line
      display: none
    span
      +gridPos(1, 2, 1, 3)
      align-self: end

</style>
