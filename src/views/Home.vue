<template>

<Carousel />

<div class="container">
    <hr>
    <div class="row">
        <div class="col-sm-8 main">
          <Main />
        </div>
        <div class="col-sm-4 aside">
          <Aside />
        </div>
    </div>
    <hr>
    <div class="row ">
        <div class="col-sm-12 find-us">
          <FindUs />
        </div>
    </div>


    <hr>

  <!-- tyre safety section -->
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

  <hr>

  <!-- contact section-->
  <section class="mb-4 container contact" id="contact">

      <!--Section heading-->
      <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
      <!--Section description-->
      <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
          a matter of hours to help you.</p>

      <div class="row">

          <!--Grid column-->
          <div class="col-md-9 mb-md-0 mb-5">
              <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                <!--Grid row-->
                <div class="row">

                  <!--Grid column-->
                  <div class="col-md-6">
                      <div class="md-form mb-0">
                          <input type="text" id="name" name="name" class="form-control">
                          <label for="name" class="">Your name</label>
                      </div>
                  </div>
                  <!--Grid column-->

                  <!--Grid column-->
                  <div class="col-md-6">
                      <div class="md-form mb-0">
                          <input type="text" id="email" name="email" class="form-control">
                          <label for="email" class="">Your email</label>
                      </div>
                  </div>                      
                  <!--Grid column-->
                </div>
                <!--Grid row-->

                <br>

                <!--Grid row-->
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control">
                            <label for="subject" class="">Subject</label>
                        </div>
                    </div>
                </div>
                <!--Grid row-->

                <br>

                <!--Grid row-->
                <div class="row">

                    <!--Grid column-->
                    <div class="col-md-12">

                        <div class="md-form">
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                            <label for="message">Your message</label>
                        </div>

                    </div>
                </div>
                <!--Grid row-->

              </form>

              <br>
              <div class="text-center text-md-left">
                  <a class="btn btn-primary" @click="validateForm">Send</a>
              </div>
              <div class="status"></div>
          </div>
          <!--Grid column-->
          
      </div>

      <br><hr>

  </section>

</div>



</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/Carousel'
import Main from '@/components/Main'
import Aside from '@/components/Aside'
import FindUs from '@/components/FindUs'


export default {
  name: 'Home',

  components: {
    Carousel,
    Main,
    Aside,
    FindUs,
  },

  data: function (){
    return {
      
      
    }
  },

  methods: {
    validateForm() {
        const nameRegex = /([0-9])+/;
        var name =  document.getElementById('name').value;
        if (name == "") {
            document.querySelector('.status').innerHTML = "Name cannot be empty";
            return false;
        } else if (nameRegex.test(name)) {
            document.querySelector('.status').innerHTML = "Name cannot contain numbers";
            return false;
        }

        var email =  document.getElementById('email').value;
        if (email == "") {
            document.querySelector('.status').innerHTML = "Email cannot be empty";
            return false;
        } else {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(!re.test(email)){
                document.querySelector('.status').innerHTML = "Email format invalid";
                return false;
            }
        }
        var subject =  document.getElementById('subject').value;
        if (subject == "") {
            document.querySelector('.status').innerHTML = "Subject cannot be empty";
            return false;
        }
        var message =  document.getElementById('message').value;
        if (message == "") {
            document.querySelector('.status').innerHTML = "Message cannot be empty";
            return false;
        }
        document.querySelector('.status').innerHTML = "Sending...";
        }
  },

}

</script>

<style scoped>

hr{
  height: 2px;
  color: white;
  opacity: .99;
  
}

@media screen and (max-width: 767px){
    .main{
        width: 100% !important;
    }
    .aside{
        width: 100% !important;
    }
}

.status{
    font-size: 20px;
    color: red;
}

.btn{
    margin-top: 20px;
    width: 100px;
}

.contact * {
  text-align: center;
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