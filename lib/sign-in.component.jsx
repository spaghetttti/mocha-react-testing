import React from "react";

import FormInput from "./form-input.component";
// import { signInWithGoogle } from "../../firebase/firebase.utlls";
// import { auth } from "../../firebase/firebase.utlls";

//import "./sign-in.styles.scss";

class SignInComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => { //Function should be async (Problem with babel config)
    event.preventDefault();

    const {email, password} = this.state;
    
    try {
      //await auth.signInWithEmailAndPassword(email, password)
      alert(`Welcome back`)
      this.setState({email: "", password: "",})

    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in container">
        <h2 className='title'>Already have an account</h2>
        <span className='sub-title'>Sign in with your email and password</span>

        <form id='submit form' onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            id="email-input"
            onChange={this.handleChange}
            value={this.state.email}
            label="Email"
            required
          />
          <FormInput
            id="password-input"
            name="password"
            type="password"
            onChange={this.handleChange}
            value={this.state.password}
            label="Password"
            required
          />
          <div className="btn-flex">
            <button className="button" type="submit">Sign in</button>
            <button className="button button-google" onClick={this.handleChange}>Sign in with Google</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignInComponent;
