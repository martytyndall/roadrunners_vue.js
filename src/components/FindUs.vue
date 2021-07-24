<template lang="en">
    <div>
        <h1>Find Us</h1>
        <div class="map" id="map">
            <iframe
                width="600"
                height="450"
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
    
</style>