import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav/nav.component';
import { HomeComponent } from './home/home/home.component';
import { PapelariaComponent } from './papelaria/papelaria/papelaria.component';
import { ContabilidadeComponent } from './contabilidade/contabilidade/contabilidade.component';
import { AdministracaoComponent } from './administracao/administracao/administracao.component';
import { DepartamentoPessoalComponent } from './departamento-pessoal/departamento-pessoal/departamento-pessoal.component';
import { DepartamentoFiscalComponent } from './departamento-fiscall/departamento-fiscal/departamento-fiscal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    PapelariaComponent,
    ContabilidadeComponent,
    AdministracaoComponent,
    DepartamentoPessoalComponent,
    DepartamentoFiscalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
