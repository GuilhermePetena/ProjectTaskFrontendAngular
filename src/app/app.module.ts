import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { StoriesModule } from './stories/stories.module';
import { StoriesService } from './stories.service';
import { TasksService } from './tasks.service';
import { LandingModule } from './landing/landing.module';
import { LandingComponent } from './landing/landing/landing.component';
import { LayoutComponent } from './layout/layout.component';
import { TaskModule } from './task/task.module';
import { FilesModule } from './files/files.module';
import { FilesFormComponent } from './files/files-form/files-form.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { TokenInterceptor } from './token.interceptor';

@NgModule({
  declarations: [AppComponent, HomeComponent, LayoutComponent, LoginComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    StoriesModule,
    LandingModule,
    TaskModule,
    FilesModule,
    FormsModule,
  ],
  providers: [
    StoriesService,
    TasksService,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
