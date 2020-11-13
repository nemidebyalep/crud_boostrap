import { Injectable } from '@angular/core';

import { Observable, Subscription, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent} from '@angular/common/http';
import { Competencias } from '../models/competencias';
@Injectable({
  providedIn: 'root'
})
export class CompetenciaService {

  private httpHeaders = new HttpHeaders({ 'Content-Type':'application/json'});
  private competenciaUrl:string='http://localhost:9090/competencias';//endpoint
  constructor(private http: HttpClient) { }

  getCompetencias():Observable<Competencias[]>{
    return this.http.get<Competencias[]>(this.competenciaUrl+'/all'); 
  }
  getCompetencia(id:number):Observable<Object>{
    return this.http.get(`${this.competenciaUrl}/${id}`); 
  }
  addCompetencia(competencia: Competencias): Observable<number>{
    return this.http.post<number>(this.competenciaUrl+"/add", competencia, {headers:this.httpHeaders});
  }
  deleteCompetencia(id: number): Observable<number>{
    return this.http.delete<number>(this.competenciaUrl+"/delete/"+id,{headers:this.httpHeaders});
  }
  updateCompetencia(competencia: Competencias):Observable<number> {
    return this.http.put<number>
    (`${this.competenciaUrl}/update/${competencia.id_competencias}`, competencia, {headers:this.httpHeaders});
  }
}
