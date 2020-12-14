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
import UserInformation from "./UserInformationComponent";
import ListaTutoria from "./ListaTutoriasPooComponent";
import ListaTutoriaAleman from "./ListaTutoriasAlemanComponent";
import ListaTutoriaEstadistica from "./ListaTutoriasEstadisticaComponent";
import ListaTutoriaIngles from "./ListaTutoriasInglesComponent";
import ListaTutoriaOrigami from "./ListaTutoriasOrigamiComponent";
import ListaTutoriaPintura from "./ListaTutoriasPinturaComponent";
import ListaTutoriaProb from "./ListaTutoriasProbabilidadComponent";
import Tutoria from "./TutoriaComponent";
import history from './History';

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
        return(
            <Login />
        );
      } 
    const UserInformationPage = () => {
      return(
        <div>
          <Header />
          <UserInformation/>
        </div>
      );
    } 
    const ListaTutoriaPage = () => {
      return(
          <div>
            <Header/>
            <ListaTutoria/>
          </div>
      );
    } 

    const ListaTutoriaAlemanPage = () => {
      return(
          <div>
            <Header/>
            <ListaTutoriaAleman/>
          </div>
      );
    } 
    const ListaTutoriaEstadisticaPage = () => {
      return(
          <div>
            <Header/>
            <ListaTutoriaEstadistica/>
          </div>
      );
    } 
    const ListaTutoriaInglesPage = () => {
      return(
          <div>
            <Header/>
            <ListaTutoriaIngles/>
          </div>
      );
    } 

    const ListaTutoriaOrigamiPage = () => {
      return(
          <div>
            <Header/>
            <ListaTutoriaOrigami/>
          </div>
      );
    } 

    const ListaTutoriaPinturaPage = () => {
      return(
          <div>
            <Header/>
            <ListaTutoriaPintura/>
          </div>
      );
    } 
    const ListaTutoriaProbPage = () => {
      return(
          <div>
            <Header/>
            <ListaTutoriaProb/>
          </div>
      );
    } 

    const TutoriaPage=() => {
      return(
        <div>
            <Header/>
            <Tutoria/>
        </div>
      );
    }

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
            <Route path="/listatutoria" component={ListaTutoriaPage} />
            <Route path="/userinformation" component={UserInformationPage} />
            <Route path="/Categorias" component={CategoriasPage} />
            <Route path="/Programacion" component={CursosProgramacion} />
            <Route path="/Artes" component={CursosArtes} />
            <Route path="/Lenguajes" component={CursosLenguajes} />
            <Route path="/Matematicas" component={CursosMatematicas} />
            <Route path="/listaTutoriaAleman" component={ListaTutoriaAlemanPage} />
            <Route path="/listaTutoriaEstadistica" component={ListaTutoriaEstadisticaPage} />
            <Route path="/listaTutoriaIngles" component={ListaTutoriaInglesPage} />
            <Route path="/listaTutoriaOrigami" component={ListaTutoriaOrigamiPage} />
            <Route path="/listaTutoriaPintura" component={ListaTutoriaPinturaPage} />
            <Route path="/listaTutoriaProbabilidad" component={ListaTutoriaProbPage} />
            <Route path="/tutoria" component={TutoriaPage} />
            <Redirect to="/login" />
          </Switch>
        </Router>
        
      </div>
    );
  }
}

export default withRouter(Main);
