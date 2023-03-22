import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PorHacer } from "../por-hacer.model";
import {PorHacerService} from "../por-hacer.service";



@Component({
  selector: 'app-por-hacer-listado',
  templateUrl: './por-hacer-listado.component.html',
  styleUrls: ['./por-hacer-listado.component.css']
})
export class PorHacerListadoComponent implements OnInit {
  ListadoPorHacer: PorHacer[] | undefined;
  nuevoPH: PorHacer = new PorHacer();
  edicion = false;
  PorHacerEdicion: PorHacer = new PorHacer();

  constructor(private servicio: PorHacerService ) {}

  ngOnInit(): void {
    this.obtenerPorHacerTodos();
  }

  obtenerPorHacerTodos(): void {
    this.servicio.obtenerPorHacerTodos().toPromise()
      .then(datos => this.ListadoPorHacer = datos );
  }

  cambiarCompletado(miporhacer : PorHacer): void {
    miporhacer.completado = !miporhacer.completado;
    this.servicio.actualizarPorHacer (miporhacer).toPromise().then(actualizado => {
      // @ts-ignore
      const existente = this.ListadoPorHacer.find(ph => ph.id === actualizado.id);
      // @ts-ignore
      Object.assign(existente, actualizado);
    });
  }

  editar (datos: PorHacer):void {}

  borrar(id: string): void {}





}
