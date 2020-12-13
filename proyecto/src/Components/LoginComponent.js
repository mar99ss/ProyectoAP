import React, { Component } from "react";
import { Button, Form, FormGroup, Media } from "reactstrap";
import { BsEnvelope, BsLock } from "react-icons/bs"; 
import Background from "./backgroundLogin.png";
 
const login = {
  width: "100%",
  backgroundPosition: "bottom",
  opacity: "100",
  minHeight: "100vh",
  color: "white",
  position: "absolute",
  top: 0,
  left: 0
};

const background = {
  backgroundImage: `url(${Background})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  zIndex: 0,
  width: "100%",
  height: "100%",
  position: "absolute",
  top: 0,
  left: 0
};

const backgroundColor = {
  zIndex: 1,
  width: "100%",
  height: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  backgroundColor: "rgba(0,0,0,0.7)"
};

export default class Login extends Component {
  state = {
    emailAddress: "",
    password: ""
  };

  onSubmit = async e => {
    e.preventDefault();
    /*const hash = md5(this.state.password);
    const newNote = {
      emailAddress: this.state.emailAddress,
      password: hash
    };
    axios.post("http://localhost:3000/auth/login", newNote);
    */
    window.location.href = "/home";
  };

  onChangePass = async e => { 
   /* e.preventDefault(); 
    const newNote = {
      emailAddress: this.state.emailAddress, 
    };
    axios.post("http://localhost:3000/auth/forgetPassw", newNote);
    */
  };
  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div style={login} className="containerStyle d-flex">
        <div style={background}></div>
        <div style={backgroundColor}></div> 
        <div className="m-auto w-75" style={{ zIndex: 2 }}>
          <div className="row row-content mx-0 my-5">
            <div className="col-6 d-flex align-items-center justify-content-center">
              <Media>
                <Media left middle>
                  <Media object src="/images/logo.png " />
                </Media>
              </Media>
              
            </div>
            <div className="col-6 line-left d-flex align-items-center justify-content-center">
              <h1 className="title">Inicio de Sesión</h1>
            </div>
          </div>
          <div className="row row-content my-5">
            <div className="col-12 d-flex align-items-center justify-content-center ">
              <Form onSubmit={this.onSubmit} className="col-12 col-md-10 col-xl-8">
                  <FormGroup className="my-5 d-flex">
                    <input
                      type="email"
                      className=" input-control"
                      id="emailAddress"
                      name="emailAddress"
                      onChange={this.onInputChange}
                      value={this.state.emailAddress}
                      placeholder="Correo electrónico"
                    />
                    <span>
                      <BsEnvelope />
                    </span>
                  </FormGroup>
                
                
                  <FormGroup className="my-5 d-flex ">
                    <input
                      type="password"
                      className=" input-control"
                      id="password"
                      name="password"
                      onChange={this.onInputChange}
                      value={this.state.password}
                      placeholder="Contraseña"
                    />
                    <span>
                      <BsLock />
                    </span>
                  </FormGroup>
                
                <div className="row row-content mr-3 ">
                  <div className="col-8 col-md-4 col-xl-4 ">
                    <Button onClick={this.onChangePass} type="submit" value="submit" className="btn btn-S ">
                        ¿Olvidó su contraseña?
                      </Button>
                  </div>
                  <div className="col-4 col-md-4 col-xl-4 ">
                    <Button onClick={this.onSubmit} type="submit" value="submit" className="btn btn-S ">
                      Acceder
                    </Button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
