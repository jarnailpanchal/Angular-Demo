import { Injectable } from '@angular/core';
import { UserInterface } from '../interfaces/UserInterface';
import { AngularUserInterface } from '../interfaces/AngularUserInterface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../interfaces/ApiResponse';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private httpClient: HttpClient) {}

  users: UserInterface[] = [{ name: 'jarnail', band: 'B2' }];

  getProfileDetail(): UserInterface[] {
    return this.users;
  }
  profileDetail: { name: string; band: string }[] = [
    { name: 'jarnail', band: 'B2' },
    { name: 'karnail', band: 'B1' },
    { name: 'jyoti', band: 'B3' },
  ];

  fetchUserDetail(): Observable<ApiResponse<AngularUserInterface[]>> {
    const baseUrl = 'http://localhost:8080/user/get';
    return this.httpClient.get<ApiResponse<AngularUserInterface[]>>(baseUrl);
  }

  saveData(angUser: AngularUserInterface): Observable<AngularUserInterface[]> {
    const baseUrl = 'http://localhost:3000/posts';
    return this.httpClient.post<AngularUserInterface[]>(
      'http://localhost:8080/user/save',
      angUser,
    );
  }

  deleteData(delUser: String): Observable<AngularUserInterface[]> {
    return this.httpClient.delete<AngularUserInterface[]>(
      'http://localhost:8080/user/delete/' + delUser,
    );
  }
}
