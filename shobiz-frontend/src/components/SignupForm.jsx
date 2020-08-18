import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button' 
class SignupForm extends Component {

  state = {
    username: "",
    password: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state)
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    let {formName} = this.props
    let {username, password} = this.state

    return (
      // <form onSubmit={this.handleSubmit}>
      //   <h1>{formName}</h1>
      //   <label htmlFor="username">Username:</label>
      //   <input type="text" autoComplete="off" name="username" value={username} onChange={this.handleChange}/>
      //   <label htmlFor="password">Password:</label>
      //   <input type="password" autoComplete="off" name="password" value={password} onChange={this.handleChange}/>
      //   <input type="submit" value="Submit"/>
      // </form> 
      <Form onSubmit={this.handleSubmit}>
        <h1>{formName}</h1>
        <Form.Group controlId="formGroupUsername">
          <Form.Label>Username</Form.Label> 
          <Form.Control onChange={this.handleChange} type="text" autoComplete="off" name="username" value={username} /> 
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Password</Form.Label> 
          <Form.Control onChange={this.handleChange} type="password" autoComplete="off" name="password" value={password} />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    );
  }

}

export default SignupForm;
