<template lang="en">
    <div>

        <div class="top">
            <img v-bind:src=image>
        </div>
            
        <div class="bottom">
            <div class="car-parts-form portrait">
<h2>
<span>FIND</span>&nbsp;CAR PARTS</h2>
<div class="number-col">
<span class="heading">ENTER YOUR NUMBER PLATE BELOW</span><form class="vrm-form portraitform" id="vrmForm" action="/catalog/manufacturers/getvehiclebyreg" method="POST">
<input type="hidden" name="vrminput" value="reg"><span class="vrm-input"><input type="text" id="vrmReg" onfocus="if (this.value == 'YOUR REG') this.value='';" maxlength="8" onblur="if(this.value == '') this.value='YOUR REG' " name="reg" value="YOUR REG"></span><input class="go-btn" type="submit" value="Go">
</form>
</div>
<div class="separator">or</div>
<div class="select-vehicle">
<span class="heading">SELECT YOUR VEHICLE</span><form class="vehicle-form portraitform" method="POST">
<input type="hidden" name="vrminput" value="makemodel"><span class="field"><select name="make"><option>-Select Make-</option><option value="Abarth">Abarth</option><option value="AC Cars">AC Cars</option><option value="Aixam">Aixam</option><option value="Alfa Romeo">Alfa Romeo</option><option value="Allied Electric">Allied Electric</option><option value="Alpina">Alpina</option><option value="Alpine">Alpine</option><option value="Ariel">Ariel</option><option value="Asia">Asia</option><option value="Aston Martin">Aston Martin</option><option value="Audi">Audi</option><option value="Austin">Austin</option><option value="Auto-Trail">Auto-Trail</option><option value="Auverland">Auverland</option><option value="Avia">Avia</option><option value="Bedford">Bedford</option><option value="Benimar">Benimar</option><option value="Bentley">Bentley</option><option value="BMW">BMW</option><option value="Bristol">Bristol</option><option value="British Leyland">British Leyland</option><option value="Bugatti">Bugatti</option><option value="Cadillac">Cadillac</option><option value="Caterham">Caterham</option><option value="Chausson">Chausson</option><option value="Chevrolet">Chevrolet</option><option value="Chrysler">Chrysler</option><option value="Citroen">Citroen</option><option value="Corvette">Corvette</option><option value="Cumberland UK">Cumberland UK</option><option value="Dacia">Dacia</option><option value="Daewoo">Daewoo</option><option value="Daihatsu">Daihatsu</option><option value="Daimler">Daimler</option><option value="DFSK">DFSK</option><option value="Dodge">Dodge</option><option value="DS">DS</option><option value="Ferrari">Ferrari</option><option value="Fiat">Fiat</option><option value="Ford">Ford</option><option value="Freight Rover">Freight Rover</option><option value="FSO">FSO</option><option value="Great Wall">Great Wall</option><option value="Honda">Honda</option><option value="Hummer">Hummer</option><option value="Hyundai">Hyundai</option><option value="INFINITI">INFINITI</option><option value="Irisbus">Irisbus</option><option value="Isuzu">Isuzu</option><option value="Isuzu Trucks">Isuzu Trucks</option><option value="Iveco">Iveco</option><option value="Jaguar">Jaguar</option><option value="Jeep">Jeep</option><option value="Jensen">Jensen</option><option value="Kia">Kia</option><option value="Koenigsegg">Koenigsegg</option><option value="KTM">KTM</option><option value="Lada">Lada</option><option value="Lamborghini">Lamborghini</option><option value="Lancia">Lancia</option><option value="Land Rover">Land Rover</option><option value="LDV">LDV</option><option value="Lexus">Lexus</option><option value="Leyland DAF">Leyland DAF</option><option value="Ligier">Ligier</option><option value="London Electric Vehicle Company">London Electric Vehicle Company</option><option value="London Taxis Int">London Taxis Int</option><option value="Lotus">Lotus</option><option value="Mahindra">Mahindra</option><option value="MAN">MAN</option><option value="Maserati">Maserati</option><option value="Maybach">Maybach</option><option value="Mazda">Mazda</option><option value="McLaren">McLaren</option><option value="MCW Metrocab">MCW Metrocab</option><option value="Mercedes-Benz">Mercedes-Benz</option><option value="Mercedes-Maybach">Mercedes-Maybach</option><option value="MG">MG</option><option value="MIA">MIA</option><option value="Microcar">Microcar</option><option value="MINI">MINI</option><option value="Mitsubishi">Mitsubishi</option><option value="Mitsubishi Fuso">Mitsubishi Fuso</option><option value="Mitsubishi Trucks">Mitsubishi Trucks</option><option value="Morgan">Morgan</option><option value="Morris">Morris</option><option value="MyCar">MyCar</option><option value="Nissan">Nissan</option><option value="Noble">Noble</option><option value="Opel">Opel</option><option value="Pagani">Pagani</option><option value="Perodua">Perodua</option><option value="Peugeot">Peugeot</option><option value="Piaggio">Piaggio</option><option value="Porsche">Porsche</option><option value="Proton">Proton</option><option value="Reliant">Reliant</option><option value="Renault">Renault</option><option value="Renault Trucks">Renault Trucks</option><option value="Reva">Reva</option><option value="Rollerteam">Rollerteam</option><option value="Rolls Royce">Rolls Royce</option><option value="Rover">Rover</option><option value="Saab">Saab</option><option value="Santana">Santana</option><option value="SAO">SAO</option><option value="SEAT">SEAT</option><option value="Skoda">Skoda</option><option value="Smart">Smart</option><option value="Smith Electric Vehicles">Smith Electric Vehicles</option><option value="Ssangyong">Ssangyong</option><option value="Subaru">Subaru</option><option value="Suzuki">Suzuki</option><option value="Swift Motorhomes">Swift Motorhomes</option><option value="Talbot">Talbot</option><option value="TATA">TATA</option><option value="Tesla">Tesla</option><option value="Toyota">Toyota</option><option value="Tribute Motorhomes">Tribute Motorhomes</option><option value="Triumph">Triumph</option><option value="TVR">TVR</option><option value="UMM">UMM</option><option value="Vauxhall">Vauxhall</option><option value="Verte">Verte</option><option value="Volkswagen">Volkswagen</option><option value="Volvo">Volvo</option><option value="Westfield">Westfield</option><option value="Yuejin">Yuejin</option><option value="Yugo">Yugo</option></select></span><span class="field"><select name="model" disabled="disabled"><option>-Select Model-</option></select></span><span class="field small"><select name="year" disabled="disabled"><option>-Year-</option></select></span><span class="field small right"><select name="engine" disabled="disabled"><option>-Engine-</option></select></span><span class="field small margin-one"><select name="fuel" disabled="disabled"><option value="">-Fuel-</option></select></span><input class="go-btn" type="submit" value="GO">
</form>
</div>
</div>            
        </div>
        
    </div>
</template>
<script>
import image from '@/assets/guarantee.png'
// import axios from 'axios'

export default {
    name: 'Aside',

    data: function () {
        return {
            image: image
        }
},


    
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