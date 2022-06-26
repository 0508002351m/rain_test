import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';
import { WindowComponent } from './shared/window/window.component';
import { IntroComponent } from './pages/intro/intro.component';
import { SimpleHeaderComponent } from './shared/simple-header/simple-header.component';
import { VideosComponent } from './pages/videos/videos.component';
import { WorkflowRuntimeComponent } from './pages/workflow-runtime/workflow-runtime.component';
import { LightComponent } from './pages/light/light.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    ProgressBarComponent,
    WindowComponent,
    IntroComponent,
    SimpleHeaderComponent,
    VideosComponent,
    WorkflowRuntimeComponent,
    LightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
