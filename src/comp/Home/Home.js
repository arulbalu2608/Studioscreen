import React from "react";
import {
  UncontrolledCarousel,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardTitle,
} from "reactstrap";
import Font from "react-font";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Roll from "react-reveal/Roll";

import "./Home.css";
import car1 from "../../Images/car1.jpg";
import car2 from "../../Images/car2.jpg";
import car3 from "../../Images/car3.jpg";
import img1 from "../../Images/candid/06.jpg";
import img2 from "../../Images/candid/10.jpg";
import img3 from "../../Images/candid/03.jpg";
import img4 from "../../Images/wedding/07.jpg";
import img5 from "../../Images/wedding/04.jpg";
import img6 from "../../Images/wedding/05.jpg";
import logo from "../../Images/logo.jpg";
import pack1 from "../../Images/wedding/01.jpg";
import pack2 from "../../Images/wedding/06.jpg";

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
    <div className="HomeStyle">
      <div className="position-relative">
        <UncontrolledCarousel items={items} />
      </div>
      <br />
      <Fade bottom>
        <center>
          <img src={logo} width="30%" class="img-thumbnail" alt="logo"></img>
          <br />
          <Roll bottom>
            <h4>Opening 10Am-6Pm</h4>
          </Roll>
          <p className="lead">
            Studio Screen Forographia gives you a warm and hearty welcome!!! We
            are delighted to have you here We never get a second chance to get
            your best impression… We are looking forward to make your special
            day more memorable… We have created thousands of delightful moments
            across many part of Thanjavur.We can’t wait to fulfill your dreams
            through our stunning and peculiar frames.We are known for capturing
            graceful yet eccentric photographs with our trendy ideas and modish
            techniques. We are passionate about creating extraordinary frames
            out of ordinary situations. We would love to be a part of your
            glorious moments!!!
          </p>
        </center>
        <div>
          <Font family="Niconne">
            <h3 className="display-4">Some Beautiful Moments</h3>
          </Font>

          <br />
          <Row>
            <Col className=" col-12 col-sm-4">
              <img src={img1} alt="img1" className="img-thumbnail"></img>
            </Col>
            <Col className="col-12 col-sm-4 ">
              <img src={img2} alt="img2" className="img-thumbnail"></img>
            </Col>
            <Col className="col-12 col-sm-4">
              <img src={img3} alt="img3" className="img-thumbnail"></img>
            </Col>
          </Row>
          <Row>
            <Col className=" col-12 col-sm-4 ">
              <center>
                <img src={img4} alt="img4" className="img-thumbnail"></img>
              </center>
            </Col>
            <Col className="col-12 col-sm-4 ">
              <img src={img5} alt="img5" className="img-thumbnail"></img>
            </Col>
            <Col className="col-12 col-sm-4 ">
              <img src={img6} alt="img6" className="img-thumbnail"></img>
            </Col>
          </Row>
        </div>
        <br />

        <div>
          <Card>
            <Font family="Niconne">
              <h3 className="display-4">Checkout our Packages</h3>
            </Font>
            <br />
            <Row>
              <Col className="col-12 col-sm-4">
                <Flip>
                  <CardImg className="img-thumbnail " src={pack1} alt="pack1" />
                </Flip>
              </Col>
              <Col className="col-12 col-sm-4 " id="card">
                <div className="container-fluid">
                  <Fade right>
                    <Font family="Niconne">
                      <CardTitle className="display-4">Package 1</CardTitle>
                    </Font>
                    <CardText>
                      <p>
                        1 Traditional Photographer
                        <br /> 1 Traditional Videographer
                      </p>
                      <p className="lead">
                        * One Syenthetic Album With 250 Photos
                        <br /> * HD Video Output With Pendrive <br /> * One Wall
                        Calender
                      </p>
                    </CardText>
                  </Fade>
                </div>
              </Col>

              <Col className="col-12 col-sm-4">
                <div className="d-flex justify-content-center">
                  <Fade right>
                    <Font family="Niconne">
                      <h1 className="display-3">₹40,000</h1>
                    </Font>
                  </Fade>
                </div>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col className="col-12 col-sm-4">
                <Flip>
                  <CardImg
                    className="img-thumbnail "
                    src={pack2}
                    alt="Card image cap"
                  />
                </Flip>
              </Col>
              <Col className="col-12 col-sm-4 " id="card">
                <div className="container-fluid">
                  <Fade right>
                    <Font family="Niconne">
                      <CardTitle className="display-4">Package 2</CardTitle>
                    </Font>
                    <CardText>
                      <p>
                        1 Traditional Photographer 1 Candid Photographer <br />1
                        Traditional Videographer
                      </p>
                      <p className="lead">
                        * One Syenthetic Album With 400 Photos <br /> * HD Video
                        Output With Pendrive <br /> * One Wall Calender or Photo
                        Frame
                      </p>
                    </CardText>
                  </Fade>
                </div>
              </Col>

              <Col className="col-12 col-sm-4">
                <div className="d-flex justify-content-center">
                  <Fade right>
                    <Font family="Niconne">
                      <h1 className="display-3">₹65,000</h1>
                    </Font>
                  </Fade>
                </div>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col className="col-12 col-sm-4">
                <Flip>
                  <CardImg
                    className="img-thumbnail "
                    src={img5}
                    alt="Card image cap"
                  />
                </Flip>
              </Col>
              <Col className="col-12 col-sm-4 " id="card">
                <div className="container-fluid">
                  <Fade right>
                    <Font family="Niconne">
                      <CardTitle className="display-4">Package 3</CardTitle>
                    </Font>
                    <CardText>
                      <p>
                        1 Traditional Photographer 1 Candid Photographer
                        <br />1 Traditional Videographer 1 Candid Videographer
                      </p>
                      <p className="lead">
                        * One Traditional Syenthetic Album With 400 Photos
                        <br /> * One Candid Album With 200 Photos
                        <br /> * HD Video Output With Pendrive
                        <br /> * Two Family Portraits Photo Frames
                      </p>
                    </CardText>
                  </Fade>
                </div>
              </Col>

              <Col className="col-12 col-sm-4">
                <div className="d-flex justify-content-center">
                  <Fade right>
                    <Font family="Niconne">
                      <h1 className="display-3">₹90,000</h1>
                    </Font>
                  </Fade>
                </div>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col className="col-12 col-sm-4">
                <Flip>
                  <CardImg
                    className="img-thumbnail "
                    src={img4}
                    alt="Card image cap"
                  />
                </Flip>
              </Col>
              <Col className="col-12 col-sm-4 " id="card">
                <div className="container-fluid">
                  <Fade right>
                    <Font family="Niconne">
                      <CardTitle className="display-4">Package 4</CardTitle>
                    </Font>
                    <CardText>
                      <p>
                        1 Traditional Photographer 1 Candid Photographer
                        <br /> 2 Traditional Videographer 1 Candid Videographer{" "}
                        <br /> 8x6 Led Wall Drone (helicam)
                      </p>
                      <p className="lead">
                        * Two Traditional Syenthetic Album With 600 Photos
                        <br /> * One Candid Album With 200 Photos
                        <br /> * Wall Calender and Family Portraits Photo Frames
                      </p>
                    </CardText>
                  </Fade>
                </div>
              </Col>

              <Col className="col-12 col-sm-4">
                <div className="d-flex justify-content-center">
                  <Fade right>
                    <Font family="Niconne">
                      <h1 className="display-3">₹1,70,000</h1>
                    </Font>
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
