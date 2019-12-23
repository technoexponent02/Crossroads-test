import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json','Authorization':'2f2c2af819ad69d33120bd5494b53dca4fa754ca' });

  constructor(
    private http: HttpClient
  ) { }

  getCommits(params:any){
    return this.http.get('https://api.github.com/repos/technoexponent02' + params,{headers: this.headers});
  }
}
