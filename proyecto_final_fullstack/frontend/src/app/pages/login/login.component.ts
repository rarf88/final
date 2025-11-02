import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  template: `
  <h1>Ingresar</h1>
  <form [formGroup]="form" (ngSubmit)="onSubmit()">
    <label>Correo</label>
    <input formControlName="email" type="email" placeholder="tu@correo.com"/>
    <div class="error" *ngIf="form.get('email')?.touched && form.get('email')?.invalid">Pon un correo válido</div>

    <label>Contraseña</label>
    <input formControlName="password" type="password" placeholder="mínimo 6 caracteres"/>
    <div class="error" *ngIf="form.get('password')?.touched && form.get('password')?.invalid">Revisa la contraseña</div>

    <button [disabled]="form.invalid">Entrar</button>
  </form>
  `,
  styles: [`.error{color:#c33;font-size:12px;margin:4px 0}`]
})
export class LoginComponent{
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  constructor(private fb:FormBuilder, private auth:AuthService, private router:Router){}
  onSubmit(){
    if(this.form.invalid) return;
    this.auth.login(this.form.value).subscribe(()=> this.router.navigateByUrl('/dashboard'));
  }
}
