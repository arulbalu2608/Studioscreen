import React from "react";
import Fade from "react-reveal/Fade";
import { SRLWrapper } from "simple-react-lightbox";
import { Jumbotron, Container } from "reactstrap";
import m_img1 from "../../Images/wedding/01.jpg";
import m_img2 from "../../Images/wedding/02.jpg";

import m_img4 from "../../Images/wedding/04.jpg";
import m_img5 from "../../Images/wedding/05.jpg";
import m_img6 from "../../Images/wedding/06.jpg";
import m_img7 from "../../Images/wedding/07.jpg";
import m_img8 from "../../Images/wedding/08.jpg";
import m_img9 from "../../Images/wedding/09.jpg";

import A_img1 from "../../Images/candid/01.jpg";
import A_img2 from "../../Images/candid/02.jpg";
import A_img3 from "../../Images/candid/03.jpg";

import A_img5 from "../../Images/candid/05.jpg";
import A_img6 from "../../Images/candid/06.jpg";
import A_img7 from "../../Images/candid/07.jpg";
import A_img8 from "../../Images/candid/08.jpg";

import A_img10 from "../../Images/candid/10.jpg";

import P_img1 from "../../Images/pre wedding/01.jpg";
import P_img2 from "../../Images/pre wedding/02.jpg";
import P_img3 from "../../Images/pre wedding/03.jpg";
import P_img4 from "../../Images/pre wedding/04.jpg";
import P_img5 from "../../Images/pre wedding/05.jpg";
import P_img6 from "../../Images/pre wedding/06.jpg";
import P_img7 from "../../Images/pre wedding/07.jpg";
import P_img8 from "../../Images/pre wedding/08.jpg";
import P_img9 from "../../Images/pre wedding/09.jpg";

import Font from "react-font";

import "./Gallery.css";

const options = {
  buttons: {
    backgroundColor: "rgba(30,30,36,0.8)",
    iconColor: "rgba(255, 255, 255, 0.8)",
    iconPadding: "10px",
    showAutoplayButton: true,
    showCloseButton: true,
    showDownloadButton: false,
    showFullscreenButton: true,
    showNextButton: true,
    showPrevButton: true,
    showThumbnailsButton: true,
    size: "40px",
  },
};

