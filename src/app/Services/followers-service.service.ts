import { DataService } from './data.service';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FollowersServiceService extends DataService
{
  constructor( http : HttpClient) {    
    super('https://api.github.com/users/mosh-hamedani/followers',http);
  }
 
 }

 
    





 




