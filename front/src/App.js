import React from 'react';

import axios from 'axios';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import {MDBContainer ,MDBRow, MDBCol, MDBBtn,MDBInput } from "mdbreact";

class App extends React.Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    age: "",
    phone: "",
    address: "",
    password: "",
    conf_password: "",
    gender: "",
    reminder: ""
  };
  onClick = (nr) => () => {
    this.setState({
      gender: nr
    });
  }
  submitHandler = event => {
    event.preventDefault();
    axios.post(`http://localhost:3000/users/registration`,  this.state )
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="app">
        <MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form className="needs-validation"
          onSubmit={this.submitHandler}
          noValidate action="./Registration" method="post">
   <MDBRow>
            <MDBCol md="12" className="mb-3">
              <label
                htmlFor="defaultFormRegisterNameEx"
                className="grey-text"
              >
                First name
              </label>
              <input
                value={this.state.first_name}
                name="first_name"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
                placeholder="First name"
                required
                minLength="2"
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="12" className="mb-3">
              <label
                htmlFor="defaultFormRegisterEmailEx2"
                className="grey-text"
              >
                Last name
              </label>
              <input
              minLength="5"
                value={this.state.last_name}
                name="last_name"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterEmailEx2"
                className="form-control"
                placeholder="Last name"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="12" className="mb-3">
              <label
                htmlFor="phone"
                className="grey-text"
              >
                Phone
              </label>
              <input
                value={this.state.phone}
                name="phone"
                onChange={this.changeHandler}
                type="tel"
                id="phone"
                className="form-control"
                placeholder="Phone"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="12" className="mb-3">
              <label
                htmlFor="age"
                className="grey-text"
              >
                Age
              </label>
              <input
                value={this.state.age}
                name="age"
                onChange={this.changeHandler}
                type="number"
                id="age"
                className="form-control"
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="12" className="mb-3">
            <div className="custom-control custom-radio pl-3">
              <input
                className="custom-control-input"
                onClick={this.onClick("man")}
                type="radio"
                value=""
                id="radio0"
                name="gender"
                
              />
              <label className="custom-control-label" htmlFor="radio0">
                Man
              </label>
            </div>
          </MDBCol>
          <MDBCol md="12" className="mb-3">
            <div className="custom-control custom-radio pl-3">
              <input
                className="custom-control-input"
                onClick={this.onClick("woman")}
                type="radio"
                value=""
                id="radio1"
                name="gender"
                
              />
              <label className="custom-control-label" htmlFor="radio1">
                Woman
              </label>
            </div>
          </MDBCol>
          <MDBCol md="12" className="mb-3">
              <label
                htmlFor="defaultFormRegisterConfirmEx3"
                className="grey-text"
              >
                Address
              </label>
              <input
                value={this.state.address}
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterConfirmEx3"
                className="form-control"
                name="address"
                placeholder="address"
              />
            </MDBCol>
            <MDBCol md="12" className="mb-3">
              <label
                htmlFor="defaultFormRegisterConfirmEx3"
                className="grey-text"
              >
                Email
              </label>
              <input
                value={this.state.email}
                onChange={this.changeHandler}
                type="email"
                id="defaultFormRegisterConfirmEx3"
                className="form-control"
                name="email"
                required
                placeholder="Your Email address"
              />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="12" className="mb-3">
              <label
                htmlFor="password"
                className="grey-text"
              >
                Password
              </label>
              <input
                value={this.state.password}
                onChange={this.changeHandler}
                type="password"
                id="password"
                className="form-control"
                name="password"
                placeholder="password"
                minLength="9"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid city.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="12" className="mb-3">
              <label
                htmlFor="confirmPassword"
                className="grey-text"
              >
                Confirm Passord
              </label>
              <input
                value={this.state.state}
                onChange={this.changeHandler}
                type="password"
                id="confirmPassword"
                className="form-control"
                name="conf_password"
                placeholder="Confirm Password"
                minLength="9"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid state.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="12" className="mb-3">
              <label
                htmlFor="confirmPassword"
                className="grey-text"
              >
                    reminder
              </label>
              <input
                value={this.state.state}
                onChange={this.changeHandler}
                type="text"
                id="reminder"
                className="form-control"
                name="reminder"
                placeholder="reminder"
                maxLength="10"
              />
              <div className="invalid-feedback">
                Please provide a valid state.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
           
          </MDBRow>
  
          <MDBBtn color="primary" type="submit">
           Sign Up
          </MDBBtn>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
      </div>
    );
  }
}

export default App;