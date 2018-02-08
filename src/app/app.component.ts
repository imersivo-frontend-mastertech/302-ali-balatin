import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  mostrarCta = false;

  produtos = [
    {
      nome: "Polystation",
      valor: "R$ 400,00",
      imagem: "assets/polystation.jpg"
    },
    {
      nome: "Hiphone",
      valor: "R$ 800,00",
      imagem: "assets/hiphone.jpg"
    },
    {
      nome: "HiWatch",
      valor: "R$ 600,00",
      imagem: "assets/hiwatch.jpg"
    },
    {
      nome: "Mp250",
      valor: "R$ 300,00",
      imagem: "assets/mp250.jpg"
    }
  ];

  constructor(){
    let sorteio = Math.ceil(Math.random() * 100);

    if(sorteio > 50){
      this.mostrarCta = true;
    }
  }
}
