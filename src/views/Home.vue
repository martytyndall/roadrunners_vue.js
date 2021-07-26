<template>

<Carousel />

<div class="container">
    <hr>
    <div class="row">
        <div class="col-sm-8 main">
          <Main />
        </div>
        <div class="col-sm-4 aside">
          <Aside />
        </div>
    </div>
    <hr>
    <div class="row ">
        <div class="col-sm-12 find-us">
          <FindUs />
        </div>
    </div>
</div>



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

@media screen and (max-width: 767px){
    .main{
        width: 100% !important;
    }
    .aside{
        width: 100% !important;
    }
}



</style>