import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Crossroads-test';

  constructor(
    private apiService: ApiService
  ){}

  ngOnInit(){
    this.apiService.getCommits('/Crossroads-test/commits/master').subscribe((res:any) => {
      console.log(res);
    })
    this.apiService.getCommits('/repos').subscribe((res:any) => {
      console.log(res);
    })
  }
}
