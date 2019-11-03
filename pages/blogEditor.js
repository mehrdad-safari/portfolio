import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

import withAuth from '../components/hoc/withAuth';
  
import Editor from '../components//Editor/Editor';
 

class BlogEditor extends React.Component {

 

 


  render() {
   

    return (
      <BaseLayout {...this.props.auth}>
        <BasePage containerClass="editor-wrapper" className="blog-editor-page">
          <Editor />
        </BasePage>
      </BaseLayout>
    )
  }
}

export default withAuth('siteOwner')(BlogEditor);
