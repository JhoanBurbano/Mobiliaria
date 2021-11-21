import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.navDinamic(this.cookieService.get("ACCESS_TOKEN"), this.cookieService.get("USER") )
  }
  constructor(private cookieService: CookieService){}
  title = 'Architect';
  list = [{
    name: 'Login',
    url: '/auth/login',
    icon: 'fas fa-user'
  },{
    name: 'Signup',
    url: '/auth/signup',
    icon: 'fas fa-user'
  },
]
  navDinamic(token:string, name: string){
    if(token){
      this.list = [{
        name: `hello, ${name}`,
        url: '/profile/board',
        icon: 'fas fa-user'
      },{
        name: 'Profile',
        url: '/profile/my-account',
        icon: 'fas fa-user'
      },{
        name: 'Logout',
        url: '/profile/logout',
        icon: 'fas fa-user'
      },
    ]
    }
  }
}