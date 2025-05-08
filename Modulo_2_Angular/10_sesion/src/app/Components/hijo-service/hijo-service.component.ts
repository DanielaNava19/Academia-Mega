import { Component } from '@angular/core';
import { DataService } from '../../Service/data.service';

@Component({
  selector: 'app-hijo-service',
  imports: [],
  templateUrl: './hijo-service.component.html',
  styleUrl: './hijo-service.component.css'
})
export class HijoServiceComponent {
  message="";

  constructor(private DataService: DataService){

  }

  ngOnInit(){
    this.message = this.DataService.getMessage();
  }

  ngDoCheck(){
    this.message = this.DataService.getMessage();
  }
}
