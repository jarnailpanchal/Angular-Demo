import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-teamplte-test',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './teamplte-test.component.html',
  styleUrl: './teamplte-test.component.css'
})
export class TeamplteTestComponent {
  name = "";
  password = ""
  submitUserDetail(userDetail:NgForm) {
    
    this.name = userDetail.value['name']
    this.password = userDetail.value['password']

    console.log("User submit",this.name,this.password)
  }
}
