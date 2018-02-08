import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { ProdutoComponent } from './produto/produto.component';
import { CarrosselComponent } from './carrossel/carrossel.component';
import { CtaComponent } from './cta/cta.component';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    ProdutoComponent,
    CarrosselComponent,
    CtaComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
