<template>

<Carousel />

<div class="container">
  <hr>
  <div class="col-sm-8">
    <Main />
    <hr><br>
    <FindUs />
  </div>

  <div class="col-sm-4">
    <Aside />
  </div>



</div>




<div class="col-sm-4"></div>

<div class="col-sm-12"></div>

<div class="col-sm-12"></div>



</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/Carousel'
import Main from '@/components/Main'
import Aside from '@/components/Aside'
import FindUs from '@/components/FindUs'


export default {
  name: 'Home',

  components: {
    Carousel,
    Main,
    Aside,
    FindUs,
  },

  data: function (){
    return {
      
      
    }
  },

  methods: {
  },

}

</script>

<style scoped>

hr{
  height: 2px;
  color: white;
  opacity: .99;
  
}



</style>