<template>
  <div>
    <Form>
      <div slot="form-header">Join</div>
      <div slot="form-field1">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          name="email"
          class="form-control"
          placeholder="Enter email"
          v-model="email"
          required
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
          required
        />
        <div class="errormessage">{{ errmsg }}</div>
      </div>
      <div slot="form-controls">
        <button v-on:click="joinUser" type="submit" class="btn btn-primary">
          Submit
        </button>
      </div>
    </Form>
  </div>
</template>
<script>
import Form from "./Form.vue";
export default {
  name: "Join",
  components: {
    Form,
  },
  data() {
    return {
      email: "",
      password: "",
      errmsg: "",
    };
  },

  methods: {
    joinUser() {
        this.$store.dispatch("joinUser", {
          email: this.email,
          password: this.password,
        });
        console.log('ding ding')
        //       firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then (
        //   user=>{
        //     console.log('user',user.data)
        // router.replace('/')
        //   },
        //   err=>{
        //     alert(err)
        //     console.log(err)
        //   }
        // )
     
    },
  },
};
</script>
<style>
.errormessage {
  color: red;
}
</style>