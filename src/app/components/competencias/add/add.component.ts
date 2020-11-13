import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Competencias } from 'src/app/models/competencias';
import { CompetenciaService } from 'src/app/services/competencia.service';
import swal from 'sweetalert2';



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  competenciaModel:Competencias= new Competencias();
  constructor(private competenciaService:CompetenciaService,
    private router:Router, private activatedRoute:ActivatedRoute) { }


  ngOnInit(): void { }
  public create():void{
    
    this.competenciaService.addCompetencia(this.competenciaModel).subscribe(
      response=>{
        this.router.navigate(['/listar'])
      swal.fire('Nueva Competencia', `Competencia ${
        this.competenciaModel.nombre        
      } creado con exito`,"success")      
  })

  }


}
