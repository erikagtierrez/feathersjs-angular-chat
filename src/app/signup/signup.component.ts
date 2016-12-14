import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { FeathersApiService } from '../feathers-api.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
 providers:[FeathersApiService]
  })

export class SignupComponent implements OnInit {

 constructor(private router: Router, private feathersService: FeathersApiService) { }

  ngOnInit() {}

onSubmit(form: NgForm){
    this.feathersService.signup(form.value.email,form.value.password).subscribe(
      data => {
       if (data.id) {
          let authUser = {
            "email": form.value.email,
            "password": form.value.password
        	}
        	this.router.navigateByUrl("/chat");
      }
});
}
}

