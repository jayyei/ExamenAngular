import { Component } from '@angular/core';
import { UbicacionService } from './services/ubicacion.service';
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo:string="pinmap";

  position:any={
    lat:0,
    lng:0
  }
  label:any={
    color:'white',
    text:'marcador'
  }
  usuario:number=703021;

  dataArray: any[] = [];


  constructor(private ubicacionService:UbicacionService){
    this.newlyUbication();
  }

  newlyUbication(){
    this.ubicacionService.getUbications(this.usuario).subscribe(
      (data:any)=>{
        this.dataArray = data.sort(this.arraySort);
        let element : any = this.dataArray[0];
        this.position = {
          lat : element.latitud,
          lng: element.longitud
        }
      },(console.log)
    )
  }

  arraySort(a,b){
    let dateA: Date = new Date(a.createdAt);
    let dateB: Date = new Date(b.createdAt);
    if (dateA.getTime() < dateB.getTime()) {
      return 1;
    }
    if (dateA.getTime()  > dateB.getTime()) {
      return -1;
    }
    return 0;
  }


  }

