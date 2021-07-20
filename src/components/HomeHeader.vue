<template>
    <div class="text-center bgimage py-5">
      <span class="p-5" style="color: white; font-size: 100px"
        >Healthy Meals for Your Table</span
      >
      <!-- font-size: xxx-large -->
      <br />
      <span class="p-5" style="color: white; font-size: 50px"
        >Finally be a foodie at home with fresh, chef-prepared meals delivered
        daily to your door.</span
      >
      <!-- font-size: xx-large; -->
      <!-- <div class="circle center"></div> -->
    </div>
</template>
<script>
export default {
    name : 'HomeHeader'
}
</script>
<style>
.bgimage {
  background-image: url("../../public/images/1.png");
  background-repeat: no-repeat;
  /* background-attachment: fixed; */
  background-size: 100% 100%;
}
.circle {
  background: lightblue;
  border-radius: 50%;
  width: 100px;
  height: 100px;
}
</style>
