import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from "rxjs/operators";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username:string;
  private clientid = ""
  private clientsecret = "";

  constructor(@Inject(HttpClient)private http:HttpClient) {
    console.log("service is now ready!");
    this.username = "devansh-rai";
  }

  getProfileInfo(){
    const data = this.http.get("https://api.github.com/users/"+this.username+"?client_id="+this.clientid+"&client_secret="+this.clientsecret).pipe(tap((res: any) => res.json));
    // console.log(data);
    return data;
  }

  getProfileRepos(){
  	return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
  	.pipe(tap((res:any) => res.json));
  }

  updateProfile(username:string){
  	this.username = username;
  }
}
