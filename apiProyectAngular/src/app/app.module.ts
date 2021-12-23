import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalCrearComponent } from './personal-crear/personal-crear.component';
import { PersonalEditarComponent } from './personal-editar/personal-editar.component';
import { PersonalListarComponent } from './personal-listar/personal-listar.component';
import { HttpClientModule } from '@angular/common/http';


// Forms module
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PersonalCrearComponent,
    PersonalEditarComponent,
    PersonalListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
