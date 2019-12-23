import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Crossroads-test';
  commitData:any = [];

  constructor(
    private apiService: ApiService
  ){}

  ngOnInit(){
    this.apiService.getCommits('/Crossroads-test/commits').subscribe((res:any) => {         //get commit data
      res.forEach(async(ele:any) => {
        console.log(ele);
        let dt = await this.convert(ele.commit.committer.date);                             //convert date
        this.commitData.push({
          author: ele.commit.committer.name,
          dt: dt,
          message: ele.commit.message,
        })
      });
      console.log(this.commitData);
    })
  }


convert(timestamp) {
  console.log(timestamp);
  var date = new Date(timestamp);               // Convert to date

  console.log(date);
  return [
    ("0" + date.getDate()).slice(-2),           // Get day and pad it with zeroes
    ("0" + (date.getMonth()+1)).slice(-2),      // Get month and pad it with zeroes
    date.getFullYear()                          // Get full year
  ].join('/');                                  // Glue the pieces together
}
}
