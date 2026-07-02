<!DOCTYPE html>
<html class="no-js" lang="en">

  <!-- Head -->
  <?php include './partials/head.php'?>

  <body>

    <!-- Start Preloader -->
    <?php include './partials/preloader.php'?>
    <!-- End Preloader -->

    <!-- Start Header Section -->
   <?php include './partials/header1.php'?>
    <!-- End Header Section -->

    <!-- Start Page Heading -->
    <?php 
      $img='assets/img/page_heading_1.jpg';
      $title = 'Contact';
    ?>
    <?php include './partials/hero.php'?>
    <!-- End Page Heading -->

    <!-- Start Contact -->
    <section>
      <div class="cs_height_120 cs_height_lg_80"></div>
      <div class="container">
        <div class="row cs_gap_y_50">
          <div class="col-lg-6">
            <div class="cs_contact_desc">
              <h3 class="cs_fs_24 cs_mb_33">Contact Information</h3>
              <div class="cs_contact_info_grid">
                <div class="cs_iconbox cs_style_5">
                  <div class="cs_iconbox_icon cs_center cs_accent_bg_light cs_heading_color">
                    <i class="fa-solid fa-phone-volume"></i></div>
                    <div class="cs_iconbox_info">
                      <h3 class="cs_fs_18 cs_semibold cs_mb_2">Phone Number :</h3>
                      <a href="tel:+111(564)56825">+111 (564) 568 25</a><br>
                      <a href="tel:+111(564)56826">+111 (564) 568 26</a>
                    </div>
                </div>
                <div class="cs_iconbox cs_style_5">
                  <div class="cs_iconbox_icon cs_center cs_accent_bg_light cs_heading_color">
                    <i class="fa-solid fa-envelope"></i></div>
                    <div class="cs_iconbox_info">
                      <h3 class="cs_fs_18 cs_semibold cs_mb_2">Email Address :</h3>
                      <a href="mailTo:needhelpcripar@gmail.com">needhelpcripar@gmail.com</a><br>
                      <a href="mailTo:criparneedhelp@gmail.com">criparneedhelp@gmail.com</a>
                    </div>
                </div>
                <div class="cs_iconbox cs_style_5">
                  <div class="cs_iconbox_icon cs_center cs_accent_bg_light cs_heading_color">
                    <i class="fa-solid fa-location-dot"></i></div>
                    <div class="cs_iconbox_info">
                      <h3 class="cs_fs_18 cs_semibold cs_mb_2">Our Address :</h3>
                      <p class="mb-0">2118 Thorn ridge Cir. <br> Syracuse Connecticut</p>
                    </div>
                </div>
                <div class="cs_iconbox cs_style_5">
                  <div class="cs_iconbox_icon cs_center cs_accent_bg_light cs_heading_color">
                    <i class="fa-solid fa-clock"></i></div>
                    <div class="cs_iconbox_info">
                      <h3 class="cs_fs_18 cs_semibold cs_mb_2">Working Time :</h3>
                      <p class="mb-0">Sunday to Friday :</p>
                      <p class="mb-0">10 Am - 05PM</p>
                    </div>
                </div>
              </div>
            </div>
            <div class="cs_height_44 cs_height_lg_30"></div>
            <div class="cs_social_desc">
              <h3 class="cs_fs_24 cs_semibold cs_mb_10">Follow The Social Media:</h3>
              <p class="cs_mb_22">Algae can quickly take over a Car Repair if not addressed promptly. Learn effective.</p>
              <div class="cs_social_btns cs_style_1">
                <a href="#" class="cs_center cs_accent_bg_light"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="#" class="cs_center cs_accent_bg_light"><i class="fa-brands fa-x-twitter"></i></a>
                <a href="#" class="cs_center cs_accent_bg_light"><i class="fa-brands fa-whatsapp"></i></a>
                <a href="#" class="cs_center cs_accent_bg_light"><i class="fa-brands fa-instagram"></i></a>
                <a href="#" class="cs_center cs_accent_bg_light"><i class="fa-brands fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="cs_form_wrapper cs_style_1 cs_accent_bg_light">
              <h3 class="cs_fs_24 cs_mb_33">Send Message</h3>
              <form class="row cs_row_gap_30 cs_gap_y_30">
                <div class="col-sm-6">
                  <input type="text" name="name" placeholder="Your Name" class="cs_form_field cs_white_bg">
                </div>
                <div class="col-sm-6">
                  <input type="email" name="email" placeholder="Email Address" class="cs_form_field cs_white_bg">
                </div>
                <div class="col-sm-12">
                  <input type="text" name="subject" placeholder="Subject" class="cs_form_field cs_white_bg">
                </div>
                <div class="col-sm-12">
                  <textarea name="massage" rows="5" placeholder="Massage" class="cs_form_field cs_white_bg"></textarea>
                </div>
                <div class="col-sm-12">
                  <button type="submit" class="cs_btn cs_style_1 cs_radius_5">
                    <span>Send Message</span>
                    <span><i class="fa-solid fa-arrow-right-long"></i></span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="cs_height_120 cs_height_lg_80"></div>
    </section>
    <!-- End Contact -->
    <!-- Start Navigation Map -->
    <div class="cs_navigation_map wow fadeInUp">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2528001631!2d-74.14448723354508!3d40.69763123329699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1729318880502!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <!-- End Navigation Map -->
    
    <!-- Start Footer -->
    <?php include './partials/footer1.php'?>

    <!-- Script -->
    <?php include './partials/script.php'?>

  </body>
</html>