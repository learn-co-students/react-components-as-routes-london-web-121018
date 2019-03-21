import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

const Navbar = () =>
  <div>
    <NavLink to="/" exact style={link} activeSyle={{ background: 'darkblue '}}
      >Home
    </NavLink>

    <NavLink to="/about" exact style={link} activeSyle={{ background: 'darkblue '}}
      >About
    </NavLink>

    <NavLink to="/login" exact style={link} activeSyle={{ background: 'darkblue '}}
      >Login
    </NavLink>
  </div>


const Home = () => {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
};

const About = () => {
  return (
    <div><h1>This is my about component!</h1></div>
  );
};

const Login = () => {
  return (
    <div>
      <form>
        <div>
          <input type="text" name="username" placeholder="username" />
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="text" name="password" placeholder="password" />
          <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

const link =  {
   width: '100px',
   padding: '12px',
   margin: '0 6px 6px',
   background: 'blue',
   textDecoration: 'none',
   color: 'white',
};



ReactDOM.render((
  <Router>
    <React.Fragment>
      <Navbar />
      <Route exact path="/" render={Home} />
      <Route exact path="/about" render={About} />
      <Route exact path="/login" render={Login} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);
