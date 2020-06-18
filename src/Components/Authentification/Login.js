import React from 'react';
import { Redirect } from 'react-router-dom'



export default class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      redirectToReferrer: false
    }
  }
  login = (e) => {
    e.preventDefault()
    fakeAuth.authenticate(() => {


      this.setState({ redirectToReferrer: true })
    })
    // this.setState({ redirectToReferrer: true })

  }
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state;


    if (redirectToReferrer) {
      return (
        <Redirect to={from} />
      )
    }

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>


      </div>
    )
  }
}



export const fakeAuth = {

  isAuthenticated: false,
  authenticate(x) {
    this.isAuthenticated = true
    setTimeout(x, 1000)
  },
}


