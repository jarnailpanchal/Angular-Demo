import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import { ProfileDetailsComponent } from '../profile-details/profile-details.component';

@Component({
  selector: 'app-parent-to-child',
  standalone: true,
  imports: [],
  templateUrl: './parent-to-child.component.html',
  styleUrl: './parent-to-child.component.css'
})
export class ParentToChildComponent {

  @Input() name:string="";
  @Input() city:string="";
  @Input() user:string=""
  childUsers = ["RAM","SHYAM","MOHAN","RUPA","RASHMI"]
  
}
