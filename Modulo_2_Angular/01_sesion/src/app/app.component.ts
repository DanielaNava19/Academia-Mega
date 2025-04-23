import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Bienvenidos a mi pagina web';
  name = 'Adriana Daniela Nava Juárez';
  dato = 'Ingeniero de control de calidad';
}
