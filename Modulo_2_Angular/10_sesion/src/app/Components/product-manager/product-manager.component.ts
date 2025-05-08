import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-manager',
  imports: [CommonModule],
  templateUrl: './product-manager.component.html',
  styleUrl: './product-manager.component.css'
})
export class ProductManagerComponent {
  categoriaSeleccionada ="";

  productos= {
    electronica:[
      {nombre:"Laptop", precio:1200, disponible:true, descuento:10},
      {nombre:"Smartphone", precio:800, disponible:false, descuento:0}
    ],
    ropa:[
      {nombre:"Camisa", precio:300, disponible:true, descuento:5},
      {nombre:"Jeans", precio:500, disponible:true, descuento:0}
    ],
    alimentos:[
      {nombre:"Carnes", precio:150, disponible:true, descuento:0},
      {nombre:"Verduras", precio:100, disponible:true, descuento:10}
    ]
  }

  cambiarCategoria(cat:string){
    this.categoriaSeleccionada=cat;
  }
}
