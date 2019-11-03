import React from 'react';
import Link from 'next/link';
import ActiveLink from '../ActiveLink';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu} from 'reactstrap';

import auth0 from '../../services/auth0';

 

const BsNavLink = (props) => {
  const { route, title } = props;
  const className = props.className || "";

  return (
    <ActiveLink activeClassName="active" route={route}>
      <a className={`nav-link port-navbar-link ${className}`}> {title} </a>
    </ActiveLink>
  )
}

const Login = () => {
  return (
    <span onClick={auth0.login} className="nav-link port-navbar-link clickable"> Login </span>
  )
}

const Logout = () => {
  return (
    <span onClick={auth0.logout} className="nav-link port-navbar-link clickable"> Logout </span>
  )
}

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      dropdownOpen: false,
      loading:false
    };

    this.toggle = this.toggle.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggleDropdown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
 
  renderBlogMenu() {
    const { isSiteOwner } = this.props;
   
    if (isSiteOwner) {
      return (
        <Dropdown className="port-navbar-link port-dropdown-menu" nav isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
          <DropdownToggle className="port-dropdown-toggle" nav caret>
            Blog
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
              <BsNavLink className="port-dropdown-item"
                         route="/blogs"
                         title="Blogs" />
            </DropdownItem>
            <DropdownItem>
              <BsNavLink className="port-dropdown-item"
                         route="/blogs/new"
                         title="Create a Blog" />
            </DropdownItem>
            <DropdownItem>
              <BsNavLink className="port-dropdown-item"
                         route="/blogs/dashboard"
                         title="Blogs Dashboard" />
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      )
    }

    return (
      <NavItem className="port-navbar-item">
        <BsNavLink route="/blogs" title="Blog" />
      </NavItem>
    )
  }

  render() {
    const { isAuthenticated, user, isSiteOwner } = this.props;
    const { isOpen, loading } = this.state;
   
    const menuOpenClass = isOpen ? 'menu-open' : 'menu-close';

    return (
   
 <div>
     
<nav className="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
  <div className="container">
  <BsNavLink route="/#page-top" title="Mehrdad Safari" className="navbar-brand js-scroll"/>
    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault"
      aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
      <ul className="navbar-nav">
        <li className="nav-item">
        <BsNavLink  route="/" title="Home" className="nav-link js-scroll "/>
      
        </li>
        <li className="nav-item">
        <BsNavLink route="/about" title="About Me" className="nav-link js-scroll"/>
        </li>
        <li className="nav-item">
        <BsNavLink route="/#service" title="Skills" className="nav-link js-scroll"/>
           
        </li>
        <li className="nav-item">
        <BsNavLink route="/portfolios" title="GitHub" className="nav-link js-scroll"/>
       
        </li>
        <li className="nav-item">
        <BsNavLink route="/cv" title="CV" className="nav-link js-scroll"/>

        </li>

        <li className="nav-item">
     
        { isSiteOwner ? this.renderBlogMenu() :
           <BsNavLink route="/blogs" title="Blog" className="nav-link js-scroll"/>
        }
       
        </li>
        <li className="nav-item">
        <BsNavLink route="/#contactbox" title="Contact" className="nav-link js-scroll"/>

        </li>
        { !isAuthenticated &&
                 
                  <Login />
                
              }
              { isAuthenticated &&
               
                  <Logout />
               
              }
      </ul>
    </div>
  </div>
</nav>
</div>

    );
  }
}




