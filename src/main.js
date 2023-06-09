import React from "react";

function Main() {
  return (
    <>
      <section id="hero" style={{ backgroundColor: "#fdfdfd", marginTop: 5 }}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6">
              <h1>
                Join Bytel now and get unlimited{" "}
                <span style={{ color: "red" }}>
                  high-speed internet with OTT{" "}
                </span>{" "}
                & unlimited calls
              </h1>
              <div className="d-flex gap-2 flex-wrap">
                <a className="btn btn-hero" href="#">
                  APPLY NOW
                </a>
                <a className="btn btn-hero-up" href="#">
                  BROADBAND PLANS
                </a>
                <a className="btn btn-hero-down" href="#">
                  EXPLORE OTT PLANS
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src="https://www.bytel.in/assets/img/hero-bg.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section id="solutions">
        <div className="container">
          <p className="solution-title">Exclusive</p>
          <h1 className="solution-subtitle">Find Perfect Network Solutions</h1>

          <div className="row justify-content-center align-items-center">
            {/* ---------first row---- */}
            <div className="col-lg-4 col-md-6">
              <div className="card network-card">
                <div className="card-body">
                  <div className="network-card_text">
                    <i class="fa-solid fa-house-signal network-logo"></i>
                    <h4 className="">Home BroadBAnd with OTT</h4>
                    <p className="limit-lines">
                      Bytel India Broadband Fiber offers you with Fiber optic
                      internet connection transforming your daily broadband
                      connection experience with high-speed internet.
                      <span className="read-more">
                        Bytel allows you to enjoy the High Speed broadband
                        connection in Lucknow And UP with the speed of up to 300
                        Mbps, which means once you connect broadband, you will
                        get faster downloads and less buffering.{" "}
                      </span>
                    </p>
                    <span className="read-more-btn">Read More</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card network-card">
                <div className="card-body">
                  <div className="network-card_text">
                    <i class="fa-solid fa-network-wired network-logo"></i>

                    <h4 className="">Enterprise or Leased Line</h4>
                    <p className="limit-lines">
                      Bytel India Broadband Fiber offers you with Fiber optic
                      internet connection transforming your daily broadband
                      connection experience with high-speed internet. Bytel
                      allows you to enjoy the High Speed broadband connection in
                      Lucknow And UP with the speed of up to 300 Mbps, which
                      means once you connect broadband, you will get faster
                      downloads and less buffering.{" "}
                    </p>
                    <span className="read-more-btn">Read More</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card network-card">
                <div className="card-body">
                  <div className="network-card_text">
                    <i class="fa-solid fa-network-wired network-logo"></i>

                    <h4 className="">Salient Features</h4>
                    <p className="limit-lines">
                      Bytel India Broadband Fiber offers you with Fiber optic
                      internet connection transforming your daily broadband
                      connection experience with high-speed internet. Bytel
                      allows you to enjoy the High Speed broadband connection in
                      Lucknow And UP with the speed of up to 300 Mbps, which
                      means once you connect broadband, you will get faster
                      downloads and less buffering.{" "}
                    </p>
                    <span className="read-more-btn">Read More</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ------ Plans----------- */}
      <section id="plans">
        <div id="container">
          <p className="solution-title">OUR PLANS</p>
          <h2 className="solution-subtitle">
            Buy New Broadband Connection for Home + OTT + TV
          </h2>
          <div className="row gy-4">
            {/* ------------Row-------- */}
            {/* -----------1-coloumn-------- */}
            <div className="col-lg-3 col-md-6">
              <div className="card plan-card shadow">
                <img
                  className="card-img-top"
                  src="https://www.bytel.in/assets/img/ott-icons/tv-ent.jpg"
                  alt=""
                />
                <div className="card-body">
                  <div className="plan-card_text">
                    <h4 className="plan-card_title">Basic</h4>
                    <div className="plan-card_flex">
                      <p className="">Unlimited Internet &amp; Calls + OTT</p>
                      <p class="text-end">Upto 60Mbps Speed</p>
                    </div>
                    <div className="swiper cardSwiper">
                      <div className="swiper-wrapper">
                        <div className="swiper-slider">
                          <div className="swiper-icon_flex">
                            <img
                              src="https://www.bytel.in/assets/img/ott-icons/shemaroo.png"
                              className="swiper-img-icon"
                              alt=""
                            />
                            <p>Shemaroo</p>
                          </div>
                        </div>

                        <div className="swiper-slider">
                          <div className="swiper-icon_flex">
                            <img
                              src="https://www.bytel.in/assets/img/ott-icons/alt-balaji.jpg"
                              className="swiper-img-icon"
                              alt=""
                            />
                            <p>Alt Balaji</p>
                          </div>
                        </div>

                        <div className="swiper-slider">
                          <div className="swiper-icon_flex">
                            <img
                              src="https://www.bytel.in/assets/img/ott-icons/epic-on.png"
                              className="swiper-img-icon"
                              alt=""
                            />
                            <p>Epic On</p>
                          </div>
                        </div>

                        <div className="swiper-slider">
                          <div className="swiper-icon_flex">
                            <img
                              src="https://www.bytel.in/assets/img/ott-icons/hungama-play.png"
                              className="swiper-img-icon"
                              alt=""
                            />
                            <p>Hungama</p>
                          </div>
                        </div>

                        <div className="swiper-slider">
                          <div className="swiper-icon_flex">
                            <img
                              src="https://www.bytel.in/assets/img/ott-icons/playbox-tv.jpg"
                              className="swiper-img-icon"
                              alt=""
                            />
                            <p>Playbox Tv</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="plan-card_flex mb-0">
                  <p>
                    Monthly Rental<span className="plan-card_price">₹499</span>
                  </p>
                  <a href="#book-connection" className="btn btn-default">
                    BUY NOW
                  </a>
                </div>
              </div>
            </div>

            {/* ------------2 column-------- */}
            <div className="col-lg-3 col-md-6">
              <div className="card plan-card shadow">
                <img
                  className="card-img-top"
                  src="https://www.bytel.in/assets/img/ott-icons/tv-ent1.jpg"
                  alt=""
                />
                <div className="card-body">
                  <div className="plan-card_text">
                    <h4 className="plan-card_title">Basic</h4>
                    <div className="plan-card_flex">
                      <p className="">Unlimited Internet &amp; Calls + OTT</p>
                      <p class="text-end">Upto 60Mbps Speed</p>
                    </div>
                    <div className="swiper cardSwiper">
                      <div className="swiper-wrapper">
                        <div className="swiper-slider">
                          <div className="swiper-icon_flex">
                            <img
                              src="https://www.bytel.in/assets/img/ott-icons/shemaroo.png"
                              className="swiper-img-icon"
                              alt=""
                            />
                            <p>Shemaroo</p>
                          </div>
                        </div>

                        <div className="swiper-slider">
                          <div className="swiper-icon_flex">
                            <img
                              src="https://www.bytel.in/assets/img/ott-icons/alt-balaji.jpg"
                              className="swiper-img-icon"
                              alt=""
                            />
                            <p>Alt Balaji</p>
                          </div>
                        </div>

                        <div className="swiper-slider">
                          <div className="swiper-icon_flex">
                            <img
                              src="https://www.bytel.in/assets/img/ott-icons/epic-on.png"
                              className="swiper-img-icon"
                              alt=""
                            />
                            <p>Epic On</p>
                          </div>
                        </div>

                        <div className="swiper-slider">
                          <div className="swiper-icon_flex">
                            <img
                              src="https://www.bytel.in/assets/img/ott-icons/hungama-play.png"
                              className="swiper-img-icon"
                              alt=""
                            />
                            <p>Hungama</p>
                          </div>
                        </div>

                        <div className="swiper-slider">
                          <div className="swiper-icon_flex">
                            <img
                              src="https://www.bytel.in/assets/img/ott-icons/playbox-tv.jpg"
                              className="swiper-img-icon"
                              alt=""
                            />
                            <p>Playbox Tv</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="plan-card_flex mb-0">
                  <p>
                    Monthly Rental<span className="plan-card_price">₹499</span>
                  </p>
                  <a href="#book-connection" className="btn btn-default">
                    BUY NOW
                  </a>
                </div>
              </div>
            </div>

            {/* ------------3 column-------- */}
            <div className="col-lg-3 col-md-6">
              <div className="card plan-card shadow">
                <img
                  className="card-img-top"
                  src="https://www.bytel.in/assets/img/ott-icons/mobile-ent.jpg"
                  alt=""
                />
                <div className="card-body">
                  <div className="plan-card_text">
                    <h4 className="plan-card_title">Basic</h4>
                    <div className="plan-card_flex">
                      <p className="">Unlimited Internet &amp; Calls + OTT</p>
                      <p class="text-end">Upto 60Mbps Speed</p>
                    </div>
                    <div className="swiper cardSwiper">
                      <div className="swiper-wrapper">
                        <div className="swiper-slider">
                          <div className="swiper-icon_flex">
                            <img
                              src="https://www.bytel.in/assets/img/ott-icons/shemaroo.png"
                              className="swiper-img-icon"
                              alt=""
                            />
                            <p>Shemaroo</p>
                          </div>
                        </div>

                        <div className="swiper-slider">
                          <div className="swiper-icon_flex">
                            <img
                              src="https://www.bytel.in/assets/img/ott-icons/alt-balaji.jpg"
                              className="swiper-img-icon"
                              alt=""
                            />
                            <p>Alt Balaji</p>
                          </div>
                        </div>

                        <div className="swiper-slider">
                          <div className="swiper-icon_flex">
                            <img
                              src="https://www.bytel.in/assets/img/ott-icons/epic-on.png"
                              className="swiper-img-icon"
                              alt=""
                            />
                            <p>Epic On</p>
                          </div>
                        </div>

                        <div className="swiper-slider">
                          <div className="swiper-icon_flex">
                            <img
                              src="https://www.bytel.in/assets/img/ott-icons/hungama-play.png"
                              className="swiper-img-icon"
                              alt=""
                            />
                            <p>Hungama</p>
                          </div>
                        </div>

                        <div className="swiper-slider">
                          <div className="swiper-icon_flex">
                            <img
                              src="https://www.bytel.in/assets/img/ott-icons/playbox-tv.jpg"
                              className="swiper-img-icon"
                              alt=""
                            />
                            <p>Playbox Tv</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="plan-card_flex mb-0">
                  <p>
                    Monthly Rental<span className="plan-card_price">₹499</span>
                  </p>
                  <a href="#book-connection" className="btn btn-default">
                    BUY NOW
                  </a>
                </div>
              </div>
            </div>

            {/* ------------4 column-------- */}

            <div className="col-lg-3 col-md-6">
              <div className="card plan-card shadow">
                <img
                  className="card-img-top"
                  src="https://www.bytel.in/assets/img/ott-icons/tv-ent2.jpg"
                  alt=""
                />
                <div className="card-body">
                  <div className="plan-card_text">
                    <h4 className="plan-card_title">Basic</h4>
                    <div className="plan-card_flex">
                      <p className="">Unlimited Internet &amp; Calls + OTT</p>
                      <p class="text-end">Upto 60Mbps Speed</p>
                    </div>
                    <div className="swiper cardSwiper">
                      <div className="swiper-wrapper">
                        <div className="swiper-slider">
                          <div className="swiper-icon_flex">
                            <img
                              src="https://www.bytel.in/assets/img/ott-icons/shemaroo.png"
                              className="swiper-img-icon"
                              alt=""
                            />
                            <p>Shemaroo</p>
                          </div>
                        </div>

                        <div className="swiper-slider">
                          <div className="swiper-icon_flex">
                            <img
                              src="https://www.bytel.in/assets/img/ott-icons/alt-balaji.jpg"
                              className="swiper-img-icon"
                              alt=""
                            />
                            <p>Alt Balaji</p>
                          </div>
                        </div>

                        <div className="swiper-slider">
                          <div className="swiper-icon_flex">
                            <img
                              src="https://www.bytel.in/assets/img/ott-icons/epic-on.png"
                              className="swiper-img-icon"
                              alt=""
                            />
                            <p>Epic On</p>
                          </div>
                        </div>

                        <div className="swiper-slider">
                          <div className="swiper-icon_flex">
                            <img
                              src="https://www.bytel.in/assets/img/ott-icons/hungama-play.png"
                              className="swiper-img-icon"
                              alt=""
                            />
                            <p>Hungama</p>
                          </div>
                        </div>

                        <div className="swiper-slider">
                          <div className="swiper-icon_flex">
                            <img
                              src="https://www.bytel.in/assets/img/ott-icons/playbox-tv.jpg"
                              className="swiper-img-icon"
                              alt=""
                            />
                            <p>Playbox Tv</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="plan-card_flex mb-0">
                  <p>
                    Monthly Rental<span className="plan-card_price">₹499</span>
                  </p>
                  <a href="#book-connection" className="btn btn-default">
                    BUY NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--======== START BOOK OTT SECTION ========--> */}

      <section
        id="book-ott"
        style={{ padding: "3rem", backgroundColor: "hwb(0 96% 2% / 0.459)" }}
      >
        <div className="container">
          <h6 className="focused-dec"> Looking for more OTT.....</h6>
          <h1 className="focused-title">Add More OTT</h1>
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-12">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr style={{ backgroundColor: "#FF0000" }}>
                      <th style={{ backgroundColor: "#FF0000",color:"white" }}>OTT Apps</th>
                      <th style={{ backgroundColor: "#FF0000",color:"white"  }}>Live TV Channels</th>
                      <th style={{ backgroundColor: "#FF0000",color:"white"  }}>Playbox TV</th>
                      <th style={{ backgroundColor: "#FF0000" ,color:"white" }}>Validity</th>
                      <th style={{ backgroundColor: "#FF0000",color:"white"  }}>Price</th>
                    </tr>
                  </thead>

                  <tbody>
                    {/* <!-- Start of Plan 99 --> */}
                    <tr>
                      <td>
                        <div className="d-flex gap-1">
                          <img
                            className="ott-table-icon"
                            src="https://www.bytel.in/assets/img/ott-icons/sonyliv.png"
                            alt="sony-liv"
                            title="sonyliv"
                          />
                          <img
                            className="ott-table-icon"
                            src="https://www.bytel.in/assets/img/ott-icons/zee5.png"
                            alt="zee5"
                            title="zee5"
                          />
                          <img
                            className="ott-table-icon"
                            src="https://www.bytel.in/assets/img/ott-icons/hungama-play.png"
                            alt="hungama-play"
                            title="hungama-play"
                          />
                          <img
                            className="ott-table-icon"
                            src="https://www.bytel.in/assets/img/ott-icons/shemaroo.png"
                            alt="shemaroo"
                            title="shemaroo"
                          />
                          <img
                            className="ott-table-icon"
                            src="https://www.bytel.in/assets/img/ott-icons/epic-on.png"
                            alt="epic-on"
                            title="epic-on"
                          />
                          <img
                            className="ott-table-icon"
                            src="https://www.bytel.in/assets/img/ott-icons/alt-balaji.jpg"
                            alt="alt-balaji"
                            title="alt-balaji"
                          />
                          <img
                            className="ott-table-icon"
                            src="https://www.bytel.in/assets/img/ott-icons/playbox-tv.jpg"
                            alt="playbox-tv"
                            title="playbox-tv"
                          />
                        </div>
                      </td>
                      <td>Yes</td>
                      <td>Yes</td>
                      <td>30 days</td>
                      <td>₹99/-</td>
                    </tr>
                    {/* <!-- End of Plan 99 --> */}

                    {/* <!-- Start of Plan 199 --> */}

                    <tr>
                      <td>
                        <div className="d-flex gap-1">
                          <img
                            className="ott-table-icon"
                            src="https://www.bytel.in/assets/img/ott-icons/sonyliv.png"
                            alt="sony-liv"
                            title="sonyliv"
                          />
                          <img
                            className="ott-table-icon"
                            src="https://www.bytel.in/assets/img/ott-icons/zee5.png"
                            alt="zee5"
                            title="zee5"
                          />
                          <img
                            className="ott-table-icon"
                            src="https://www.bytel.in/assets/img/ott-icons/hungama-play.png"
                            alt="hungama-play"
                            title="hungama-play"
                          />
                          <img
                            className="ott-table-icon"
                            src="https://www.bytel.in/assets/img/ott-icons/hotstar.png"
                            alt="hotstar"
                            title="shotstar"
                          />
                          <img
                            className="ott-table-icon"
                            src="https://www.bytel.in/assets/img/ott-icons/shemaroo.png"
                            alt="shemaroo"
                            title="shemaroo"
                          />
                          <img
                            className="ott-table-icon"
                            src="https://www.bytel.in/assets/img/ott-icons/epic-on.png"
                            alt="epic-on"
                            title="epic-on"
                          />
                          <img
                            className="ott-table-icon"
                            src="https://www.bytel.in/assets/img/ott-icons/alt-balaji.jpg"
                            alt="alt-balaji"
                            title="alt-balaji"
                          />
                          <img
                            className="ott-table-icon"
                            src="https://www.bytel.in/assets/img/ott-icons/playbox-tv.jpg"
                            alt="playbox-tv"
                            title="playbox-tv"
                          />
                        </div>
                      </td>
                      <td>Yes</td>
                      <td>Yes</td>
                      <td>30 days</td>
                      <td>₹199/-</td>
                    </tr>
                    {/* <!-- End of Plan 199 --> */}

                    {/* <!-- Start of Plan 299 --> */}

                    <tr>
                      <td>
                        <div className="d-flex gap-1">
                          <img
                            className="ott-table-icon"
                            src="https://www.bytel.in/assets/img/ott-icons/sonyliv.png"
                            alt="sony-liv"
                            title="sonyliv"
                          />
                          <img
                            className="ott-table-icon"
                            src="https://www.bytel.in/assets/img/ott-icons/zee5.png"
                            alt="zee5"
                            title="zee5"
                          />
                          <img
                            className="ott-table-icon"
                            src="https://www.bytel.in/assets/img/ott-icons/amazon-prime.png"
                            alt="prime-video"
                            title="prime-video"
                          />
                          <img
                            className="ott-table-icon"
                            src="https://www.bytel.in/assets/img/ott-icons/hungama-play.png"
                            alt="hungama-play"
                            title="hungama-play"
                          />
                          <img
                            className="ott-table-icon"
                            src="https://www.bytel.in/assets/img/ott-icons/hotstar.png"
                            alt="hotstar"
                            title="shotstar"
                          />
                          <img
                            className="ott-table-icon"
                            src="https://www.bytel.in/assets/img/ott-icons/shemaroo.png"
                            alt="shemaroo"
                            title="shemaroo"
                          />
                          <img
                            className="ott-table-icon"
                            src="https://www.bytel.in/assets/img/ott-icons/epic-on.png"
                            alt="epic-on"
                            title="epic-on"
                          />
                          <img
                            className="ott-table-icon"
                            src="https://www.bytel.in/assets/img/ott-icons/alt-balaji.jpg"
                            alt="alt-balaji"
                            title="alt-balaji"
                          />
                          <img
                            className="ott-table-icon"
                            src="https://www.bytel.in/assets/img/ott-icons/playbox-tv.jpg"
                            alt="playbox-tv"
                            title="playbox-tv"
                          />
                        </div>
                      </td>
                      <td>Yes</td>
                      <td>Yes</td>
                      <td>30 days</td>
                      <td>₹299/-</td>
                    </tr>

                    {/* <!-- End of Plan 299 --> */}

                    {/* <!-- Start of Plan 359 --> */}

                    <tr>
                      <td>
                        <div className="d-flex gap-1">
                          <img
                            className="ott-table-icon"
                            src="https://www.bytel.in/assets/img/ott-icons/sonyliv.png"
                            alt="sony-liv"
                            title="sonyliv"
                          />
                          <img
                            className="ott-table-icon"
                            src="https://www.bytel.in/assets/img/ott-icons/zee5.png"
                            alt="zee5"
                            title="zee5"
                          />
                          <img
                            className="ott-table-icon"
                            src="https://www.bytel.in/assets/img/ott-icons/amazon-prime.png"
                            alt="prime-video"
                            title="prime-video"
                          />
                          <img
                            className="ott-table-icon"
                            src="https://www.bytel.in/assets/img/ott-icons/hungama-play.png"
                            alt="hungama-play"
                            title="hungama-play"
                          />
                          <img
                            className="ott-table-icon"
                            src="https://www.bytel.in/assets/img/ott-icons/hotstar.png"
                            alt="hotstar"
                            title="shotstar"
                          />
                          <img
                            className="ott-table-icon"
                            src="https://www.bytel.in/assets/img/ott-icons/shemaroo.png"
                            alt="shemaroo"
                            title="shemaroo"
                          />
                          <img
                            className="ott-table-icon"
                            src="https://www.bytel.in/assets/img/ott-icons/epic-on.png"
                            alt="epic-on"
                            title="epic-on"
                          />
                          <img
                            className="ott-table-icon"
                            src="https://www.bytel.in/assets/img/ott-icons/alt-balaji.jpg"
                            alt="alt-balaji"
                            title="alt-balaji"
                          />
                          <img
                            className="ott-table-icon"
                            src="https://www.bytel.in/assets/img/ott-icons/playbox-tv.jpg"
                            alt="playbox-tv"
                            title="playbox-tv"
                          />
                        </div>
                      </td>
                      <td>Yes</td>
                      <td>Yes</td>
                      <td>30 days</td>
                      <td>₹359/-</td>
                    </tr>

                    {/* <!-- End of Plan 359 --> */}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="fw-bold m-0">
              {" "}
              Contact us to activate any of these plans.
            </p>
          </div>
        </div>
      </section>

      {/* <!--======== END OF OTT SECTION ========-->   */}
      <section id="discover">
        <div className="container">
          <div className="row align-items-center">
            {/* <!-- single-column start--> */}
            <div className="col-md-6 order-2 order-lg-1">
              <h1>
                Experience the <span style={{ color: "red" }}>Power</span> of
                High-Speed Internet
              </h1>

              <h5>
                Take your online experience to the next level with our
                lightning-fast broadband service.
              </h5>

              <p className="text-justify">
                With Bytel's broadband, enjoy faster download and upload speeds,
                seamless streaming of HD content, and smoother online gaming
                experiences. Upgrade your internet, and unlock a world of
                possibilities that will enhance every aspect of your life. Say
                goodbye to buffering, lagging, and frustration - and hello to a
                new level of connectivity and convenience.
              </p>
              <a href="#book-connection" class="btn nav-btn-down d-inline-flex">
                BOOK CONNECTION NOW
              </a>
            </div>

            {/* <!-- single-column end-> */}

            {/* <!-- single-column --start> */}

            <div className="col-md-6 order-1 order-lg-2">
              <img
                src="https://www.bytel.in/assets/img/discover.jpg"
                alt=""
                className="image-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <!--======== END DISCOVER ========--> */}

      {/* <!--======== START BOOK CONNECTION SECTION ========--> */}

      <section id="book-connection">
        <div className="container">
          <h6 className="focused-dec"> BEING EXCITED.....</h6>
          <h1 className="focused-title">Book A Connection</h1>

          <div className="row align-items-center">
            {/* <!-- text-column --> */}
            <div className="col-md-6">
              <div className="book-connection-wrapper">
                <h4 class="book-connection-heading">Send your request</h4>
                <form action="" className="booknow" method="post">
                  <input type="hidden" id="verification" name="verification" />
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control book-connection-input"
                      id="frame"
                      name="name"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      className="form-control book-connection-input"
                      id="phone"
                      name="phone"
                      placeholder="phone"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      className="form-control book-connection-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      name="address"
                      id="location"
                      placeholder="Please Enter Your Address"
                      className="form-control book-connection-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="pincode"
                      id="location"
                      placeholder="Postal/Zip Code"
                      className="form-control book-connection-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <select
                      name="fplan"
                      className="form-select book-connection-input"
                    >
                      <option selected="">Choose Fiber Plans</option>
                      <option value="1">Home</option>
                      <option value="2">Leased Line</option>
                      <option value="3">Business</option>
                    </select>
                  </div>
                  <button className="book-connection-btn" name="bsubmit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
            {/* <!-- img-column --> */}
            <div className="col-md-6">
              <img
                src="https://www.bytel.in/assets/img/book-connection_img.png"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <!--======== END OF CONNECTION SECTION ========--> */}

      {/* <!--======== START OF CONTACT US  ========--> */}
      <section id="contact" className="contact-info">
        <div className="container">
          <h6 className="focused-dec">Connect with us now</h6>
          <h1 class="focused-title">Contact Us</h1>

          <div className="row">
            {/* <!-- single-column --> */}

            <div className="col-md-6">
              <img
                src="https://www.bytel.in/assets/img/contact-img.png"
                alt=""
                className="img-fluid"
              />
            </div>
            {/* <!-- single-column --> */}

            {/* <!-- single-column --> */}

            <div className="col-md-6">
              <div className="response-text text-center small d-none alert alert-success"></div>

              <form action="" className="mainContactForm" method="post">
                <input type="hidden" name="verifiacation" id="verification" />
                <div className="row justify-content-between">
                  {/* <!-- first-name --> */}
                  <div className="col-md-6 contact-colMargin">
                    <div className="input-group">
                      <input
                        type="text"
                        id="firstName"
                        className="form-control"
                        placeholder="First Name"
                        name="fname"
                        required
                      />
                    </div>
                  </div>
                  {/* <!-- last-name --> */}

                  <div className="col-md-6 contact-colMargin">
                    <div className="input-group">
                      <input
                        type="text"
                        id="lastName"
                        className="form-control"
                        placeholder="Last Name"
                        name="lname"
                        required
                      />
                    </div>
                  </div>
                  {/* <!-- phone --> */}

                  <div className="col-12 contact-colMargin">
                    <div className="input-group">
                      <input
                        type="tele"
                        id="phone"
                        className="form-control"
                        placeholder="phone number"
                        name="phone"
                        required
                      />
                    </div>
                  </div>

                  {/* <!-- email --> */}

                  <div className="col-12 contact-colMargin">
                    <div className="input-group">
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        required
                      />
                    </div>
                  </div>

                  {/* <!-- subject --> */}

                  <div className="col-12 contact-colMargin">
                    <div className="input-group">
                      <input
                        type="text"
                        id="location"
                        className="form-control"
                        placeholder="Address"
                        name="address"
                        required
                      />
                    </div>
                  </div>

                  {/* <!-- message --> */}
                  <div className="col-12 contact_colMargin">
                    <div className="input-group">
                      <textarea
                        type="text"
                        rows="3"
                        id="message"
                        class="form-control"
                        placeholder="Message"
                        name="message"
                        required=""
                      ></textarea>
                    </div>
                  </div>

                  {/* <!-- submit --> */}
                  <div className="col-12 button">
                    <button
                      className="btn btn-contact"
                      type="submit"
                      name="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
