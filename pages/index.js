import React from "react";
import Typed from "react-typed";

import BaseLayout from "../components/layouts/BaseLayout";

import Skills from "../components/Skills/Skills";
import Contact from "../components/Contact/Contact";
import ScrollTop from "../components/shared/ScrollTop";

import { Container } from "reactstrap";

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFlipping: false
    };

    this.roles = [
      "Web Developer",
      "Tech Lover",
      "Team Player",
      "Frontend Developer",
      "ReactJs Expert",
      "Graphic Designer"
    ];
  }

  componentDidMount() {
    this.animateCard();
  }

  componentWillUnmount() {
    this.cardAnimationInterval && clearInterval(this.cardAnimationInterval);
  }

  animateCard() {
    this.cardAnimationInterval = setInterval(() => {
      this.setState({
        isFlipping: !this.state.isFlipping
      });
    }, 60000);
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const { isFlipping } = this.state;

    return (
      <BaseLayout
        className={`cover ${isFlipping ? "cover-1" : "cover-0"}`}
        {...this.props.auth}
        headerType="index"
        title="Mehrdad Safari - Portfolio"
      >
        <div
          id="home"
          className="intro route bg-image"
          style={{ backgroundImage: `url(/static/img/intro-bg.jpg)` }}
        >
          <div className="overlay-itro"></div>
          <div className="intro-content display-table">
            <div className="table-cell">
              <Container>
                <h1 className="intro-title mb-4">I am Mehrdad Safari</h1>
                <p className="intro-subtitle">
                  {" "}
                  <strong className="text-slider">
                    <Typed
                      loop
                      typeSpeed={60}
                      backSpeed={60}
                      strings={this.roles}
                      backDelay={1000}
                      loopCount={0}
                      showCursor
                      className="self-typed"
                      cursorChar="|"
                    />
                  </strong>
                </p>
              </Container>
            </div>
          </div>
        </div>

        <Skills />

        <Contact />
      
        <ScrollTop />
       </BaseLayout>
    );
  }
}

export default Index;
