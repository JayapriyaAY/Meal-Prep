<template>
  <div>
    <home-plans :showBtn="showButton"></home-plans>
    <div class="row p-5" v-if="plan != null">
      <div class="col-1"></div>
      <div class="col">
        <div class ="row">
      <selected-plan v-for="plan in selectedMenuPlan" :key="plan.id" :plan="plan"></selected-plan>
        </div>
     </div>
      <div class="col-1"></div>
   </div>
  </div>
</template>

<script>
// import { mapActions } from 'vuex';
import HomePlans from "./HomePlans.vue";
import SelectedPlan from "./SelectedPlan.vue";
export default {
  components: { HomePlans, SelectedPlan },
  name: "Menu",
  data() {
    return {
      showButton: true,
    };
  },
  component: {
    HomePlans,
  },
  computed: {

    plan() {
      return this.$store.state.selectedplan;
    },
    selectedMenuPlan () {
      return this.$store.state.selplans
    }
  },

  // methods : {
  //   ...mapActions(['getSelectedMenuPlans'])
  // }
};
</script>