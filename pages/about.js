import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import About from '../components/About/About';
 

class AboutPage extends React.Component {

  render() {
    return (
      <BaseLayout title="Mehrdad Safari - Learn More About Me" {...this.props.auth}>
        <BasePage className="about-page">
         <About />
        </BasePage>
      
      </BaseLayout>
    )
  }
}

export default AboutPage;
