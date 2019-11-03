import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BaseBlog from '../components/BaseBlog';

import { Row, Col } from 'reactstrap';

import { getBlogBySlug } from '../actions';

class BlogDetail extends React.Component {

  static async getInitialProps({query}) {
    let blog = {};
    const slug = query.slug;

    try {
      blog = await getBlogBySlug(slug);
      
    } catch(err) {
      console.error(err);
    }

    return {blog};
  }

  render() {
    const {blog} = this.props;

    return (
      <BaseLayout {...this.props.auth} className="blog-page">
        <BaseBlog blogData={ blog } className="blog-detail-page">
 
        </BaseBlog>
      </BaseLayout>
    )
  }
}

export default BlogDetail;
