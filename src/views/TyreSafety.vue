<template lang="en">
  <br><br>
  <div class="row safety-container container" id="tyre-safety">
    
    <h1 class="safety-title">Tyre Safety</h1>
    <div class="col-sm-6">
        <iframe class="videos" src="https://www.youtube.com/embed/XFvfnJT-m-g" title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    </div>
    <div class="col-sm-6">
        <iframe class="videos" src="https://www.youtube.com/embed/9F-HmK6-s8M" title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    </div>
  </div>
</template>


<script>
export default {
  name: 'TyreSafety',
  
}
</script>


<style scoped>
.container {
  margin: 0 auto;
}

iframe{
  width: 25vw;
  height: 15vw;
  margin-top: 20px;
}

@media screen and (max-width: 1024px) {
  iframe{
    width: 30vw;
    height: 20vw;

  }  
}

@media screen and (max-width: 575px){
  iframe{
    width: 60vw;
    height: 40vw;
    margin-top: 20px;

  }  
}

  
</style>