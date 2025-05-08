import { DataService } from './../../Service/data.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Data } from '@angular/router';
import { HijoServiceComponent } from '../../Components/hijo-service/hijo-service.component';

@Component({
  selector: 'app-service-page',
  imports: [FormsModule, HijoServiceComponent],
  templateUrl: './service-page.component.html',
  styleUrl: './service-page.component.css'
})
export class ServicePageComponent {
newMessage="";

constructor(private DataService: DataService){

}

updateMesaje(){
  this.DataService.setMessage(this.newMessage);
}
}
