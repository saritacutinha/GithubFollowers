import { FollowersServiceService } from './../Services/followers-service.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  Followers : any;

  constructor(private _followerService : FollowersServiceService) { }

  ngOnInit(): void {
    this._followerService.getAll()
    .subscribe( followers =>
      {
        this.Followers = followers;
      })
    
  }

}
