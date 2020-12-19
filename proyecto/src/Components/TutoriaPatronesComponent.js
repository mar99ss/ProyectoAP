import React, { Component } from "react";
import history from './History'
import {
    Card,
    CardTitle,
    CardText,
    CardColumns,
    Row
  } from "reactstrap";
  import video from './Video.png'

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
  
  const textStyle = {
    textAlign:'center'
  };


  export default class ListaTutoriaPatron extends Component {
    render(){
        return(
            <div class="container" style={{ zIndex: 2 }}>
                <br/>
                <h1 class="title">Introduccion a los patrones de diseño</h1>
                <div class="row"> 
                
                
                  <div class= " col-3">
                    <h5 >Jane Foster</h5>
                    <Card style={{borderRadius: 25,backgroundColor:getColor()}}>
                        <br/>
                        <CardTitle style={textStyle} >Publicado el 1 oct 2020</CardTitle>
                        <br/>
                        <CardText style={textStyle} >Este es un ejemplo de como aplicar el patron composite</CardText>
                    </Card>
                  </div>
                  <div class="col-6 justify-content-md-center">
                    <Row className="justify-content-md-center">
                      <Card style={{borderRadius: 25}} >
                        <br/>
                        <img  style={{ maxWidth: 1000 }}  src= {video} height="200" width="500"  />
                      </Card>
                    </Row>

                    <Row className="justify-content-md-center">
                      <Card style={{borderRadius: 25,backgroundColor:getColor()}} >
                        <CardTitle style={textStyle} >Publicado el 2 oct 2020</CardTitle>
                        <br/>
                        <CardText style={textStyle} >Esta es una excelente tutoria muy bien explicada</CardText>
                      </Card>
                    </Row>
                    <Row  >
                      <Card style={{borderRadius: 25}} >
                        <input
                          style={{color:"black"}}
        
                          className=" input-control"
                          id="comentario"
                          name="comentario"
                          placeholder="Comentario"
                        />
                        </Card>
                    </Row>
                    
                  </div>
                  
                </div>
            </div>

        );
    }
}