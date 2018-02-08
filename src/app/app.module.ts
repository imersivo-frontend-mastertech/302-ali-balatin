import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { ProdutoComponent } from './produto/produto.component';
import { CarrosselComponent } from './carrossel/carrossel.component';


@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    ProdutoComponent,
    CarrosselComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
