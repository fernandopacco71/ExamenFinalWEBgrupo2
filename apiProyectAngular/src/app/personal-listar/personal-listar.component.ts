import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
@Component({
  selector: 'app-personal-listar',
  templateUrl: './personal-listar.component.html',
  styleUrls: ['./personal-listar.component.css']
})
export class PersonalListarComponent implements OnInit {
  Personal: any = [];
  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit() {
    this.loadPersonal()
  }
  // Get employees list
  loadPersonal() {
    return this.restApi.getpersonal().subscribe((data: {}) => {
      this.Personal = data;
    })
  }

// Delete employee
eliminarpersonal(id:number) {
  if (window.confirm('estas seguro que quieres eliminar este personal?')){
    this.restApi.eliminarPersonal(id).subscribe(data => {
      this.loadPersonal()
    })
  }
} 
}
