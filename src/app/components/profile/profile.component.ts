import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})

export class ProfileComponent{
  data: any;
  constructor(private profileService: ProfileService) {}

  getProfileInfo():void{
    this.data = this.profileService.getProfileInfo().subscribe((profile: any) => {
      console.log(profile);
    });
  }
  ngOnInit(): void {
    this.getProfileInfo();
  }
}
