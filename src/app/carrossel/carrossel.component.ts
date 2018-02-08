import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.scss']
})
export class CarrosselComponent implements OnInit {
  i = 1;

  imagens = [
    'assets/banner1.jpg',
    'assets/banner2.jpg',
    'assets/banner3.jpg'
  ]

  imagemAtual = this.imagens[0];

  constructor() { 
    setInterval( () => {
      console.log('Trocou carrossel');
      this.imagemAtual = this.imagens[this.i];
      
      this.i++;

      if(this.i == this.imagens.length){
        this.i = 0;
      }

    }, 2000);
  }

  ngOnInit() {
  }

}
