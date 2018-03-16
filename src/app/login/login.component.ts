import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '.././services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public token: string;
  processing = false;
  error = '';
  isLoggedIn = false;

  constructor(
    private userService: UserService,
    private router: Router
    )
  {}

  ngOnInit() {
  }

  doLogin(email, password) {
    this.processing = true;
  	console.log(this.isLoggedIn);
  	this.userService.getLogin(email,password).subscribe(
  		data => {
          this.token = data['token'];
          console.log(this.token);
          console.log(data['status']);
          localStorage.setItem('currentUser', JSON.stringify({ 'user': data['user'], 'token': this.token }));

          console.log(localStorage);
          this.processing = false;
          this.isLoggedIn = true;
          this.router.navigate(['/dashboard']);
  		},
      err => {
        console.log(err.error.message);
        this.error = err.error.message;
        this.processing = false;
        this.isLoggedIn = false;
      }
  	);
  	
  } //end doLogin

  doLogout() {
    this.token = null;
    localStorage.removeItem('currentUser');
    this.isLoggedIn = false;
    this.router.navigate(['/']);  
  } //end doLogout

}
