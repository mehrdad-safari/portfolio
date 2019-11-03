import React, { Component } from "react";

import Footer from "../Footer/Footer";

import emailjs from "emailjs-com";
import config from '../../config';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailSuccess: false,
      emailError: false
    };
  }
  handleSubmit(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const templateParams = {
      name,
      email,
      subject: "This Came From Portfolio ",
      message
    };

    const data = {
      service_id: config.emailjs.service_id ,
      template_id: config.emailjs.template_id ,
      user_id: config.emailjs.user_id
    };

    emailjs
      .send(data.service_id, data.template_id, templateParams, data.user_id)
      .then(
        response => {
          this.setState({ emailSuccess: true });
          this.resetForm();
        },
        err => {
          this.setState({ emailError: true });
        }
      );
  }

  resetForm() {
    document.getElementById("contact-form").reset();
  }

  render() {
    const { emailSuccess, emailError } = this.state;
    return (
      <section
        id="contactbox"
        className="paralax-mf footer-paralax bg-image sect-mt4 route"
        style={{ backgroundImage: `url(/static/img/overlay-bg.jpg)` }}
      >
        <div className="overlay-mf"></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-mf">
                <div id="contact" className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="title-box-2">
                        <h5 className="title-left">Get In Touch</h5>
                      </div>
                      <div>
                        <form
                          onSubmit={this.handleSubmit.bind(this)}
                          method="POST"
                          id="contact-form"
                          className="contactForm"
                        >
                          {emailSuccess && (
                            <div id="sendmessage">
                              Your message has been sent. Thank you!
                            </div>
                          )}
                          {emailError && (
                            <div id="errormessage">
                              Something Happend Wrong! Please Try again
                            </div>
                          )}
                          <div className="row">
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  name="name"
                                  className="form-control"
                                  id="name"
                                  placeholder="Your Name"
                                  data-rule="minlen:4"
                                  data-msg="Please enter at least 4 chars"
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="email"
                                  className="form-control"
                                  name="email"
                                  id="email"
                                  placeholder="Your Email"
                                  data-rule="email"
                                  data-msg="Please enter a valid email"
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="subject"
                                  id="subject"
                                  placeholder="Subject"
                                  data-rule="minlen:4"
                                  data-msg="Please enter at least 8 chars of subject"
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <textarea
                                  id="message"
                                  className="form-control"
                                  name="message"
                                  rows="5"
                                  data-rule="required"
                                  data-msg="Please write something for us"
                                  placeholder="Message"
                                ></textarea>
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <button
                                type="submit"
                                className="button button-a button-big button-rouded"
                              >
                                Send Message
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="title-box-2 pt-4 pt-md-0">
                        <h5 className="title-left">Get in Touch</h5>
                      </div>
                      <div className="more-info">
                        <p className="lead">
                          You can contact me via the contact form or one of the
                          following methods
                        </p>
                        <ul className="list-ico">
                          <li>
                            <span className="ion-ios-telephone"></span> +98 93
                            7171 6162
                          </li>
                          <li>
                            <span className="ion-email"></span>{" "}
                            safari.mehrdad@outlook.com
                          </li>
                          <li>
                            <span className="ion-email"></span>{" "}
                            mihrdad.safari@gmail.com
                          </li>
                        </ul>
                      </div>
                      <div className="socials">
                        <ul>
                          <li>
                            <a href="">
                              <span className="ico-circle">
                                <i className="ion-social-facebook"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span className="ico-circle">
                                <i className="ion-social-instagram"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span className="ico-circle">
                                <i className="ion-social-twitter"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span className="ico-circle">
                                <i className="ion-social-pinterest"></i>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    );
  }
}

export default Contact;
