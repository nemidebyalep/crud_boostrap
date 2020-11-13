import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Competencias } from 'src/app/models/competencias';
import { CompetenciaService } from 'src/app/services/competencia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  competencias:any;
  competencia:Competencias=new Competencias();
  constructor(private competenciaService:CompetenciaService,
    private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarCompetencia();
  }
  cargarCompetencia():void{
    this.activatedRoute.params.subscribe(params=>{
      let id = params['id']
      if(id){
        this.competenciaService.getCompetencia(id).subscribe(
          (data)=>{
            this.competencias=data['CURSOR_COMPETENCIAS']
            this.competencia.id_competencias=this.competencias[0].ID_COMPETENCIAS;
            this.competencia.nombre=this.competencias[0].NOMBRE;
            this.competencia.id_tipo_instrumento=this.competencias[0].ID_TIPO_INSTRUMENTO;
            this.competencia.id_linea_pa=this.competencias[0].ID_LINEA_PA;
            this.competencia.estado=this.competencias[0].ESTADO;
            this.competencia.descripcion=this.competencias[0].DESCRIPCION;
          }
        )
      }
    })
  }
  modificarCompetencia():void{
    this.competenciaService.updateCompetencia(this.competencia).subscribe(
      response=>{
        Swal.fire({
          title: 'Estas seguro?',
          text: "No podras revertir esto!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, update it!'
        }).then((result)=> {
          if (result.isConfirmed){
            this.router.navigate(['/listar'])
            Swal.fire(
              'Actualizado!',
              'El registro ha sido Modificado.',
              'success'
            )
          }
        }
        )
      }
    )
  }

}
