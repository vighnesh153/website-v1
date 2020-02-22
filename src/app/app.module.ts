import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ConnectComponent } from './components/connect/connect.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ExperienceComponent,
    ConnectComponent,
    NotFoundComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
