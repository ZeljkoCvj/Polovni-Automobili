import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { SingupComponent } from './Components/Auth/singup/singup.component';
import { LoginComponent } from './Components/Auth/login/login.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'singup', component: SingupComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
