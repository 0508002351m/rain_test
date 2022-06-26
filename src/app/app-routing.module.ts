import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { IntroComponent } from './pages/intro/intro.component';
import { LightComponent } from './pages/light/light.component';
import { LoginComponent } from './pages/login/login.component';
import { VideosComponent } from './pages/videos/videos.component';
import { WorkflowRuntimeComponent } from './pages/workflow-runtime/workflow-runtime.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"intro",component:IntroComponent},
  {path:"videos",component:VideosComponent},
  {path:"runtime",component:WorkflowRuntimeComponent},
  {path:"light",component:LightComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
