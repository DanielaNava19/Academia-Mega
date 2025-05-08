import { Component } from '@angular/core';
import { HijoComponent } from "../../Components/hijo/hijo.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [HijoComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
//Simulacion de una api

usuarios = [
  {nombre: "juan", edad: 25, profesion: "Ingeniero"},
  {nombre: "ana", edad: 23, profesion: "Diseñadora"},
  {nombre: "luis", edad: 34, profesion: "Estudiante"},
]

mensajeDelHijo = "";

recibirMensaje(mensaje: string){
  this.mensajeDelHijo= mensaje;
}

}
