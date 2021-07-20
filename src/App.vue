<template>
<Overlay />
<Header />

  
  <router-view/>
</template>


<script>
// @ is an alias to /src
import Header from '@/components/Header'
import Overlay from '@/components/Overlay'

export default {
  components: {
    Header,
    Overlay,
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
  color: #2c3e50;
}

#app{
  background-image: url(../src/assets/car-tyres-63928_1920.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 1750px;
}


</style>
