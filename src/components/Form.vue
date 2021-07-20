<template>
  <!-- <div>
           <slot name="form-header"> </slot>
    <slot name="form-fields"></slot>
    <slot name="form-control"></slot>
  </div> -->
  <div class="row pt-5">
    <div class="col"></div>
    <div class="col">
      <section class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="card card-primary">
                <div class="card-header">
                  <h3 class="card-title"><slot name="form-header"> </slot></h3>
                </div>
                  <div class="card-body">
                    <div class="form-group">
                      <slot name="form-field1"></slot>
                    </div>
                    <div class="form-group">
                      <slot name="form-field2"></slot>
                    </div>
                  </div>
                  <div class="card-footer">
                    <slot name="form-controls"></slot>
                  </div>
              </div>
            </div>
            <div class="col-md-6"></div>
          </div>
        </div>
      </section>
    </div>
    <div class="col"></div>
  </div>
</template>
<script>
// import SignIn from './SignIn.vue'
export default {
  name: "Form",
  components: {
    //   SignIn
  },
};
</script>
