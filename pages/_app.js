import React from 'react';
import App, { Container } from 'next/app';
import { ToastContainer } from 'react-toastify';
import auth0 from '../services/auth0';

// Stylings
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss';
import 'react-toastify/dist/ReactToastify.css';




import Router from 'next/router'



export default class MyApp extends App {



  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({ loading: false });
    Router.events.on('routeChangeStart', () => this.setState({ loading: true }));
    Router.events.on('routeChangeComplete', () => this.setState({ loading: false }));
  }

  static async getInitialProps({ Component, router, ctx }) {
    let pageProps ,siteOwner = {};
    
    const user = process.browser ? await auth0.clientAuth() : await auth0.serverAuth(ctx.req);

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    siteOwner =user && user[ process.env.NAMESPACE + '/role'];

    const isSiteOwner = siteOwner && siteOwner[0]  ===  'siteOwner' ;
     
    const auth = { user, isAuthenticated: !!user, isSiteOwner };

    return { pageProps, auth }
  }

 

  render () {
    const { Component, pageProps, auth } = this.props
    
    const { loading }= this.state;
    return (
      <Container>
        <ToastContainer />
        <Component auth={auth} {...pageProps}/>
        { loading &&
        <div id="preloader"></div>
        }
      </Container>
    )
  }
}
