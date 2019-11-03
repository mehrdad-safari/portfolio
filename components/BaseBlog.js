import { Container } from "reactstrap";
import PropTypes from "prop-types";

const BaseBlog = props => {
  const { className, title, containerClass, blogData } = props;

  // const className = props.className || '';

  return (
    <div id="blog" className={`base-page blog-wrapper sect-pt4 ${className}`}>
      <div
        className="intro intro-single route bg-image"
        style={{ backgroundImage: "url(../static/img/overlay-bg.jpg)" }}
      >
        <div className="overlay-mf"></div>
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">{blogData.title} </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="post-box">
              <div className="post-meta"></div>
              <div className="article-content">
                <div dangerouslySetInnerHTML={{ __html: blogData.story }} />;
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BaseBlog.defaultProps = {
  className: "",
  containerClass: ""
};

export default BaseBlog;
