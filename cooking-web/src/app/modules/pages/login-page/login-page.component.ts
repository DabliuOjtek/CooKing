import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  username: string;
  password: string;
  message: any

  // constructor(private service: RestapiService,private router:Router) { }
  constructor() { }

  ngOnInit(): void {
  }

  doLogin() {
    // let resp = this.service.login(this.username, this.password);
    // resp.subscribe(data => {
    //   this.message = data;
    //  this.router.navigate(["/home"])
    // });
  }

}
