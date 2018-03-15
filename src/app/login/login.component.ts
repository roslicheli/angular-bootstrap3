import { Component, OnInit } from '@angular/core';
import { UserService } from '.././services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  doLogin(email, password) {
  	console.log(email,password);
  	this.userService.getLogin(email,password).subscribe(
  		data => {
  			console.log(data);
  		}
  		// No error or completion callbacks here. They are optional, but
  		// you will get console errors if the Observable is in an error state.
  	);
  	
  } //end doLogin

}
