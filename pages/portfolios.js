import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
 
import { Col, Row, Button } from "reactstrap";
 
import portfolioConfig from "../server/config/dev";
 

import moment from "moment";

class Portfolios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    };
  }

  getRepos() {
    const username = portfolioConfig.gitHubUsername;
    const clientId = portfolioConfig.clientId;
    const clientSecret = portfolioConfig.clientSecret;
    const count = 20;
    const sort = "created: asc";
    const endpoint = `https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`;

    try {
      fetch(endpoint)
        .then(res => res.json())
        .then(data => {
          this.setState({ repos: data });
        })
        .catch(err => console.log(err));
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const { repos } = this.state;

    return (
      <BaseLayout
        title="Mehrdad Safari - Learn About My Experience"
        {...this.props.auth}
      >
        <BasePage className="portfolio-page" title="Portfolios">
          <Row>
            {this.getRepos()}
            {repos &&
              repos.map((portfolio, index) => {
                return (
                  <Col key={index} md="4">
                    <div className="card card-blog">
                      <div className="card-img">
                       <a href={portfolio.html_url} alt={portfolio.description}> 
                          <img
                            src="./static/img/post-1.jpg"
                            alt=""
                            className="img-fluid"
                          />
                        </a>
                      </div>
                      <div className="card-body">
                        <div className="card-category-box">
                          <div className="card-category">
                            <h6 className="category">{portfolio.language}</h6>
                          </div>
                        </div>
                        <h3 className="card-title"><a href={portfolio.html_url} alt={portfolio.description}>  {portfolio.name} </a> </h3>
                        <p className="card-description">{portfolio.description}</p>
                      </div>
                      <div className="card-footer">
                        <div className="post-author">
                        <a href={portfolio.owner.html_url} alt={portfolio.description}>
                         
                            <img
                              className="avatar rounded-circle"
                              src={portfolio.owner.avatar_url}
                              alt={portfolio.owner.login}
                            />

                            <span className="author">{portfolio.owner.login}</span>
                          </a>
                        </div>
                        <div className="post-date">
                          <span className="ion-ios-clock-outline"></span>

                          {"  "}
                          {moment(portfolio.updated_at).format("MMM DD YYYY")}
                        </div>
                      </div>
                    </div>
                  </Col>
                );
              })}
          </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default Portfolios;
