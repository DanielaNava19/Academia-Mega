import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  @Input() Info = {
    nombre: '',
    edad: 0,
    profesion: ''
  }

  @Output() mensaje = new EventEmitter();
  enviarMensaje(){
    this.mensaje.emit(this.Info.nombre)
  }
}
