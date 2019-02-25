import React from "react";
import { NavLink } from "react-router-dom";

export default class NavBar extends React.Component {
    link = {
        width: '100px',
        padding: '12px',
        margin: '0 6px 6px',
        background: 'blue',
        textDecoration: 'none',
        color: 'white',
      };

    render () {
        return (
        <div>
    <NavLink
      to="/"
      /* set exact so it knows to only set activeStyle when route is deeply equal to link */
      exact
      /* add styling to Navlink */
      style={this.link}
      /* add prop for activeStyle */
      activeStyle={{
        background: 'darkblue'
      }}
    >Home</NavLink>
    <NavLink
      to="/about"
      exact
      style={this.link}
      activeStyle={{
        background: 'darkblue'
      }}
    >About</NavLink>
    <NavLink
      to="/login"
      exact
      style={this.link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Login</NavLink>
  </div>
        );
    };
};