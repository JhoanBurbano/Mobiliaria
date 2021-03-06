import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserTokenInterceptor } from './interceptors/user-token.interceptor';
import { CookieService } from 'ngx-cookie-service';
import { SecurityService } from './services/security.service';
import { UserService } from './services/user.service';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { InmuebleComponent } from './components/inmueble/inmueble.component';
import { RouterModule } from '@angular/router';
import { SliderCarouselModule } from 'slider-carousel';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
	declarations: [ 
    AppComponent, 
    HomeComponent, 
    NotFoundComponent, 
	AboutComponent,
	NavbarComponent,
 InmuebleComponent
   ],
	imports: [ 
    BrowserModule, 
    AppRoutingModule, 
    BrowserAnimationsModule, 
    ToastrModule.forRoot(), 
    HttpClientModule,
	RouterModule,
	SliderCarouselModule,
	ReactiveFormsModule
	 
],
	providers: [
		SecurityService,
		UserService,
		CookieService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: UserTokenInterceptor,
			multi: true
		}
	],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
