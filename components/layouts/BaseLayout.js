import React from 'react';
import Header from '../shared/Header';
import Head from 'next/head';

const BaseLayout = (props) => {
  const { className, children, isAuthenticated, user, isSiteOwner, cannonical } = props;
  const headerType = props.headerType || 'default';
  const title = props.title || 'Mehrdad Safari Portfolio';
  return (

    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content="My name is Mehrdad Safari and I am an experienced software engineer and freelance developer. I have a Master's degree in Artificial Intelligence and several years of experience working on a wide range of technologies and projects from C++ development for ultrasound devices to modern mobile and web applications in React and Angular. Throughout my career, I have acquired advanced technical knowledge and the ability to explain programming topics clearly and in detail to a broad audience. I invite you to take my course, where I have put a lot of effort to explain web and software engineering concepts in a detailed, hands-on and understandable way." />
        <meta name="keywords" content="safari portfolio, safari developer, safari freelancig, safari programming"/>
        <meta property="og:title" content="Mehrdad Safari - programmer, developer, bloger" />
        <meta property="og:locale" content="en_EU" />
        <meta property="og:url" content={`${process.env.BASE_URL}`}/>
        <meta property="og:type" content="website"/>
        <meta property="og:description" content="My name is Mehrdad Safari and I am an experienced software engineer and freelance developer."/>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet"/>
        {cannonical && <link rel="cannonical" href={`${process.env.BASE_URL}${cannonical}`}/>}
        <link rel="icon" type="image/ico" href="/static/favicon.ico"/>

    
        <link href="/static/lib/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
      
        <link href="/static/lib/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
 
        <link href="/static/lib/ionicons/css/ionicons.min.css" rel="stylesheet" />
    
        <link href="/static/css/style.css" rel="stylesheet" />
       
  <script src="/static/lib/jquery/jquery.min.js"></script>
 
  
  <script src="/static/lib/bootstrap/js/bootstrap.min.js"></script>
  <script src="/static/lib/counterup/jquery.counterup.js"></script>
   
  
  <script src="/static/js/main.js"></script>
      </Head>
       
        <Header className={`port-nav-${headerType}`}
                isAuthenticated={isAuthenticated}
                user={user}
                isSiteOwner={isSiteOwner}/>
       
        <main className={`cover ${className}`}>
          <div id="page-top" className="wrapper">
            {children}
          </div>
        </main>

    </React.Fragment>
  )
}

export default BaseLayout;

