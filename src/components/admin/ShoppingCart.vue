<template>
  <div class="shoppingCart">
    <div class="title">SHOPPING CART</div>
    <table class="carts">
      <tr>
        <th>Image</th>
        <th>Product</th>
        <th>Quantity</th>
        <th>Amount</th>
        <th>Delete</th>
      </tr>
      <tr v-for="order in orders">
        <td><img :src="order.img" alt="img"></td>
        <td>{{order.name}}</td>
        <td>{{order.count}}</td>
        <td>$ {{order.money | currency}}</td>
        <td><i class="ion ion-md-close"></i></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      orders: [
        {
          img: 'https://pixinvent.com/apex-angular-4-bootstrap-admin-template/demo-4/assets/img/elements/01.png',
          name: 'Ferrero Rocher',
          count: 1,
          money: 480
        },{
          img: 'https://pixinvent.com/apex-angular-4-bootstrap-admin-template/demo-4/assets/img/elements/07.png',
          name: 'Headphones',
          count: 2,
          money: 2980
        },{
          img: 'https://pixinvent.com/apex-angular-4-bootstrap-admin-template/demo-4/assets/img/elements/11.png',
          name: 'Camera',
          count: 1,
          money: 32890
        },{
          img: 'https://pixinvent.com/apex-angular-4-bootstrap-admin-template/demo-4/assets/img/elements/14.png',
          name: 'Beer',
          count: 2,
          money: 99
        }
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

.shoppingCart
  background-color: $color-white
  box-shadow: 0 20px 40px 0 rgba(black,0.2)
  border-radius: 4px
  padding: 20px 30px

table.carts
  width: calc(100% + 60px)
  margin-left: -30px
  margin-top: 20px
  border-collapse: collapse
  tr + tr
    border-top: 1px solid darken($color-white,10)
  th,td
    padding: 13px 30px
    font-size: 16px
    text-align: left
  th
    padding: 16px 30px
    background-color: lighten($color-gray,20)
  td
    vertical-align: top
    img
      width: 40px
  th:nth-child(3),td:nth-child(3),th:nth-child(4),td:nth-child(4),  
    text-align: right
  td:last-child
    text-align: center
    color: $color-red
</style>
