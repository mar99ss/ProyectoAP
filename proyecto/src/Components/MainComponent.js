import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter, Router } from "react-router-dom";
import Home from "./HomeComponent";
import Login from "./LoginComponent";
import Header from "./HeaderComponent";
import Categorias from "./CategoriasComponent";
import Programacion from "./CursosProgramacionComponent";
import Artes from "./CursosArtesComponents";
import Lenguajes from "./CursosLenguajesComponent";
import Matematicas from "./CursosMatematicasComponents";
import history from './History'

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
    const CursosProgramacion = () => {
      return (
        <div> 
            <Header/>
            <Programacion />
        </div>
      );  
    };

    const CursosArtes = () => {
      return (
        <div> 
            <Header/>
            <Artes />
        </div>
      );  
    };
    const CursosLenguajes = () => {
      return (
        <div> 
            <Header/>
            <Lenguajes />
        </div>
      );  
    };
    const CursosMatematicas = () => {
      return (
        <div> 
            <Header/>
            <Matematicas />
        </div>
      );  
    };



    return (
      <div>
        <Router history = {history}> 
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/Categorias" component={CategoriasPage} />
            <Route path="/Programacion" component={CursosProgramacion} />
            <Route path="/Artes" component={CursosArtes} />
            <Route path="/Lenguajes" component={CursosLenguajes} />
            <Route path="/Matematicas" component={CursosMatematicas} />
            <Redirect to="/login" />
          </Switch>
        </Router>
        
      </div>
    );
  }
}

export default withRouter(Main);
