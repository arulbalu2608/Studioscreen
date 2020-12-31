import React from "react";
import img from "../AboutUs/karthick.jpg";
import { Jumbotron, Container } from "reactstrap";
import "./AboutUs.css";
import Font from "react-font";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import logo from "../../Images/logo.jpg";
function AboutUs() {
  return (
    <div>
      <div>
        <Jumbotron fluid id="jumboabout">
          <Container fluid>
            <br />
            <br />
            <br />
            <br />
          </Container>
        </Jumbotron>
      </div>
      <div className="container-fluid  text-center owner">
        <div className="row">
          <div className="col-sm-6 col-md-6">
            <div className="about-owner">
              <Flip>
                <img
                  src={img}
                  className="img-fluid img-responsive imgs"
                  width="65%"
                  alt="Responsive image"
                />
              </Flip>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 ">
            <div className="about-info">
              <Fade right>
                <img
                  src={logo}
                  width="50%"
                  class="img-thumbnail"
                  alt="..."></img>
                <hr className="line" width="50%" />

                <p className="about-info-2">
                  Thank you for checking us out!!Studio Screen is a wedding
                  photography and cinematography team who are passionate about
                  creating wedding moments that will inspire you. We love
                  capturing different wedding traditions and creating magical
                  memories .We believe in offering high-end images and
                  videography service! We ensure that you get a personal touch
                  and providing you the best photographs and videography service
                  that can be ever made on your “big day.”
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container-fluid  text-center owner">
          <div className="row">
            <div className="col-sm-6 col-md-6 ml-30px">
              <div className="about-info">
                <Fade left>
                  <Font family="Niconne">
                    <h1 className="display-3"> Ms karthick</h1>
                  </Font>
                  <hr className="line" width="50%" />

                  <p className="about-info-2">
                    I have been always found myself fond of photography right
                    from my childhood. This enormous amount of passion in
                    photography in me has lead me to take up photography as not
                    only passion but also my career. Despite after all those
                    mocking as, “you could have the high chances of being paid
                    low”, “what could you be leading by taking up this as a
                    career?” from my families and closed circle of people, I
                    really found myself into the passion of photography and
                    nevertheless my involvement in it has decreased since the
                    start. Not just with the passion, anything could be
                    achieved. I got myself trained with many of the well-known
                    photographers who has got their experiences well and good in
                    this field. And so, now I have got myself into the
                    profession with the passion and the trained skills.
                    Accompanied with these skills as a professional, I have
                    really got the goodwill of numerous customers. With the
                    blessings and the unimaginable support of my loveable
                    family, relatives, friends and customers, I hope for more
                    and more improvement in my career. I strongly believe in the
                    fact, “Quality is never an act, but always a habit” and so
                    all of my customers can expect it being reflected in all my
                    works
                  </p>
                </Fade>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div className="about-owner">
                <Flip>
                  <img
                    src={img}
                    className="img-fluid img-responsive imgs"
                    width="100%"
                    height="100%"
                    alt="Responsive image"
                  />
                </Flip>
              </div>
            </div>
          </div>
          <Font family="Niconne">
            <center>
              <h1 className="display-3">
                Because every picture has story to tell
              </h1>
            </center>
          </Font>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
