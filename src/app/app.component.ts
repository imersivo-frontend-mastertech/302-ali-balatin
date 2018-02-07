import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  produtos = [
    {
      nome: "Polystation",
      valor: "R$ 400,00",
      imagem: "assets/polystation.jpg"
    },
    {
      nome: "Hiphone",
      valor: "R$ 800,00",
      imagem: "assets/polystation.jpg"
    },
    {
      nome: "HiWatch",
      valor: "R$ 600,00",
      imagem: "assets/polystation.jpg"
    },
    {
      nome: "Mp250",
      valor: "R$ 300,00",
      imagem: "assets/polystation.jpg"
    },
    {
      nome: "Computador Super",
      valor: "R$ 2300,00",
      imagem: "assets/polystation.jpg"
    }
  ];
}
