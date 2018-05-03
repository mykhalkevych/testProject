import { DataService } from './../../services/data/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: any = {};
  userRepos: Array<any> = [];
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit() {
    const username = this.route.snapshot.params['username'];
    this.dataService.getUser(username)
      .subscribe(res => {
        console.log(res);
        this.user = res;
      });
    this.dataService.getUserRepos(username)
      .subscribe(res => {
        console.log(res);
        this.userRepos = res;
      });
  }

}
