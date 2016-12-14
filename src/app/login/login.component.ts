import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { FeathersApiService } from '../feathers-api.service';
import 'rxjs/Rx';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[FeathersApiService]
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private feathersService: FeathersApiService) {
   }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    this.feathersService.login(form.value.email,form.value.password).subscribe(
      data => {
       if (data.token) {
          let authUser = {
            "email": form.value.email,
            "password": form.value.password
        	}
        	this.router.navigateByUrl("/chat");
      }else{
        console.log("Error on sign up " + data.code);
      }});
  }
}
