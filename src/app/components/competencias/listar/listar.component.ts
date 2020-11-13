import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompetenciaService } from 'src/app/services/competencia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  competencias:any;
  
  constructor(private competenciaService:CompetenciaService, private router: Router){ }

  ngOnInit(): void {
    this.listar();
  }
  listar(): void {
    this.competenciaService.getCompetencias().subscribe(
      (data)=>{
        this.competencias = data['CURSOR_COMPETENCIA']
        console.log(this.competencias)
      }
    )
  }
  delCompetencia(num:number):void{
        Swal.fire({
          title:'Estas seguro?',
          text: "No podras reverti esto!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'

          }).then((result)=>{
            if (result.isConfirmed){
              this.listar()
              Swal.fire(
                'Eliminado!',
                'El registro ha sido eliminado.',
                'success')
            }
            this.competenciaService.deleteCompetencia(num).subscribe(
              response=>{
              })
          })   
    }

}
