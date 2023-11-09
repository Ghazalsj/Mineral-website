import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import NewArrivals from './pages/NewArrivals';
import ProductList from './Reuseability/ProductList';
import LoginForm from './components/Login';
import Logout from './components/Logout';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.css';
import Header from './components/Header';
import Info from './components/Getintouch';
import Footer from './components/Footer';
import team from './pages/team';


function App() {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (credentials) => {
    
    if (credentials.username === 'user' && credentials.password === 'password1A?') {
      setIsAuthenticated(true);
      setUser(null);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);

  };

  const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    );
  };

  return (
    
    <Router>
       <Header />
      <NavBar isAuthenticated={isAuthenticated} onLogout={logout} />
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              classNames="login-fade"
              timeout={300}
            >
               <Switch location={location}>
                <Route path="/login">
                  {isAuthenticated ? (
                    <Logout onLogout={logout} />
                  ) : (
                    <div>
                    <LoginForm onLogin={login} />
                    <p>You must log in to access Product and New Arrivals.</p>
                  </div>
                  )}
                </Route>
                <Route path="/about" component={About} />
                <Route path="/team" component={team} />
                <ProtectedRoute path="/new-arrivals" component={NewArrivals} />
                <ProtectedRoute path="/products" component={ProductList} />
                <Route path="/" component={Home} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />

    </Router>
  );
}

export default App;
