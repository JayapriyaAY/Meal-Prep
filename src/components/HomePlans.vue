<template>
  <div class="p-5">
    <h1>
      <b> {{ title }} </b>
    </h1>
    <div class="row pt-5">
      <div class="col-1"></div>
      <div class="col">
        <div class="row">
          <div class="col-4" v-for="plan in plans" :key="plan.id">
            <div class="card h-100">
              <div class="card-body p-0">
              <img :src="plan.img" alt class="img-fluid">
              <!-- style="height : 350px; width : 350px" -->
              </div>
            <div class="card-body">
              <h3 class="card-title">{{plan.name}}</h3>
              <br />
              <div class="card-text text-left pt-3">{{plan.content}}</div>
          <div v-if="showBtn" class="pt-2">
           <button style="width:100%" v-on:click="selectedPlan(plan.name)" class="btn btn-outline-success btn-flat">Select this Plan</button>
          </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-1"></div>
    </div>
    <!-- /.row -->
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "HomePlans",
  data() {
    return {
      title: "Available Meal Plans",
    };
  },
  props : ['showBtn'],
  computed: {
    // ...mapState(['plans']),
       plans () {
      return this.$store.state.plans
    },
  
  
  },
  mounted() {
    this.$store.dispatch("getAvailablePlans");
  },
  methods: {
    ...mapActions(["getAvailablePlans","selectedPlan"]),
  },
};
</script>
<style>
.img {
  width: 100%;
}
</style>
