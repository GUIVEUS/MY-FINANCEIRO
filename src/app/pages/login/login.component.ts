import { Component,  } from '@angular/core';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup;


  constructor(
    public formBuilder: FormBuilder,
    private router: Router
  ){

  }

  

  ngOnInit():void {
    this.loginForm = this.formBuilder.group({
    
      
        email:['',[Validators.required, Validators.email]],
        senha:['',[Validators.required, Validators.minLength(6)]]
      });
    
  }

  get dadosForm() {
    return this.loginForm.controls
  }
  loginUser() {
    if (this.loginForm.valid) {
      alert("OK")
    } else {
      alert("Formulário inválido");
    }
    
  }
}
