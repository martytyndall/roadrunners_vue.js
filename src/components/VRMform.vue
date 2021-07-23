<template lang="en">
    <div>
        <div class="vehicle-container">
            <h3>FIND THE CORRECT TYRES FOR YOUR VEHICLE</h3>
            <h5>ENTER YOUR REGISTRATION PLATE BELOW</h5>

            <form @submit.prevent="fetchVehicle" method="get" class="vrm-form">
                <span id="vrm-input">
                    <input class="input" type="text" name="input" placeholder="YOUR REG" v-model="vrm.input">
                </span>                
                <button class="btn-primary" type="submit">GO</button>  
            </form>

            <hr>
            <div class="selection-container" id="selection-container" >
                <h5>OR</h5>
                <h5>SELECT YOUR VEHICLE VEHICLE MANUALLY</h5>

                <form class="vehicle-form" method="post">          
                    <span class="select-vehicle field">
                        <select name="make"><option>-Select Make-</option></select>
                    </span>
                    <br>
                    <span class="select-vehicle field">
                        <select name="model" disabled="disabled"><option>-Select Model-</option></select>
                    </span>
                    <br>                
                    <span class="small left field">
                        <select name="year" disabled="disabled"><option>-Year-</option></select>
                    </span>
                    
                    <span class="small right field">
                        <select name="engine" disabled="disabled"><option>-Engine-</option></select>
                    </span>
                    <br>
                    <span class="small bottom-left field"><select name="fuel" disabled="disabled"><option>-Fuel-</option></select>
                    </span>

                    <button class="btn-primary small bottom-right" type="submit" >GO</button>
                </form>

            </div>

            <div class="your-vehicle hide" id="your-vehicle" >
                <br>
                <button class="btn-primary">CLICK TO SEE TYRES</button>               
            </div>

            <div class="error-msg hide">
                Sorry, we couldn't find your vehicle.
                <br>
                Please try again
            </div>
            



            

        </div>
        
        
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name: 'VRMform',

    data: function () {
        return {
            vrm:{
                input: '',
            },

            vehicleDetails:{
                make: '',
                model: '',
                buildYear: '',
            }          
        }
    },

    components:{

    },

    methods: {
        // extracts the vehicle details from the returned vehicle object
        getData(data){
            console.log(data);

            for (const [key] of Object.entries(data)){
                for (const [key2] of Object.entries(data[key])){
                    for (const [key3] of Object.entries(data[key][key2])){
                        for (const [key4, value4] of Object.entries(data[key][key2][key3])){
                            if (key4 == 'Make') {
                                this.make = value4                                
                            } else if (key4 == 'Model'){
                                this.model = value4
                            } else if (key4 == 'BuildYear'){
                                this.buildYear = value4                            
                            }
                        }                    
                    }
                }                
            }            
            
                console.log(this.make, this.model, this.buildYear);
                this.displayVehicleMessage(this.make, this.model, this.buildYear)
        },



        fetchVehicle(e){
            e.preventDefault
            
            const vrm = this.vrm.input

            const trimmedVrm = vrm.replace(/ /g, "")

            axios.get("https://uk1.ukvehicledata.co.uk/api/datapackage/TyreData?v=2&api_nullitems=1&auth_apikey=4e2c7e5a-ee9e-49a7-baa9-252fec52b482&user_tag=&key_VRM=" + trimmedVrm)
            .then((response) => {
                this.getData(response.data);
            })
            .catch(function(error) {
                console.log(error);
            })            
        },

        displayVehicleMessage(make, model, year){
            // adds and removes hide class 
            document.getElementById("selection-container").classList.add("hide");
            document.getElementById("your-vehicle").classList.remove("hide");

            

            let msgBox = document.getElementById("your-vehicle")

            msgBox.innerHTML = "<h2>Your Vehicle</h2>"
            msgBox.innerHTML += "<h5>Make: </h5>" + make + "<br>"
            msgBox.innerHTML += "<h5>Model: </h5>" + model + "<br>"
            msgBox.innerHTML += "<h5>Year: </h5>" + year + "<br>"           
        }


    },
}


</script>



<style scoped>

.vehicle-container{
    margin-top: 50px;
    background-color: white;
    border: 1px solid blue;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 0 2px 3px blue;.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: #2196F3;
  padding: 10px;
}
}

.vehicle-container input {
    background-color: #FFD800 !important;
    width: 100%;
    height: 33px;
    font-family: 'uknumberplateregular';
    color: #000;
    font-size: 28px;
    text-transform: uppercase;
    background: transparent;
    line-height: 26px;
    padding-left: 6px;
    padding-right: 6px;
    border: 0px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    outline: none;
}

#vrm-input {
    height: 35px;
    background-image: url(../assets/GB-logo.png);
    background-repeat: no-repeat;
    float: left;
    width: 180px;
    border: 1px solid #12214e;
    border-radius: 5px;
    padding-left: 19px;
}



.vehicle-container button {
    height: 35px;
    border-radius: 5px;
    font-size: 20PX;
}

.field{
    font-size: 20px;
}

.select-vehicle select{
    height: 35px;
    width:100% !important;
    
}

.field select{
    border-radius: 5px;
    height: 35px;
    width: 45%;
    margin-bottom: 10px;
    border-radius: 5px;
}

.left {
    margin-right: 5%;
}
.right {
    margin-left: 5%;
}
.bottom-left {
    margin-right: 5%;
}
.bottom-right {
    margin-left: 5%;
    width: 45%;
}

.hide{
    display: none;
}

.show{
    display: block;
}

.your-vehicle{
    text-align: left;
}

</style>