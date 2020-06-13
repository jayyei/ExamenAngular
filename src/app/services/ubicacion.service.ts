import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {

  constructor(private http: HttpClient,
    private domSanitizer: DomSanitizer) {
   }

   getUbications(usuario: number){
    const url= "/api/obtieneCoordenadasXUsuario"
    const body = {
      'usuarioid': `${usuario}`
    };
    return this.http.post(url,  body )
   }
}
