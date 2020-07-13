import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//components
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HeaderComponent } from './miscellanous/header/header.component';
import { FooterComponent } from './miscellanous/footer/footer.component';
import { LoginComponent } from './user/login/login.component';
import { SubscribeComponent } from './user/subscribe/subscribe.component';
//material
import { MaterialModule } from 'src/material/material.module';
//ngrx
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { HomeComponent } from './miscellanous/home/home.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SubscribeComponent,
    HomeComponent,
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
