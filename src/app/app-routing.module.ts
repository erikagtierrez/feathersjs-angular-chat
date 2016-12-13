import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent }  from './login/login.component';
import { IndexComponent }  from './index/index.component';
import { SignupComponent }  from './signup/signup.component';

const appRoutes: Routes = [
	{ path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}