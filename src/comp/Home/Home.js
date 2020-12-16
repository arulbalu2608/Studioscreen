import React from "react";
import { UncontrolledCarousel, Row, Col } from "reactstrap";
import Font, { Text } from "react-font";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import "./Home.css";
import car1 from "../../Images/Album/06.jpg";
import car2 from "../../Images/pre wedding/10.jpg";
import car3 from "../../Images/Album/07.jpg";
import img1 from "../Home/img1.JPG";
import img2 from "../Home/img2.JPG";
import img3 from "../Home/img3.JPG";
import img4 from "../Home/img4.JPG";
import img5 from "../Home/img5.JPG";
import img6 from "../Home/img6.JPG";

function Home() {
  const items = [
    {
      src: car1,
      key: "1",
    },
    {
      src: car2,
      key: "2",
    },
    {
      src: car3,
      key: "3",
    },
  ];
  return (
    <div>
      <UncontrolledCarousel items={items} />;
      <Fade>
        <center>
          <Font family="Niconne">
            <h1 className="display-4"> welcome to Studio Screen</h1>
          </Font>
          <p className="lead">
            We believe in offering high-end images and videography service! We
            ensure that you get a personal touch and providing you the best
            photographs and videography service that can be ever made on your
            “big day.”
          </p>
        </center>
        <div>
          <center>
            <Font family="Niconne">
              <h3 className="display-4">Some Beautiful Moments</h3>
            </Font>
          </center>
          <br />
          <Row>
            <Col className=" col-12 col-sm-4 imgs">
              <img src={img1} alt="img1" class="img-thumbnail"></img>
            </Col>
            <Col className="col-12 col-sm-4 imgs">
              <img src={img2} alt="img2" class="img-thumbnail"></img>
            </Col>
            <Col className="col-12 col-sm-4 imgs">
              <img src={img3} alt="img3" class="img-thumbnail"></img>
            </Col>
          </Row>
          <Row>
            <Col className=" col-12 col-sm-4 imgs">
              <img src={img4} alt="img4" class="img-thumbnail"></img>
            </Col>
            <Col className="col-12 col-sm-4 imgs">
              <img src={img5} alt="img5" class="img-thumbnail"></img>
            </Col>
            <Col className="col-12 col-sm-4 imgs">
              <img src={img6} alt="img6" class="img-thumbnail"></img>
            </Col>
          </Row>
        </div>
        <br />
        <br />
        <hr />
        <div className="container">
          <Row>
            <Col className=" col-12 col-sm-6">
              <div className="d-flex align-items-center mt-5">
                <img
                  src={img4}
                  alt="img4"
                  class=" figure-img img-fluid rounded "></img>
              </div>
            </Col>
            <Col className="col-12 col-sm-6 mr-auto">
              <Fade right cascade>
                <Font family="Niconne">
                  <h3 className="display-4 d-flex justify-content-center">
                    Our Packages
                  </h3>
                </Font>
                <div>
                  <blockquote className="blockquote">
                    <h3 className="mb-0 display-5">Outdoor Shoot</h3>
                    <footer className="blockquote-footer">
                      <strong> 5 Hrs with 2 -3 Costume Change</strong>
                    </footer>
                  </blockquote>
                  <blockquote className="blockquote">
                    <h3 className="mb-0 display-5">BirthDay Party</h3>
                    <footer className="blockquote-footer">
                      <strong>
                        {" "}
                        5 Hrs with 1 Photographer & 1 Videographer
                      </strong>
                    </footer>
                  </blockquote>
                  <blockquote className="blockquote">
                    <h3 className="mb-0 display-5">Small Functions</h3>
                    <footer className="blockquote-footer">
                      <strong>5 Hrs with 1 Photographer</strong>
                    </footer>
                  </blockquote>
                  <blockquote className="blockquote">
                    <h3 className="mb-0 display-5">
                      Weddings / Corporate Events
                    </h3>
                    <footer className="blockquote-footer">
                      <strong>
                        8 to 12 Hrs package with team size customized to suit
                        your schedule & crowd
                      </strong>
                    </footer>
                  </blockquote>
                </div>
              </Fade>
            </Col>
          </Row>
        </div>
        <br />
        <br />
        <hr />
      </Fade>
    </div>
  );
}

export default Home;
