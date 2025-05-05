import { Component } from '@angular/core';
import { ProductosComponent } from "../../Components/productos/productos.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos-info',
  imports: [ProductosComponent, CommonModule],
  templateUrl: './productos-info.component.html',
  styleUrl: './productos-info.component.css'
})
export class ProductosInfoComponent {
items=[
  {id: 1, nombre: "Producto A", descripcion: "Des del producto A", precio: 100},
  {id: 2, nombre: "Producto B", descripcion: "Des del producto B", precio: 200},
  {id: 3, nombre: "Producto C", descripcion: "Des del producto C", precio: 300},
  {id: 4, nombre: "Producto D", descripcion: "Des del producto D", precio: 400},
]
itemSeleccionado: any= null;

seleccionarItem(item: any){
  this.itemSeleccionado = item;
}
}
