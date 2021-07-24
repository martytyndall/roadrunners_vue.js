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
            <!-- <div class="selection-container" id="selection-container" >
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

            </div> -->

            <div class="your-vehicle hide" id="your-vehicle" > 
                
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
                frontTyres: '',
                rearTyres: '',
            },
        }
    },

    methods: {
        // extracts the vehicle details from the returned vehicle object
        extractData(data){
            console.log(data);

            this.make = data.Response.DataItems.VehicleDetails.Make
            this.model = data.Response.DataItems.TyreDetails.RecordList[0].Vehicle.ModelName
            this.year = data.Response.DataItems.VehicleDetails.BuildYear
            this.frontTyres = data.Response.DataItems.TyreDetails.RecordList[0].Front.Tyre.Size
            this.rearTyres = data.Response.DataItems.TyreDetails.RecordList[0].Rear.Tyre.Size

            this.displayVehicleDetails(this.make, this.model, this.year, this.frontTyres, this.rearTyres)

        },



        fetchVehicle(e){
            e.preventDefault
            
            const vrm = this.vrm.input

            const trimmedVrm = vrm.replace(/ /g, "")

            axios.get("https://uk1.ukvehicledata.co.uk/api/datapackage/TyreData?v=2&api_nullitems=1&auth_apikey=4e2c7e5a-ee9e-49a7-baa9-252fec52b482&user_tag=&key_VRM=" + trimmedVrm)
            .then((response) => {
                this.extractData(response.data);
            })
            .catch(function(error) {
                console.log(error);
            })           
        },

        displayVehicleDetails(make, model, year, frontTyres, rearTyres){
            // removes hide class 
            document.getElementById("your-vehicle").classList.remove("hide");            

            let msgBox = document.getElementById("your-vehicle")

            msgBox.innerHTML = "<h2>Your Vehicle</h2>"
            msgBox.innerHTML += "<h3>Make: </h3>" + make + "<br>"
            msgBox.innerHTML += "<h3>Model: </h3>" + model + "<br>"
            msgBox.innerHTML += "<h3>Year: </h3>" + year + "<br><br>"
            msgBox.innerHTML += "<h2>Tyres:</h2>"
            msgBox.innerHTML += "<h3>Front :</h3>" + frontTyres + "<br>"
            msgBox.innerHTML += "<h3>Rear:</h3>" + rearTyres + "<br>"
        }


    },
}


</script>



<style scoped>

.vehicle-container{
    margin-top: 50px;
    background-color: grey;
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