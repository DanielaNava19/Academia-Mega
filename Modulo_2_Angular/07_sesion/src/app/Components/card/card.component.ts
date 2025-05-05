import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  imports: [FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  title= "Esto es una card";
  contenido= "Esto es una card que vamos a estar trabajando";
  botonText= "Conocer mar";
  img="https://picsum.photos/640/640?r" + Math.random();

  mostrarAlerta(){
    alert("Hola Daniela");
  }
}

