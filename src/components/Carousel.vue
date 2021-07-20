<template lang="en">

<!-- tyre brand carousel -->
<div class="container">
    <div class="row">
        <div class="col-sm-12">
            <div id="myCarousel" class="carousel slide" data-ride="carousel">

                <!-- Indicators -->
                <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                    <li data-target="#myCarousel" data-slide-to="3"></li>
                    <li data-target="#myCarousel" data-slide-to="4"></li>
                </ol>

                <!-- Wrapper for slides -->
                <div class="carousel-inner">

                    <div class="item active">
                        <img :src=image alt="Los Angeles" style="width:100%;">
                    </div>

                    <div class="item">
                        <img :src=image2 alt="Chicago" style="width:100%;">
                    </div>
            
                    <div class="item">
                        <img :src=image3 alt="New york" style="width:100%;">
                    </div>
                    <div class="item">
                        <img :src=image4 alt="New york" style="width:100%;">
                    </div>
                    <div class="item">
                        <img :src=image5 alt="New york" style="width:100%;">
                    </div>

                </div>

                <!-- Left and right controls -->
                <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left"></span>
                    <span class="sr-only">Previous</span>
                </a>

                <a class="right carousel-control" href="#myCarousel" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right"></span>
                    <span class="sr-only">Next</span>
                </a>

            </div>
        </div>
    </div>
</div>

</template>

<script>
import image from '@/assets/tyres/bridgestone.png'
import image2 from '@/assets/tyres/continental.png'
import image3 from '@/assets/tyres/Hankook.png'
import image4 from '@/assets/tyres/goodyear.png'
import image5 from '@/assets/tyres/pirelli.png'

export default {
    name: 'Carousel',    

    data: function (){
        return {
            image: image,
            image2: image2,
            image3: image3,
            image4: image4,
            image5: image5,

        }
    },
}

</script>
<style scoped>

#myCarousel{
  padding: 20px;
  height: 200px;
}



@media screen and (max-width: 991px) {
    #myCarousel{
        height: 170px;
    }    
}

@media screen and (max-width: 767px) {
    #myCarousel{
        height: 150px;
    }    
}

@media screen and (max-width: 500px) {
    #myCarousel{
        height: 120px;
    }    
}

@media screen and (max-width: 320px) {
    #myCarousel{
        height: 100px;
    }    
}
    
</style>