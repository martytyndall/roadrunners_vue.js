<template lang="en">

<div class="container header">
    <nav class="navbar navbar-expand-md navbar-dark bg-primary">
        <a class="navbar-brand logo" href="#">
            <img v-bind:src=image>
            <h2 class="title fluid">RoadRunners-24/7</h2>
        </a>
        
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto" >
                <li class="nav-item" @mouseenter="e => e.target.classList.toggle('nav-item-hover')" @mouseleave="e => e.target.classList.toggle('nav-item-hover')">
                    <a class="nav-link" href="/">Home</a>
                </li>
                <li class="nav-item" @mouseenter="e => e.target.classList.toggle('nav-item-hover')" @mouseleave="e => e.target.classList.toggle('nav-item-hover')">
                    <a class="nav-link" href="tyresafety">Tyre Safety</a>
                </li>
                
                <li class="nav-item" @mouseenter="e => e.target.classList.toggle('nav-item-hover')" @mouseleave="e => e.target.classList.toggle('nav-item-hover')">
                    <a class="nav-link" href="contact">Contact</a>
                </li>
            </ul>
           
        </div>
    </nav>

</div>





    
    
</template>


<script>

import image from '@/assets/cropped-HeaderLeft-1.png'



export default {
    name: 'Header',
    components: {
   
    },
    
    data: function () {
        return {
            image: image,
            hover: false,
        }
    },
}

</script>


<style scoped>

.navbar{
    border-radius: 5px;
}


/* logo styling */
.logo{
    height: fit-content;
    float: left;
    margin: 0 auto;
    text-align: center;
    text-decoration: none;
}

/* logo image styling */
.logo img{
    text-align: center;
    width: inherit;
    max-width: 200px;
    margin: 0 auto;
}


/* customisation for title */
.title{
  font-family: barbatrick;
  font-size: 4vw;
  letter-spacing: 5px;
  color: rgb(77, 75, 75);
  margin: 0;
  position: relative;
  transform: translateY(35%);    
}

.nav-item{
    width: 120px;
    border-radius: 5px;
    
}

.nav-item-hover{
    background-color: darkblue;
    animation-name: example;
    animation-duration: .5s;
}

@keyframes example {
  from {background-color: lightblue;}
  to {background-color: darkblue;}
}

.nav-link{
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
}

.navbar-nav{
    float: right;
}

.navbar-collapse{
    -webkit-box-shadow: none;
    box-shadow: none;    
}

.navbar{
    margin-bottom: 0px;
}

@media screen and (max-width: 991px) {
    .navbar-brand {
        width: 100%;
    }

    .navbar-brand img{
        margin: 0 auto;
    }

    .navbar-toggler{
        margin: 0 auto;
        margin-top: 10px;
    }

    .navbar-collapse{
        margin: 0 auto;
    }

    .navbar-nav{
        float: none;
    }
}

@media screen and (min-width: 767px) {
    .title{
        font-size: 20px;
    }
}

@media screen and (max-width: 767px) {
    .nav-item{
        margin: 0 auto;
    }
}



</style>