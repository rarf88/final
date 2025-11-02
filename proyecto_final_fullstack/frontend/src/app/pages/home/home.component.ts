import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../../core/services/training.service';

@Component({
  template: `
    <h1>Capacitaciones</h1>
    <p>Lista de sesiones próximas (demo):</p>
    <div *ngFor="let item of list" class="card">
      <h3>{{item.title}}</h3>
      <p>Fecha: {{item.date | date}}</p>
      <p>Modalidad: {{item.mode}}</p>
      <p>Responsable: {{item.owner}}</p>
    </div>
  `,
  styles: [`.card{border:1px solid #ddd;padding:12px;margin:8px 0;border-radius:6px}`]
})
export class HomeComponent implements OnInit{
  list:any[] = [];
  constructor(private training: TrainingService){}
  ngOnInit(){
    this.training.getAll().subscribe((res:any)=> this.list = res.data || []);
  }
}
