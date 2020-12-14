import React, { Component } from "react";
import foto  from './fotoUsuario.png'
import birrete from './birrete.png'

const getColor = () => {
    let h = 240 * Math.random();
    let l = 25 + 70 * Math.random();
    let s = 75 + 5 * Math.random();
    s /= 100;
    l /= 100;
  
    let c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
      m = l - c / 2,
      r = 0,
      g = 0,
      b = 0;
  
    if (0 <= h && h < 60) {
      r = c;
      g = x;
      b = 0;
    } else if (60 <= h && h < 120) {
      r = x;
      g = c;
      b = 0;
    } else if (120 <= h && h < 180) {
      r = 0;
      g = c;
      b = x;
    } else if (180 <= h && h < 240) {
      r = 0;
      g = x;
      b = c;
    } else if (240 <= h && h < 300) {
      r = x;
      g = 0;
      b = c;
    } else if (300 <= h && h < 360) {
      r = c;
      g = 0;
      b = x;
    }
    // Having obtained RGB, convert channels to hex
    r = Math.round((r + m) * 255).toString(16);
    g = Math.round((g + m) * 255).toString(16);
    b = Math.round((b + m) * 255).toString(16);
  
    // Prepend 0s, if necessary
    if (r.length === 1) r = "0" + r;
    if (g.length === 1) g = "0" + g;
    if (b.length === 1) b = "0" + b;
  
    return "#" + r + g + b;
  };
  

export default class UserInformation extends Component {
    render(){
        return(
            <div className="m-auto w-75" style={{ zIndex: 2 }}>
                <div class= "row">
                    <div class="col-4 card"style={{backgroundColor:getColor()}}>
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
                            <div class="mx-7 card" style={{backgroundColor:getColor()}}>
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