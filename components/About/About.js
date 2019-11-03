import React from "react";

import { Container, Row } from "reactstrap";

const About = () => {
  return (
    <section id="about" className="about-mf sect-pt4 route">
      <Container>
        <Row>
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <Row>
                <div className="col-md-6">
                  <Row>
                    <div className="col-sm-5 col-md-4">
                      <div className="about-img">
                        <img
                          src="/static/img/portrait.jpg"
                          className="img-fluid rounded b-shadow-a"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-sm-7 col-md-8">
                      <div className="about-info">
                        <p>
                          <span className="title-s">Name: </span>{" "}
                          <span>Mehrdad Safari</span>
                        </p>
                        <p>
                          <span className="title-s">Profile: </span>{" "}
                          <span>full stack developer</span>
                        </p>
                        <p>
                          <span className="title-s">Email: </span>
                          {"  "}
                          <span> mihrdad.safari@Gmail.com</span>
                        </p>
                        <p>
                          <span className="title-s">Phone: </span>{" "}
                          <span>+98 93 7171 6162</span>
                        </p>
                      </div>
                    </div>
                  </Row>
                  <div className="skill-mf">
                    <p className="title-s">Skill</p>
                    <span>HTML</span>
                    <span className="pull-right">95%</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "95%" }}
                        aria-valuenow="85"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <span>CSS3</span>
                    <span className="pull-right">95%</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "95%" }}
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <span>PHP</span>
                    <span className="pull-right">50%</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "50%" }}
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <span>JAVASCRIPT</span>
                    <span className="pull-right">90%</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "90%" }}
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <span>ReactJs</span>
                    <span className="pull-right">70%</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "70%" }}
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <span>PhotoShop</span>
                    <span className="pull-right">90%</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "90%" }}
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <span>Photography</span>
                    <span className="pull-right">80%</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "80%" }}
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">About me</h5>
                    </div>
                    <p className="lead">
                      Junior Web Developer specializing in front end development
                      with 8+ years of experience designing,developing, and
                      managing complex e-commerce sites and internal frameworks.
                      Experienced with all stages of the development cycle for
                      dynamic web projects. Well-versed in numerous programming
                      languages including JavaScript , HTML5 , CSS , Jquery ,
                      MySQL.
                    </p>
                  </div>
                </div>
              </Row>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default About;
