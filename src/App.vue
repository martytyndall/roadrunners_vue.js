<template>
  <!-- <Overlay /> -->
  <Header />
  <router-view/>
  <Footer />
</template>


<script>
// @ is an alias to /src
import Header from '@/components/Header'
// import Overlay from '@/components/Overlay'
import Footer from '@/components/Footer'

export default {
  components: {
    Header,
    // Overlay,
    Footer,
    },

    data: function(){
      return {
        
      }
    }
  
}
  

</script>

<style>

@font-face {
  font-family: barbatrick;
  src: url(fonts/barbatrick.ttf);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

#app{
  background: linear-gradient(rgba(59, 59, 59, 0.815), rgba(59, 59, 59, 0.815)), url(../src/assets/car-tyres-63928_1920.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: fit-content;
  
}


</style>
