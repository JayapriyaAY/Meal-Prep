<template>
      <nav class=" navbar navbar-expand navbar-dark align-middle" style="height : 64px;background-color : #795548">
    <!-- Left navbar links -->
    <ul class="navbar-nav ">
      <li class="nav-item d-none d-sm-inline-block px-4 ">
        <router-link to="/" style="text-decoration: none;"> <span style="font-size: 20px;font-weight : 500px;color: white;">Meal Prep</span> </router-link>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <router-link to="/menu">
       <button class="btn btn-outline-secondary" style="color: white">Menu</button>
        </router-link>
      </li>
    </ul>

    <!-- Right navbar links -->
          <ul class="navbar-nav ml-auto"  v-if="!isAuthenticated">
      <li class="nav-item d-none d-sm-inline-block">
       <button v-on:click="signinPage" class="btn btn-outline-secondary" style="color: white">Sign in</button>
      </li>
     
            <li class="nav-item d-none d-sm-inline-block px-4">
       <button v-on:click="joinPage" class="btn btn-outline-secondary" style="color: white">Join</button>
      </li>
    </ul>
       <ul v-else class="navbar-nav ml-auto" >
      <li class="nav-item d-none d-sm-inline-block">
       <button v-on:click="moveToProfile" class="btn btn-outline-secondary" style="color: white">Profile</button>
      </li>
     
            <li class="nav-item d-none d-sm-inline-block px-4">
       <button v-on:click="logout" class="btn btn-outline-secondary" style="color: white">Logout</button>
      </li>
       </ul>

  </nav>
</template>
<script>
import router from '../router/index'
export default {
    name : 'AppHeader',
    computed : {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        }
    },

    methods : {
signinPage () {
 router.replace('sign-in')
},
joinPage () {
router.replace('join')
},
moveToProfile() {
  router.replace('About')
},
      logout() {
            this.$store.dispatch('Logout');
        }
    },
    mounted () {
      console.log("ding ding", this.isAuthenticated)
    }

}
</script>


  <style>
.test {
   background-color: white; 
   border-color: white;
}
</style>