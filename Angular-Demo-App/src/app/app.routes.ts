import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { TeamplteTestComponent } from './teamplte-test/teamplte-test.component';

export const routes: Routes = [
  //{path:'profile', component: ProfileComponent},
  {
    path: 'profile',
    loadComponent: () =>
      import('./profile/profile.component').then(
        (comp) => comp.ProfileComponent,
      ),
  },
  { path: 'login', component: LoginComponent },
  { path: 'details', component: ProfileDetailsComponent },
  { path: 'templateTest', component: TeamplteTestComponent },
];
