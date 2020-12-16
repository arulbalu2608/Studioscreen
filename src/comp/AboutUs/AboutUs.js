import React from "react";
import img from "../AboutUs/karthick.jpg";
import "./AboutUs.css";
import Font, { Text } from "react-font";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
function AboutUs() {
  return (
    <div>
      <div class="jumbotron jumbotron-fluid ">
        <div class="container-fluid text-center pb-3">
          <Font family="Niconne">
            <h2 class="display-3 ">About Us</h2>
          </Font>

          <p class="lead">Our's First Love..Capturing Moments!!!</p>
        </div>
      </div>
      <div className="container-fluid  text-center owner">
        <div className="row">
          <div className="col-sm-6 col-md-6">
            <div className="about-owner">
              <Flip>
                <img
                  src={img}
                  className="img-fluid img-responsive imgs"
                  width="300px"
                  alt="Responsive image"
                />
              </Flip>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 ">
            <div className="about-info">
              <Fade right>
                <Font family="Niconne">
                  <h1 className="about-info-1 "> Studio Screen</h1>
                </Font>
                <hr className="line" width="50%" />

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
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container  text-center owner">
          <div className="row">
            <div className="col-sm-6 col-md-6 ml-30px">
              <div className="about-info">
                <Fade left>
                  <Font family="Niconne">
                    <h1 className="about-info-1 "> Studio Screen</h1>
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
                  <p>
                    <strong>Because every picture has story to tell</strong>
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
                    width="300px"
                    alt="Responsive image"
                  />
                </Flip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
