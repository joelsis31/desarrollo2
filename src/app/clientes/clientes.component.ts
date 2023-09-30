import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  inicio(){
    this.router.navigate(['/Inicio'])
  }
}
