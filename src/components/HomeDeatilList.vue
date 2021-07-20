<template>
<div>
       <div class="content">
        <div class="row">
          <div class="col">
              <div class="card-body">
                <h3 class="card-title">{{list.title}}</h3>
                <br>
                <div class="card-text text-left pt-3" v-html="list.content">
                {{ list.content }}
                </div>
              </div>
          </div>
        </div>
        <!-- /.row -->
    </div>
    </div>
</template>
<script>
export default {
    name : 'HomeDetailList',

    props : ['list']
}
</script>

<style>
.card-title {
    float: left;
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
}
</style>