import React, { Component } from "react";
import foto  from './fotoUsuario.png'
import birrete from './birrete.png'

const background={

    backgroundColor: "#F3DADA"
}


export default class UserInformation extends Component {
    render(){
        return(
            <div className="m-auto w-75" style={{ zIndex: 2 }}>
                <div class= "row">
                    <div class="col-4 card"style={background}>
                        <div class="card-body ">
                            <div class="row  d-flex align-items-center justify-content-center">
                                <img src= {foto} height="130" width="130"  />
                            </div>
                            <div class ="row  d-flex align-items-center justify-content-center">
                                <label for="name">Informacion Personal</label> 
                            </div>   
                            <div class="row " >
                                <label for="estudia">Estudia en </label>   
                                <div class ="d-flex justify-content-end">
                                    <label for="name">Tecnologico de Costa Rica </label> 
                                </div>
                            </div>
                            <div class="row  ">
                                <label for="correo">Correo:</label>
                                <label for="name">jane@example</label> 
                            </div>
                            <div class="row  ">
                                <label for="carné">Carné</label>
                                <label for="name">2017424546</label> 
                            </div>
                            <div class="row  ">
                                <label for="calificacion">Calificacion</label>
                                <label for="name">4</label> 
                            </div>
                        </div>
                    </div>
                    <div class ="col-8 ">
                        <div class ="row d-flex align-items-center justify-content-center">
                            <img src= {birrete} height="80" width="100"  />
                            <label for="usuario">Jane Foster</label>
                        </div>
                        <div class ="row d-flex align-items-center justify-content-center">
                            <label for="misTutorias">Mis tutorías</label>
                        </div>
                        <div >
                            <div class="mx-7 card" style={{backgroundColor: "#9FAAE4"}}>
                                <div class ="row d-flex align-items-center justify-content-center">
                                    <label for="modeloCascada">Modelo Cascada</label>
                                </div>
                                <div class ="row  d-flex align-items-center justify-content-center" >
                                    <div class="card-body mx-5 my-2" style={{backgroundColor: "#FFFFFF"}}>
                                        <img src= {foto} height="30" width="30"  />   
                                        <label for="Jane Foster" >Jane Foster</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}