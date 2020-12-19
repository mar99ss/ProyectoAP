import React, { Component } from "react";
import history from './History'
import {
  Card,
  CardTitle,
  CardText,
  CardColumns
} from "reactstrap";

const textStyle = {
  textAlign:'center'
}

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

export default class Home extends Component {

  formato = (texto) => {
    texto = texto.toLowerCase();
    return texto.replace(/ /g, "");
  };

  recientes = [
    {
      title: "Probabilidad",
      text: "Probabilidades",
    },
    
    {
      title: "Modelo de cascada",
      text: "POO",
    }
  ];

  matematicas = [
    {
      title: "Probabilidades",
      text: "",
    },
    {
      title: "Estadistica",
      text: "",
    }
  ];

  programacion = [
    {
      title: "Estructuras de datos",
      text: "",
    },
    {
      title: "POO",
      text: "",
    }
  ];

  guardados = [
    {
      title: "Analisis de relacion",
      text: "Estadistica",
    },
    {
      title: "Modelo de cascada",
      text: "POO",
    },
    {
      title: "Introduccion a los patrones de diseño",
      text: "POO",
    }
  ];

  renderCardText = (card, index) => {
    return (
      <Card
        onClick={() => history.push('/'+this.formato(card.title+card.text))}
        body
        style={{borderRadius: 25, backgroundColor: getColor(), border: 0}}
        key={index}
      >
        <CardTitle style={textStyle} tag="h5">{card.title}</CardTitle>
        <CardText style={textStyle}>{card.text}</CardText>
      </Card>
    );
  };

  renderCardTitle = (card, index) => {
    return (
      <Card
        onClick={() => history.push('/'+this.formato(card.title))}
        body
        style={{borderRadius: 25, backgroundColor: getColor(), border: 0}}
        key={index}
      >
        <CardTitle style={textStyle} tag="h5">{card.title}</CardTitle>
        <CardText style={textStyle}>{card.text}</CardText>
      </Card>
    );
  };

  render() {
    return (
      <div class="container">
        <br />
        <h1>Recientes</h1>
        <CardColumns>
          {this.recientes.map(this.renderCardText)}
        </CardColumns>
        <br />
        <h1>Explorar</h1>
        <div class = 'container'>
          <h4>Matemáticas</h4>
          <CardColumns>
            {this.matematicas.map(this.renderCardTitle)}
          </CardColumns>
        </div>
        <div class = 'container'>
          <h4>Programación</h4>
          <CardColumns>
            {this.programacion.map(this.renderCardTitle)}
          </CardColumns>
        </div>
        <br />
        <h1>Guardados</h1>
        <CardColumns>
          {this.guardados.map(this.renderCardText)}
        </CardColumns>
      </div>
    );
  }
}
