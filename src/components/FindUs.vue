<template lang="en">
    <div id="find-us">
        <h1>Find Us</h1>
        <div class="map" id="map">
            <iframe
                
                style="border:0"
                loading="lazy"
                allowfullscreen
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCwyXoI8U0jKLtzNiC57_-Hm3yM_6pnhwE
                    &q=IP144BX">
            </iframe>
        </div>   
        
    </div>
</template>
<script>
export default {
    name: 'FindUs',
    
}
</script>
<style scoped>
.map{
    position: relative;
}

.map iframe {
    width: 600px;
    height: 450px;
}

@media screen and (max-width: 767px){    
    .map iframe {
      width: 70vw !important;
      height: 70vw;
    }
}
    
</style>