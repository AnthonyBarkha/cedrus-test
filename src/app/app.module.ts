import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GeneralComponent } from './components/general/general.component';
import { SpecialitiesComponent } from './components/specialities/specialities.component';
import { ContactComponent } from './components/contact/contact.component';
import { SpecialityItemComponent } from './components/specialities/speciality-item/speciality-item.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GeneralComponent,
    SpecialitiesComponent,
    ContactComponent,
    SpecialityItemComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
