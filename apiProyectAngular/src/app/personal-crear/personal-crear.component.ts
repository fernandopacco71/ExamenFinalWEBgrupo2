import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from "../shared/rest-api.service";
import { Personal } from '../shared/personal';
@Component({
  selector: 'app-personal-crear',
  templateUrl: './personal-crear.component.html',
  styleUrls: ['./personal-crear.component.css']
})
export class PersonalCrearComponent implements OnInit {
  @Input() PersonalDetalle = { Nombres: '', Apellidos: '', DNI: '', Direccion: '',Sexo: '',Cargo: '',Telefono: '',Correo: ''}
  constructor(public restApi: RestApiService, 
    public router: Router) {

    }

  ngOnInit(): void {
  }

  addPersonal() {
    this.restApi.createPersonal(this.PersonalDetalle).subscribe((data: {}) => {
      this.router.navigate(['/listar-personal'])
    })
  }
}
