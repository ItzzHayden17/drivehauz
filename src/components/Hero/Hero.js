import "../Hero/Hero.css"

function Hero() {
    return ( 
        <div className="Hero">
                  <div class="banner_section layout_padding">
         <div class="container">
            <div class="row">
               <div class="col-md-6">
                  <div id="banner_slider" class="carousel slide" data-ride="carousel">
                     <div class="carousel-inner">
                        <div class="carousel-item active">
                           <div class="banner_taital_main">
                              <h1 class="banner_taital">Buy Cars<br/><span style={{color:'#fe5b29'}}>For Cheap</span></h1>
                              <p class="banner_text">We would love to help you find your next daily!</p>
                              <div class="btn_main">
                                 <div class="contact_bt"><a href="/cars">Browse Collection</a></div>
                                 <div class="contact_bt active"><a href="/contact">Contact Us</a></div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-md-6">
                  <div class="banner_img"><img src="images/banner-img.png"/></div>
               </div>
            </div>
         </div>
      </div>
        </div>
     );
}

export default Hero;