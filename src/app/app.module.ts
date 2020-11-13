import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './components/template/footer/footer.component';
import { AddComponent } from './components/competencias/add/add.component';
import { ListarComponent } from './components/competencias/listar/listar.component';
import { UpdateComponent } from './components/competencias/update/update.component';
import { HttpClientModule } from '@angular/common/http';
import { CompetenciaService } from './services/competencia.service';
import { HeaderComponent } from './components/template/header/header.component';
import { FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
  AppComponent,
  UpdateComponent,
    AddComponent,
    ListarComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CompetenciaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
