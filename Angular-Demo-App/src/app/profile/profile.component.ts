import { Component } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { ProfileService } from '../service/profile.service';
import { UserInterface } from '../interfaces/UserInterface';
import { AngularUserInterface } from '../interfaces/AngularUserInterface';
import {
  FormsModule,
  NgForm,
  NgModel,
  ɵInternalFormsSharedModule,
} from '@angular/forms';
import { ApiResponse } from '../interfaces/ApiResponse';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ɵInternalFormsSharedModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  profileDetailsData: UserInterface[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private routes: Router,
    private profileService: ProfileService,
  ) {
    console.log(
      'profile service details : ',
      this.profileService.profileDetail,
    );
    this.profileDetailsData = this.profileService.getProfileDetail();
  }
  profilerName = '';
  firstName = '';
  rollNo = 0;
  ngOnInit() {
    this.profilerName = this.activatedRoute.snapshot.params['name'];
    this.fetchUserData();
  }

  fetchUserData() {
    this.profileService
      .fetchUserDetail()
      .subscribe((data: ApiResponse<AngularUserInterface[]>) => {
        this.userData = data.data;
        console.log('responsed data is with index ', this.userData[0]);
      });
  }
  sendProfilerDetails() {
    this.routes.navigate(['details'], {
      queryParams: { name: 'Jarnail', rollNo: '10' },
    });
  }
  userData: AngularUserInterface[] = [];
  saveUser(angUser: AngularUserInterface) {
    console.log('user data is ', angUser);
    this.profileService.saveData(angUser).subscribe({
      next: (data) => {
        this.fetchUserData();
      },
      error: (err) => {
        console.log('we have an error', err.error);
      },
    });
  }

  deleteUser(dlUser: String) {
    console.log('user data is ', dlUser);
    this.profileService.deleteData(dlUser).subscribe({
      next: (data) => {
        this.fetchUserData();
      },
      error: (err) => {
        console.log('we have an error', err.error);
      },
    });
  }

  updateUser(angUser: AngularUserInterface) {
    this.firstName = angUser.firstName;
    this.rollNo = angUser.rollNo;
  }
}
