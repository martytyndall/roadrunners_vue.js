<template lang="en">
    <div>

        <div class="top">
            <img v-bind:src=image>
        </div>

        <div class="bottom">
            <VRMform />
        </div>
                    
    </div>
</template>
<script>
import image from '@/assets/guarantee.png'
import VRMform from '@/components/VRMform'

// import axios from 'axios'

export default {
    name: 'Aside',

    data: function () {
        return {
            image: image
        }
},

    components: {
        VRMform,
    }


    
}
</script>
<style scoped>

.car-parts-form {
    /* position: absolute; */
    left: 10px;
    top: 3%;
    background: #fff;
    box-shadow: 0 0 2px 3px rgba(0, 0, 0, 0.2);
    z-index: 100;
    border-radius: 5px;
    width: 260px;
    height: 94%;
}

.car-parts-form h2 {
    float: left;
    width: 100%;
    margin: 14px 0 10px;
    text-align: center;
    color: #ce2127;
    font-size: 28px;
    text-transform: uppercase;
    font-family: 'ProximaNovaBold';
    letter-spacing: -2px;
    line-height: 23px;
}

.car-parts-form .number-col .heading {
    float: left;
    width: 100%;
    text-transform: uppercase;
    font-size: 12px;
    color: #8e8e91;
    font-family: 'ProximaNovaBold';
    text-align: center;
    line-height: 10px;
}

.car-parts-form .number-col .vrm-form {
    float: left;
    width: 100%;
    margin: 8px 0 0;
}

.car-parts-form .number-col {
    float: left;
    width: 100%;
    background: #f1f1f1;
    border-top: 1px solid #d9d9d9;
    padding: 13px 12px;
}

.car-parts-form .number-col .vrm-form input {
    float: left;
    width: 100%;
    height: 33px;
    font-family: 'uknumberplateregular';
    color: #000;
    font-size: 29px;
    text-transform: uppercase;
    background: transparent;
    line-height: 28px;
    padding-left: 6px;
    padding-right: 6px;
    border-radius: 5px;
}

.vrm-form {
    float: left;
    width: 100%;
    margin: 8px 0 0;
}

.vrm-form input {
    float: left;
    width: 100%;
    height: 33px;
    font-family: 'uknumberplateregular';
    color: #000;
    font-size: 29px;
    text-transform: uppercase;
    background: yellow;
    line-height: 28px;
    padding-left: 6px;
    padding-right: 6px;
    border-radius: 5px;
}

.car-parts-form .vehicle-form {
    margin-bottom: 12px;
    float: left;
    width: 100%;
}

.car-parts-form .select-vehicle {
    float: left;
    width: 100%;
    margin: 15px 0 0;
    padding: 0 12px;
}

    
</style>