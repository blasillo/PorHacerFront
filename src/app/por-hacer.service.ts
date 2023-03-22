import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import {PorHacer} from './por-hacer.model';

@Injectable({
  providedIn: 'root'
})
export class PorHacerService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  obtenerPorHacerTodos(): Observable<PorHacer[]> {
    return this.http.get<PorHacer[]>(this.baseUrl + '/v1/porhacer/')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  crearPorHacer (datos: PorHacer): Observable<PorHacer> {
    return this.http.post<PorHacer>(this.baseUrl + '/v1/porhacer/', datos)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  actualizarPorHacer(datos: PorHacer): Observable<PorHacer> {
    return this.http.patch<PorHacer>(this.baseUrl + '/v1/porhacer/', datos)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }




  private handleError(error:any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Código Error: ${error.status}\nMensaje: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
