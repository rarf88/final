import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';

@Component({
  template: `
    <h1>Dashboard</h1>
    <p *ngIf="!me">Cargando...</p>
    <div *ngIf="me">
      <p>Hola, {{me.name}} ({{me.email}})</p>
      <p>Acá puedes ver tus próximas sesiones y tu historial (demo).</p>
    </div>
  `
})
export class DashboardComponent implements OnInit{
  me:any;
  constructor(private user:UserService){}
  ngOnInit(){ this.user.me().subscribe((res:any)=> this.me = res.data); }
}
