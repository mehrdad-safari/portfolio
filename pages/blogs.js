import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

import { Container, Row, Col } from 'reactstrap';
import { Link } from '../routes';

import { getBlogs } from '../actions';
import { shortenText } from '../helpers/utils';

import moment from 'moment';


class Blogs extends React.Component {

  static async getInitialProps({req}) {
    let blogs = [];

    try {
      blogs = await getBlogs(req);
    } catch(err) {
      console.error(err);
    }
 
    return {blogs};
  }

  renderBlogs = (blogs) => (
   
    blogs.map((blog, index) => (
 
      <div  key={index}  className="col-md-12">
      <div className="card card-blog">

        <div className="card-body">
          <div className="card-category-box">
 
          </div>
          <Link route={`/blogs/${blog.slug}`}>
          <h3 className="card-title clickable"> {blog.title} </h3>
          </Link>
           
          
          <p
            className="card-description"
            dangerouslySetInnerHTML={{ __html: shortenText(blog.story) }}
           />
      
       
        </div>
        <div className="card-footer">
          <div className="post-author">
            
              <img src="./static/img/portrait.jpg" alt="" className="avatar rounded-circle" />
              <span className="author"> {blog.author} </span>
            
          </div>
          <div className="post-date">
            <span className="ion-ios-clock-outline"></span> {"  "} {moment(parseInt(blog.createdAt, 10)).format('LL')} 
          </div>
        </div>
      </div>
    </div>

 
      )
    )
  )

  render() {
    const {blogs} = this.props;

    return (
      <BaseLayout {...this.props.auth}
                  headerType={'landing'}
                  className="blog-listing-page"
                  title="Mehrdad Safari - Newest Blogs to Read">
        <div className="masthead" style={{"backgroundImage": "url('/static/img/home-bg.jpg')"}}>
          <div className="overlay"></div>
          <Container>
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                  <h1>Fresh Blogs</h1>
                  <span className="subheading">Programming, travelling...</span>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <BasePage className="blog-body">
          <Row>

       

            <Col md="10" lg="8" className="mx-auto">
              {
                this.renderBlogs(blogs)
              }
              <div className="clearfix">
                <a className="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
              </div>
            </Col>
          </Row>

          <footer>
            <Container>
              <Row>
                <div className="col-lg-8 col-md-10 mx-auto">
                  <ul className="list-inline text-center">
                    <li className="list-inline-item">
                      <a target="_blank" href="https://github.com/mehrdad-safari">
                        <span className="fa-stack fa-lg">
                          <i className="fas fa-circle fa-stack-2x"></i>
                          <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                  <p className="copyright text-muted">Copyright &copy; Mehrdad Safari 2019 </p>
                </div>
              </Row>
            </Container>
          </footer>
        </BasePage>
        <style jsx>
          {`
            @import url("https://use.fontawesome.com/releases/v5.5.0/css/all.css");
          `}
        </style>
      </BaseLayout>
    )
  }
}

export default Blogs;

