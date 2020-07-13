import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { LoginComponent } from './user/login/login.component';
import { SubscribeComponent } from './user/subscribe/subscribe.component';
import { HomeComponent } from './miscellanous/home/home.component';


const routes: Routes = [

  { path: "", redirectTo: "/Acceuil", pathMatch: "full" },
  {
    path: "Acceuil",
    component: NavigationBarComponent,
    children: [
      { path : "", component: HomeComponent},
      { path: "Login", component: LoginComponent },
      { path: "Subscribe", component: SubscribeComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
