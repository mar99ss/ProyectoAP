import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Home from "./HomeComponent";
import Login from "./LoginComponent";
import Header from "./HeaderComponent";
import Categorias from "./CategoriasComponent";
import Cursos from "./CursosComponent";
import Temas from "./TemasComponent";

class Main extends Component {
  render() {
    const HomePage = () => {
      return (
        <div>
          <Header />
          <Home />
        </div>
      );
    };

    const LoginPage = () => {
      return <Login />;
    };

    const CategoriasPage = () => {
      return (
        <div> 
            <Header/>
            <Categorias />
        </div>
      );  
    };
    const CursosPage = () => {
      return (
        <div> 
            <Header/>
            <Cursos />
        </div>
      );  
    };
    const TemasPage = () => {
      return (
        <div> 
            <Header/>
            <Temas />
        </div>
      );  
    };

    return (
      <div>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/Categorias" component={CategoriasPage} />
          <Route path="/Cursos" component={CursosPage} />
          <Route path="/Temas" component={TemasPage} />
          <Redirect to="/login" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Main);
