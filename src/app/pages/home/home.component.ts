import { DataService } from './../../services/data/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: Array<any> = [];
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
  }
  search(text) {
    if (text.length > 1) {
      this.dataService.getUsers(text)
        .subscribe(res => {
          this.users = res.items;
          console.log(res);
        });
    }
  }

}
