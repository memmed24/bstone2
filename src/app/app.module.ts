import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin-index/admin.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminProjectsIndexComponent } from './admin/admin-index/admin-projects-index/admin-projects-index.component';
import { IndexComponent } from './admin/admin-index/index/index.component';
import { ProjectService } from './services/project.service';
import { HttpModule } from '@angular/http';
import { CookieService } from './services/cookie.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    AdminProjectsIndexComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    ProjectService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
