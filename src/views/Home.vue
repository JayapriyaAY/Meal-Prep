<template>
  <div class="home">
    <home-header></home-header>
    <home-details></home-details>
    <home-plans :showBtn="showButton"></home-plans>
  </div>
</template>

<script>
import HomeDetails from '../components/HomeDetails.vue';
// @ is an alias to /src
import HomeHeader from "../components/HomeHeader.vue";
import HomePlans from '../components/HomePlans.vue';

export default {
  name: "Home",
  data( ) {
    return {
      showButton : false
    }
  },
  components: {
    // HelloWorld,s
    HomeHeader,
    HomeDetails,
    HomePlans,
  },
};
</script>


