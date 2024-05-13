import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
// import {NgIf} from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  // schemas: [NO_ERRORS_SCHEMA]
})

export class ProfileComponent{
  profile: any;
  repos:any;
  username:string = "";
  constructor(private profileService: ProfileService) {}

  getProfileInfo():void{
    this.profileService.getProfileInfo().subscribe((profile: any) => {
      console.log(profile);
      this.profile = profile;
      console.log(this.profile.name);
    });
  }
  getProfileRepos():void{
    this.profileService.getProfileRepos().subscribe((repos: any) => {
      console.log(repos);
      this.repos = repos;
    });
  }
  findProfile():void{
    this.profileService.updateProfile(this.username);
    this.getProfileInfo();
    this.getProfileRepos();
  }
  ngOnInit(): void {
    this.getProfileInfo();
    this.getProfileRepos();
  }
}
