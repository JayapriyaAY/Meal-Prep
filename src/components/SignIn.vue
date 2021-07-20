<template>
<div>
    <Form>
            <div slot="form-header">
           SignIn 
        </div>
        <div slot="form-field1">
              <label for="exampleInputEmail1">Email address</label>
                      <input
                        type="email"
                        name="email"
                        class="form-control"
                        placeholder="Enter email"
                        v-model="email"
                      />
        </div>
        <div slot="form-field2">
                        <label for="exampleInputPassword1">Password</label>
                      <input
                        type="password"
                        name="password"
                        class="form-control"
                        placeholder="Password"
                        v-model="password"
                      />
        </div>
        <div slot="form-controls">
                    <button v-on:click="LoginUser" type="submit" class="btn btn-primary">
                      Submit
                    </button>
        </div>
    </Form>
</div>

</template>
<script>
import Form from './Form.vue';
export default {
  components: { Form },
  name: "SignIn",
  component : {
      Form
  },
  data () {
    return {
      email : "",
      password : "",
    }
  },
    methods : {
    LoginUser () {
      this.$store.dispatch('signInUser',{ 
        email : this.email,
        password :this.password
      })
      // firebase.auth().signInWithEmailAndPassword(this.email,this.password).then (
      //   user=>{
      //     console.log('user',user.data)
      // router.replace('/')
      //   },
      //   err=>{
      //     alert(err)
      //   }
      // )
    }
  }
};
</script>