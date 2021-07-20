<template>
  <div class="about pt-5">
    <h1>My Order </h1>

    <div v-if="orderList.length == 0" >
      <button v-on:click="moveToMenu" class="btn btn-primary">Go to Menu</button>
    </div>
    <div v-else>
    <ul class="text-left">
      <li v-for="list in orderList" :key="list.id"> {{list.name}}</li>
    </ul>
    </div>
  </div>
</template>
<script>
import router from '../router'
export default {
  name :'About',
  computed : {
     orderList () {
       return this.$store.state.orderlist
     }
  },
  methods : {
    moveToMenu() {
     router.replace('menu')
    }
  }
}
</script>
