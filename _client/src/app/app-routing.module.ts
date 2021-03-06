import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { InmuebleComponent } from './components/inmueble/inmueble.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
// import { LoginComponent } from './components/login/login.component';
// import { ProfileComponent } from './components/profile/profile.component';
// import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  {path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
  {path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },
  {path: 'asesor', loadChildren: () => import('./asesor/asesor.module').then(m => m.AsesorModule) },
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  {path: 'security', loadChildren: () => import('./security/security.module').then(m => m.SecurityModule) },
  {path: '', component: HomeComponent},
  {path: 'inmueble/:idInm', component: InmuebleComponent},
  {path: 'about', component: AboutComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo:'404', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
