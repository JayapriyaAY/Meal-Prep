<template>
          <div class="col-4 pt-5">
            <div class="card h-100">
              <div class="card-body p-0">
              <img :src="plan.img" alt class="img-fluid">
              <!-- style="height : 350px; width : 350px" -->
              </div>
            <div class="card-body">
              <h3 class="card-title">{{plan.name}}</h3>
              <br />
              <div class="card-text text-left pt-3">{{plan.content}}</div>
          <div class="pt-2">
           <button v-on:click="orderFood"  class="btn btn-success btn-flat">Order</button>
          </div>
            </div>
            </div>
          </div>
</template>
<script>
import { mapActions } from 'vuex'
import router from '../router';
export default {
    name : 'SelectedPlan',
    props : ['plan'],
    computed : {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        }
    },

    methods : {
      ...mapActions(['orderFoodPlan']),
      orderFood() {
        if(this.isAuthenticated) {
        this.orderFoodPlan(this.plan)
        }
        else {
          router.push('sign-in')
        }
      }
    }
}
</script>