function Gallery() {
  return (
    <div className="gall">
      <SRLWrapper options={options}>
        <Fade bottom>
          <Jumbotron fluid id="jumbogallery">
            <Container fluid>
              <br />
              <br />
              <br />
              <br />
            </Container>
          </Jumbotron>
          <div className="container img-cont ">
            <div className="text-center gallery-heading">
              <Font family="Niconne">
                <h3 className="display-4">Wedding shoot</h3>
              </Font>
            </div>

            <div className="row">
              <div className="column">
                <a href={m_img4}>
                  <img
                    src={m_img4}
                    className="img-fluid img-responsive photo "
                    alt="wedding"
                  />
                </a>

                <a href={m_img2}>
                  <img
                    src={m_img2}
                    className="img-fluid img-responsive photo"
                    alt="wedding"
                  />
                </a>

                <a href={m_img9}>
                  <img
                    src={m_img9}
                    className="img-fluid img-responsive photo"
                    alt="wedding"
                  />
                </a>
              </div>
              <div className="column">
                <a href={m_img1}>
                  <img
                    src={m_img1}
                    className="img-fluid img-responsive photo"
                    alt="wedding"
                  />
                </a>

                <a href={m_img5}>
                  <img
                    src={m_img5}
                    className="img-fluid img-responsive photo"
                    alt="wedding"
                  />
                </a>

                <a href={m_img6}>
                  <img
                    src={m_img6}
                    className="img-fluid img-responsive photo"
                    alt="wedding"
                  />
                </a>
              </div>
              <div className="column">
                <a href={m_img7}>
                  <img
                    src={m_img7}
                    className="img-fluid img-responsive photo"
                    alt="wedding"
                  />
                </a>

                <a href={m_img8}>
                  <img
                    src={m_img8}
                    className="img-fluid img-responsive photo"
                    alt="wedding"
                    height="100%"
                  />
                </a>
              </div>
            </div>
          </div>
          <hr />
          <div className="container img-cont">
            <div className="text-center gallery-heading">
              <Font family="Niconne">
                <h3 className="display-4">Candid shoot</h3>
              </Font>
            </div>

            <div className="row">
              <div className="column">
                <a href={A_img1}>
                  <img
                    src={A_img1}
                    className="img-fluid img-responsive photo"
                    alt="candid"
                  />
                </a>

                <a href={A_img2}>
                  <img
                    src={A_img2}
                    className="img-fluid img-responsive photo"
                    alt="candid"
                  />
                </a>

                <a href={A_img3}>
                  <img
                    src={A_img3}
                    className="img-fluid img-responsive photo"
                    alt="candid"
                  />
                </a>
              </div>
              <div className="column">
                <a href={A_img5}>
                  <img
                    src={A_img5}
                    className="img-fluid img-responsive photo"
                    alt="candid"
                  />
                </a>

                <a href={A_img10}>
                  <img
                    src={A_img10}
                    className="img-fluid img-responsive photo"
                    alt="candid"
                  />
                </a>
              </div>
              <div className="column">
                <a href={A_img7}>
                  <img
                    src={A_img7}
                    className="img-fluid img-responsive photo"
                    alt="candid"
                  />
                </a>

                <a href={A_img8}>
                  <img
                    src={A_img8}
                    className="img-fluid img-responsive photo"
                    alt="candid"
                    height="100%"
                  />
                </a>

                <a href={A_img6}>
                  <img
                    src={A_img6}
                    className="img-fluid img-responsive photo"
                    alt="candid"
                  />
                </a>
              </div>
            </div>
          </div>
          <hr />
          <div className="container img-cont">
            <div className="text-center gallery-heading">
              <Font family="Niconne">
                <h3 className="display-4">post wedding shoot</h3>
              </Font>
            </div>

            <div className="row">
              <div className="column">
                <a href={P_img1}>
                  <img
                    src={P_img1}
                    className="img-fluid img-responsive photo"
                    alt="Post Wedding"
                  />
                </a>
                <a href={P_img2}>
                  <img
                    src={P_img2}
                    className="img-fluid img-responsive photo"
                    alt="Post Wedding"
                  />
                </a>
                <a href={P_img9}>
                  <img
                    src={P_img9}
                    className="img-fluid img-responsive photo"
                    alt="Post Wedding"
                  />
                </a>
              </div>
              <div className="column">
                <a href={P_img4}>
                  <img
                    src={P_img4}
                    className="img-fluid img-responsive photo"
                    alt="Post Wedding"
                  />
                </a>

                <a href={P_img5}>
                  <img
                    src={P_img5}
                    className="img-fluid img-responsive photo"
                    alt="Post Wedding"
                  />
                </a>

                <a href={P_img6}>
                  <img
                    src={P_img6}
                    className="img-fluid img-responsive photo"
                    alt="Post Wedding"
                  />
                </a>
              </div>
              <div className="column">
                <a href={P_img7}>
                  <img
                    src={P_img7}
                    className="img-fluid img-responsive photo"
                    alt="Post Wedding"
                  />
                </a>

                <a href={P_img8}>
                  <img
                    src={P_img8}
                    className="img-fluid img-responsive photo"
                    alt="Post Wedding"
                    height="100%"
                  />
                </a>

                <a href={P_img3}>
                  <img
                    src={P_img3}
                    className="img-fluid img-responsive photo"
                    alt="Post Wedding"
                    height="100%"
                  />
                </a>
              </div>
            </div>
          </div>
        </Fade>
      </SRLWrapper>
    </div>
  );
}

export default Gallery;
