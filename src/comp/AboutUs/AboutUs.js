import React from "react";
import img from "../AboutUs/karthick.jpg";
import "./AboutUs.css";
import Font, { Text } from "react-font";
function AboutUs() {
  return (
    <div>
      <div class="jumbotron jumbotron-fluid ">
        <div class="container-fluid text-center pb-3">
          <Font family="Cinzel">
            <h2 class="display-3 ">About Us</h2>
          </Font>
          <Font family="Josefin Slab">
            <p class="lead">Our's First Love..Capturing Moments!!!</p>
          </Font>
        </div>
      </div>
      <div className="container-fluid  text-center owner">
        <div className="row">
          <div className="col-sm-6 col-md-6">
            <div className="about-owner">
              <img
                src={img}
                className="img-fluid img-responsive imgs"
                width="300px"
                alt="Responsive image"
              />
            </div>
          </div>
          <div className="col-sm-6 col-md-6 ">
            <div className="about-info">
              <Font family="Cinzel">
                <h1 className="about-info-1 "> STUDIO SCREEN– Nellai</h1>
              </Font>
              <hr className="line" width="50%" />
              <Font family="Josefin Slab">
                <p className="about-info-2">
                  Thank you for checking us out!! Studio Screen, Porur is a
                  Chennai based wedding photography and cinematography team who
                  are passionate about creating wedding moments that will
                  inspire you. We love capturing different wedding traditions
                  and creating magical memories of your BIG DAY. We have been
                  offering our service for the past 12 years and have covered
                  over Five hundreds of weddings across all South Indian
                  traditions.
                </p>
              </Font>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container  text-center owner">
          <div className="row">
            <div className="col-sm-6 col-md-6 ml-30px">
              <div className="about-info">
                <Font family="Cinzel">
                  <h1 className="about-info-1 "> STUDIO SCREEN– Nellai</h1>
                </Font>
                <hr className="line" width="50%" />
                <Font family="Josefin Slab">
                  <p className="about-info-2">
                    Thank you for checking us out!! Studio Screen, Porur is a
                    Chennai based wedding photography and cinematography team
                    who are passionate about creating wedding moments that will
                    inspire you. We love capturing different wedding traditions
                    and creating magical memories of your BIG DAY. We have been
                    offering our service for the past 12 years and have covered
                    over Five hundreds of weddings across all South Indian
                    traditions.
                  </p>
                </Font>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div className="about-owner">
                <img
                  src={img}
                  className="img-fluid img-responsive imgs"
                  width="300px"
                  alt="Responsive image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
