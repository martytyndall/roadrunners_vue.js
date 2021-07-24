<template lang="en">
    <div class="container" v-on:pageLoad="getCurrentYear">
        <div class="row footer bg-primary">
            <div class="col-sm-6 contact">
                <h1>Contact</h1>
                <h5>Email: example@aol.com</h5>
                <h5>Tel: 01234 567 890</h5>
            </div>
            <div class="col-sm-6 opening-times">
                <h1>Opening Times</h1>
                <h5>Monday: 08.00 - 17.00</h5>
                <h5>Tuesday: 08.00 - 17.00</h5>
                <h5>Wednesday: 08.00 - 17.00</h5>
                <h5>Thursday: 08.00 - 17.00</h5>
                <h5>Friday: 08.00 - 17.00</h5>
                <h5>Saturday: 08.00 - 17.00</h5>
            </div>
            
            <div class="col-sm-12 copyright" >
                <br>
                <p>Copyright &copy; <span>{{ date }}</span> Marty Tyndall. All Rights Reserved.</p>
            </div>
        </div>        
    </div>
</template>
<script>
export default {
    name: 'Footer',

    data: function () {
        return {            
            date: new Date().toISOString().substr(0,4)
        }
    },

    // created(){
    //     this.currentYear = (newDate()).getFullYear();
    //     console.log(this.currentYear);
    // },

    methods: {
        
    }
    
}
</script>
<style scoped>

.row{
    position: relative;
}
    
</style>