import React, {Component} from 'react';
import SignupForm from './components/SignupForm'
import Home from './components/Home'
import ProfileContainer from './ProfileComponents/ProfileContainer'
import MoviesContainer from './MoviesComponents/MoviesContainer'
import {Switch, Route} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
// import Button from 'react-bootstrap/Button'
// import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
// import {LinkContainer} from 'react-router-bootstrap'
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/esm/Nav';
import NavBar from './components/NavBar'

class App extends Component {
  state = {
    user: null
  }

  componentDidMount() {
    const token = localStorage.getItem("token")
    if(token){
      fetch("https://shobiz-backend.herokuapp.com/users/stay_logged_in",{
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(r => r.json())
      .then(this.handleResponse)
    }
  }

  handleLoginSubmit = (userInfo) => {
    fetch("https://shobiz-backend.herokuapp.com/login", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
      .then(r => r.json())
      .then(this.handleResponse)
  }


  handleRegisterSubmit = (userInfo) => {
    fetch("https://shobiz-backend.herokuapp.com/users", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
      .then(r => r.json())
      .then(this.handleResponse)
  }

  handleResponse = (resp) => {
    if(resp.user){
      localStorage.setItem("token", resp.token)
      this.setState(resp, () => {
        this.props.history.push("/profile")
      })
    } else {
      // alert(resp.error)
    }
  }

  renderForm = (routerProps) => {
    if(routerProps.location.pathname === "/login"){
      return <SignupForm 
        formName="Login Form"
        handleSubmit={this.handleLoginSubmit}
      />
    } else if (routerProps.location.pathname === "/register") {
      return <SignupForm
        formName="Register Form"
        handleSubmit={this.handleRegisterSubmit}
      />
    }
  }

  renderProfile = (routerProps) => {
    if (this.state.token) {
      return <ProfileContainer user={this.state.user} token={this.state.token} /> 
    }
    else {
      this.props.history.push("/login") 
    }
  }

  render(){
    return (
      <div className="App">
        {/* <NavBar bg="light" expand="lg"/>
        <Switch>
          <Route path="/login" render={ this.renderForm } />
          <Route path="/register" render={ this.renderForm } />
          <Route path="/profile" render={this.renderProfile} />
          <Route path="/movies" exact component={MoviesContainer} />
          <Route path="/" exact component={Home} />
          <Route render={ () => <p>Page not Found</p> } />
        </Switch> */}
            <Jumbotron > 
              <Container>
                <h1 className="header">Welcome to Shobiz</h1>
                {/* <h2>
                  <ButtonToolbar className="custom-btn-toolbar">
                    <LinkContainer to="/">
                      <Button>Home</Button>
                    </LinkContainer>
                    <LinkContainer to="/login">
                      <Button>Login</Button>
                    </LinkContainer>
                    <LinkContainer to="/register">
                      <Button>Register</Button>
                    </LinkContainer>
                    <LinkContainer to="/profile">
                      <Button>Profile</Button>
                    </LinkContainer>
                    <LinkContainer to="/movies">
                      <Button>Movies</Button>
                    </LinkContainer>
                  </ButtonToolbar>
                </h2> */}
                {/* <>
                  <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                    <Navbar.Brand href="/">Shobiz</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" /> 
                    <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav className="mr-auto">
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/register">Register</Nav.Link>
                        <Nav.Link href="/profile">Profile</Nav.Link>
                        <Nav.Link href="/movies">Movies</Nav.Link>
                      </Nav>
                    </Navbar.Collapse>
                  </Navbar>
                </> */}
                <NavBar /> 
                  <Switch>
                    <Route path="/login" render={this.renderForm} /> 
                    <Route path="/register" render={this.renderForm} /> 
                    <Route path="/profile" render={this.renderProfile} />
                    <Route path="/movies" render={() => <MoviesContainer user={this.state.user} userId={this.state.user.id}/>} /> 
                    <Route path="/" exact component={Home} />
                    <Route render={() => <p>Page not Found</p>} /> 
                  </Switch>
              </Container>
            </Jumbotron>
      </div>
    );
  }
}

export default withRouter(App);
