import React from "react";
import { Jumbotron, Container, Row, Col } from "reactstrap";
import Font, { Text } from "react-font";
import "./Home.css";
import img1 from "../Home/img1.JPG";
import img2 from "../Home/img2.JPG";
import img3 from "../Home/img3.JPG";
import img4 from "../Home/img4.JPG";
import img5 from "../Home/img5.JPG";
import img6 from "../Home/img6.JPG";

function Home() {
  return (
    <div>
      <Jumbotron className="justify-center" id="jumbostyle">
        <Container>
          <center>
            <Font family="Work sans">
              <h3 className="display-4">STUDIO SCREEN</h3>
            </Font>

            <Font family="Niconne">
              <h1>proudly welcomes you</h1>
              <p className="number">9500877373</p>
            </Font>
          </center>
        </Container>
      </Jumbotron>
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
            <Font family="Niconne">
              <h3 className="display-4 d-flex justify-content-center">
                Our Packages
              </h3>
            </Font>
            <div className="d-flex justify-content-end">
              <Font family="Josefin Slab">
                <blockquote className="blockquote">
                  <h1 className="mb-0 display-5">Outdoor Shoot</h1>
                  <footer className="blockquote-footer">
                    <strong> 5 Hrs with 2 -3 Costume Change</strong>
                  </footer>
                </blockquote>
                <blockquote className="blockquote">
                  <h1 className="mb-0 display-5">BirthDay Party</h1>
                  <footer className="blockquote-footer">
                    <strong> 5 Hrs with 1 Photographer & 1 Videographer</strong>
                  </footer>
                </blockquote>
                <blockquote className="blockquote">
                  <h1 className="mb-0 display-5">Small Functions</h1>
                  <footer className="blockquote-footer">
                    <strong>5 Hrs with 1 Photographer</strong>
                  </footer>
                </blockquote>
                <blockquote className="blockquote">
                  <h1 className="mb-0 display-5">
                    Weddings / Corporate Events
                  </h1>
                  <footer className="blockquote-footer">
                    <strong>
                      8 to 12 Hrs package with team size customized to suit your
                      schedule & crowd
                    </strong>
                  </footer>
                </blockquote>
              </Font>
            </div>
          </Col>
        </Row>
      </div>
      <br />
      <br />
      <hr />
    </div>
  );
}

export default Home;
