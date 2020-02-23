import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';

import { SharedModule } from './shared/shared.module';
import { ClipboardModule } from 'ngx-clipboard';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ConnectComponent } from './components/connect/connect.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ToastMessagesComponent } from './components/toast-messages/toast-messages.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ExperienceComponent,
    ConnectComponent,
    NotFoundComponent,
    FooterComponent,
    ToastMessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    ClipboardModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
