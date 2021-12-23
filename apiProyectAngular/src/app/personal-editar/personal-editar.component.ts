import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from "../shared/rest-api.service";
import { Personal } from '../shared/personal';
@Component({
  selector: 'app-personal-editar',
  templateUrl: './personal-editar.component.html',
  styleUrls: ['./personal-editar.component.css']
})
export class PersonalEditarComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  productoData: any = {};
  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() { 
    this.restApi.getpersonales(this.id).subscribe((data: {}) => {
      this.productoData = data;
    })
  }
    // actualizar personal
    updatePersonal() {
      if(window.confirm('estas seguro de actulaizar este registro del personal?')){
        this.restApi.updatePersonal(this.id, this.productoData).subscribe(data => {
          this.router.navigate(['/listar-personal'])
        })
      }
    }
}
