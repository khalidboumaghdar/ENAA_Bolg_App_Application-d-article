 import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(private formbuilder: FormBuilder, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: [''],
      password: ['']
    });
  }

  login() {
    this.http.get<any>("http://localhost:3000/users").subscribe( res =>{
     
      alert(res[0].id)

    });
   
  }
}
