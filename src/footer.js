import React from "react";

function Foot() {
  return (
    <>
      <section id="footer">
        <div className="container">
          <div className="row justify-content-between">
            {/* <!-- single-column --> */}
            <div className="col-lg-3 col-md-6">
              <h3 className="footer-title">About Us</h3>
              <p class="footer-links text-justify">
                Bytel India Private Limited is an ISO certified company. Bytel
                India Private Limited offers secured fiber and wireless internet
                services to home and enterprise customers in all areas of
                Lucknow. We have launched high speed internet on Fiber in all
                major localities in Lucknow.
              </p>
            </div>
            {/* <!-- /single-column --> */}

            {/* <!-- single-column --> */}

            <div className="col-lg-3 col-md-6">
              <h3 className="footer-title">Important Links</h3>
              <div className="d-flex flex-column justify-content-start">
              <a class="footer-links" href=""><i class="fas fa-chevron-circle-right footer-links__icon"></i>Home</a>

                <a class="footer-links" href="./index.php#plans">
                  <i class="fas fa-chevron-circle-right footer-links__icon"></i>
                  Plans
                </a>
                <a class="footer-links" href="./about.php">
                  <i class="fas fa-chevron-circle-right footer-links__icon"></i>
                  About Us
                </a>
                <a class="footer-links" href="./index.php#contact">
                  <i class="fas fa-chevron-circle-right footer-links__icon"></i>
                  Contact Us
                </a>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <h3 class="footer-title">Other Links</h3>

              <div class="d-flex flex-column justify-content-start">
                <a class="footer-links" href="./privacy-policy.php">
                  <i class="fas fa-chevron-circle-right footer-links__icon"></i>
                  Privacy Policy
                </a>

                <a class="footer-links" href="./terms.php">
                  <i class="fas fa-chevron-circle-right footer-links__icon"></i>
                  Terms &amp; Conditions
                </a>

                <a class="footer-links" href="./refund-policy.php">
                  <i class="fas fa-chevron-circle-right footer-links__icon"></i>
                  Refund Policy
                </a>

                <div class="d-flex align-items-center">
                  <a
                    class="footer-icon"
                    href="https://www.facebook.com/Bytel-Broadband-101720235814441/"
                  >
                    <i class="fab fa-facebook"></i>
                  </a>

                  <a class="footer-icon" href="https://twitter.com/Bytelindia">
                    <i class="fab fa-twitter"></i>
                  </a>

                  <a
                    class="footer-icon"
                    href="https://instagram.com/bytelbroadband"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>

                  <a class="footer-icon" href="#">
                    <i class="fab fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <h3 class="text-white footer-title">Get In Touch</h3>

              <p class="mb-3">
                <a href="callto:+919415694156" class="footer-links">
                  <i class="fa fa-phone-alt footer-links__icon"></i> 94156 94156
                  ,
                </a>

                <a href="callto:+918808100000" class="footer-links">
                  88081 00000
                </a>
              </p>

              <p class="mb-3">
                <a href="mailto:admin@bytel.in" class="footer-links">
                  <i class="fa fa-envelope-open footer-links__icon"></i>
                  admin@bytel.in
                </a>
              </p>

              <p class="footer-links">
                <i class="fas fa-map-marker-alt footer-links__icon"></i>
                62, Gaura Bagh Kursi Road, Lucknow 226026
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Foot;
