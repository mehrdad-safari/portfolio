
  import React from 'react';

  import { Button, Container, Row, Col } from 'reactstrap';


  const Skills =()=> {
      return (

        <section id="service" className="services-mf route">
        <Container>
          <Row>
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">
                  Skills
                </h3>
                <p className="subtitle-a">
                 I List some of my expertise
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </Row>
          <Row>
            <div className="col-md-4">
              <div className="service-box">
                <div className="service-ico">
                  <span className="ico-circle"><i className="ion-monitor"></i></span>
                </div>
                <div className="service-content">
                  <h2 className="s-title">Web Design</h2>
                  <p className="s-description text-center">
                  Designing Website UI , logos and images by using Adobe Photoshop and Illustrator
                  Using jQuery scripts for basic animation and end user screen customization purposes.
                  </p>
                </div>
              </div>
            </div>


            <div className="col-md-4">
              <div className="service-box">
                <div className="service-ico">
                  <span className="ico-circle"><i className="ion-paintbrush"></i></span>
                </div>
                <div className="service-content">
                  <h2 className="s-title">ReactJs</h2>
                  <p className="s-description text-center">
                   Using ReactJS framework to develop the SPA and writing application level code to interact with APIs, RESTful Web Services using ReactJS.
                  </p>
                </div>
              </div>
            </div>


            <div className="col-md-4">
              <div className="service-box">
                <div className="service-ico">
                  <span className="ico-circle"><i className="ion-code-working"></i></span>
                </div>
                <div className="service-content">
                  <h2 className="s-title">Wordpress Developer</h2>
                  <p className="s-description text-center">
                  Created and maintained more than 500 Wordpress based sites, modified Plugins and Templates
                  </p>
                </div>
              </div>
            </div>



            <div className="col-md-4">
              <div className="service-box">
                <div className="service-ico">
                  <span className="ico-circle"><i className="ion-android-phone-portrait"></i></span>
                </div>
                <div className="service-content">
                  <h2 className="s-title">Hardware Engineer</h2>
                  <p className="s-description text-center">
                      Build almost anything with lovely Arduino 
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="service-box">
                <div className="service-ico">
                  <span className="ico-circle"><i className="ion-stats-bars"></i></span>
                </div>
                <div className="service-content">
                  <h2 className="s-title">Front-end Developer</h2>
                  <p className="s-description text-center">
                  Designed and developed front-end for 100+ websites, using jQuery,
AJAX, RequireJS, and Handlebars.js
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="service-box">
                <div className="service-ico">
                  <span className="ico-circle"><i className="ion-camera"></i></span>
                </div>
                <div className="service-content">
                  <h2 className="s-title">Photography</h2>
                  <p className="s-description text-center">
                      I used to take photo as a hoby and nowdays some time i take some shots
                  </p>
                </div>
              </div>
            </div>
            
          </Row>
        </Container>
      </section>
      )
    }

 export default Skills;   
