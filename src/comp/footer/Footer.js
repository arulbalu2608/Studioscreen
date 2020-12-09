import React from "react";
import Font, { Text } from "react-font";
import "./Footer.css";
function Footer() {
  return (
    <div className="page-footer">
      <div className="container-fluid page-footer   p-5 footer-web">
        <div className="row ">
          <div className="col-sm-4 col-md-4  m-5px  segment-one ">
            <div className="p1 p-3 ">
              <Font family="Cinzel">
                <h1 className="heading">STUDIO SCREEN</h1>
              </Font>
              <Font family="Josefin Slab">
                <p className="footer-para">
                  We believe in offering high-end images and videography
                  service! We ensure that you get a personal touch and providing
                  you the best photographs and videography service that can be
                  ever made on your “big day.”
                </p>
              </Font>
            </div>
          </div>

          <div className="col-sm-4  col-md-4 segment-two">
            <div className="p1 p-3 ">
              <Font family="Cinzel">
                <h1 className="heading">ADDRESS</h1>
              </Font>
              <Font family="Josefin Slab">
                <p className="mt-3 footer-para">
                  No. 4/1, Mandaveli Street, Karambakkam,
                  <br />
                  Porur, Chennai-600-116
                  <br />
                  Tamil Nadu
                  <br />
                  <i className="fa fa-envelope" aria-hidden="true"></i> Email :{" "}
                  <a className="ancher" href="#">
                    studioscreen@gmail.com
                  </a>
                </p>
              </Font>
            </div>
          </div>
          <div className="col-sm-4  col-md-4 segment-three">
            <div className="p1 p-3 ">
              <Font family="Cinzel">
                <h1 className="heading">OUR LOCATION</h1>
              </Font>
              <iframe
                className="map mt-3"
                src="https://maps.google.com/maps?q=sa%20engineering%20college&t=&z=15&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"></iframe>
            </div>
          </div>
        </div>
        <div className="social col-sm-12 ">
          <a className="social-icon " href="#">
            <i class="fab fa-facebook-square"></i>
          </a>
          <a className="social-icon " href="#">
            <i class="fab fa-whatsapp-square"></i>
          </a>
          <a className="social-icon " href="#">
            <i class="fab fa-instagram-square"></i>
          </a>
        </div>
        <div className="col-sm-12 pt-3 mx-auto text-center ">
          <p className="copy ">
            &copy;2020
            <span> All Rights reserved |</span>
            <a className="ancher" href="#">
              {" "}
              Studio Screen
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
