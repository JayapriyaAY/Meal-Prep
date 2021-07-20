<template>
<div class="pt-5" style="background-color : #d7ccc8 ;color: #795548">
  <h1> <b>{{title}} </b></h1>
    <div class="row">
    <div class="col-1"></div>
    <div class="col">
      <home-detail-list  v-for="data in worklist" :key="data.id" :list="data">
      </home-detail-list>
    </div>
    <div class="col-1"></div>
  </div>
</div>

</template>
<script>
import { mapActions,mapState } from "vuex";
import HomeDetailList from './HomeDeatilList.vue'
export default {
  name: "HomeDetails",
  components:{
   HomeDetailList,
  },
  data () {
    return {
      title : 'How It Works'
    }
  },
  computed: {
    ...mapState(["worklist"]),
    // worklist() {
    //   console.log('page',this.$store.state.worklist)
    //   return this.$store.state.worklist
    // }
  },
  mounted() {
    // this.$store.dispatch("getWorkList");
    this.getWorkList()
  },
  methods: {
    ...mapActions(["getWorkList"]),
  },
};
</script>