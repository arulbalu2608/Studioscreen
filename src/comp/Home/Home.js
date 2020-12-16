import React from "react";
import {
  UncontrolledCarousel,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import Font from "react-font";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import "./Home.css";
import car1 from "../../Images/Album/06.jpg";
import car2 from "../../Images/pre wedding/10.jpg";
import car3 from "../../Images/Album/07.jpg";
import img1 from "../../Images/candid/06.jpg";
import img2 from "../../Images/candid/10.jpg";
import img3 from "../../Images/candid/03.jpg";
import img4 from "../../Images/wedding/07.jpg";
import img5 from "../../Images/wedding/04.jpg";
import img6 from "../../Images/wedding/05.jpg";

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
      <Fade bottom>
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
            <Col className=" col-12 col-sm-4">
              <img src={img1} alt="img1" class="img-thumbnail"></img>
            </Col>
            <Col className="col-12 col-sm-4 ">
              <img src={img2} alt="img2" class="img-thumbnail"></img>
            </Col>
            <Col className="col-12 col-sm-4">
              <img src={img3} alt="img3" class="img-thumbnail"></img>
            </Col>
          </Row>
          <Row>
            <Col className=" col-12 col-sm-4">
              <img src={img4} alt="img4" class="img-thumbnail"></img>
            </Col>
            <Col className="col-12 col-sm-4 ">
              <img src={img5} alt="img5" class="img-thumbnail"></img>
            </Col>
            <Col className="col-12 col-sm-4 ">
              <img src={img6} alt="img6" class="img-thumbnail"></img>
            </Col>
          </Row>
        </div>
        <br />
        <br />
        <hr />
        <div>
          <Card>
            <Row>
              <Col className="col-12 col-sm-3">
                <Flip>
                  <CardImg
                    className="img-thumbnail "
                    src={img5}
                    alt="Card image cap"
                  />
                </Flip>
              </Col>
              <Col className="col-12 col-sm-9 " id="card">
                <div className="container-fluid">
                  <Fade right>
                    <Font family="Niconne">
                      <CardTitle className="display-4">Wedding</CardTitle>
                    </Font>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                      Card subtitle
                    </CardSubtitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <p>
                      <strong>package ₹20,000</strong>
                    </p>
                  </Fade>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="col-12 col-sm-3">
                <Flip>
                  <CardImg
                    className="img-thumbnail "
                    src={img5}
                    alt="Card image cap"
                  />
                </Flip>
              </Col>
              <Col className="col-12 col-sm-9 " id="card">
                <div className="container-fluid">
                  <Fade right>
                    <Font family="Niconne">
                      <CardTitle className="display-4">Wedding</CardTitle>
                    </Font>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                      Card subtitle
                    </CardSubtitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <p>
                      <strong>package ₹20,000</strong>
                    </p>
                  </Fade>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="col-12 col-sm-3">
                <Flip>
                  <CardImg
                    className="img-thumbnail "
                    src={img5}
                    alt="Card image cap"
                  />
                </Flip>
              </Col>
              <Col className="col-12 col-sm-9 " id="card">
                <div className="container-fluid">
                  <Fade right>
                    <Font family="Niconne">
                      <CardTitle className="display-4">Wedding</CardTitle>
                    </Font>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                      Card subtitle
                    </CardSubtitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <p>
                      <strong>package ₹20,000</strong>
                    </p>
                  </Fade>
                </div>
              </Col>
            </Row>
          </Card>
        </div>
        <br />
        <hr />
      </Fade>
    </div>
  );
}

export default Home;
