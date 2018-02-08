import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  mostrarModal = false;

  constructor() { 
    setTimeout(() => {
      this.mostrarModal = true;
    }, 500);

  }

  ngOnInit() {
  }

  fechar(){
    this.mostrarModal = false;
  }

}
