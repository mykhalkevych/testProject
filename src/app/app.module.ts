import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data/data.service';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
