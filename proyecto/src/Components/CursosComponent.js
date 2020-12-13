import React, { Component } from "react";

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

export default class Cursos extends Component {
  cardList = [
    {
      title: "Hola",
      text: "Adios",
    },
    {
      title: "Holis",
      text: "Bye",
    },
    
    {
      title: "Programación",
      text: "Programacion",
    },
    {
      title: "Holis",
    },
    {
      title: "Holis",
    },
    {
      title: "Holis",
    }
  ];

  renderCard = (card, index) => {
    return (
      <Card
        onClick={() => console.log(index)}
        body
        style={{borderRadius: 25,backgroundColor: getColor(), border: 0}}
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
        <h1>Categorias</h1>
        <CardColumns>
          {this.cardList.map(this.renderCard)}
        </CardColumns>
        <br />
        
      </div>
    );
  }
}
