import { CommonModule, NgIf } from '@angular/common';
import { afterRender, Component, NgModule, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, NgForm, NgModel} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ParentToChildComponent } from "../parent-to-child/parent-to-child.component";
import { CurrencyConverterPipe } from '../pipe/currency-converter.pipe';


@Component({
  selector: 'app-profile-details',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, ParentToChildComponent, CommonModule, CurrencyConverterPipe],
  templateUrl: './profile-details.component.html',
  styleUrl: './profile-details.component.css'
})
export class ProfileDetailsComponent {

   @ViewChild(ParentToChildComponent) parentToChildComponent!: ParentToChildComponent;

  constructor(private activatedRoute: ActivatedRoute){ 
    console.log('before after render called',this.parentToChildComponent)
    afterRender(() => {
      console.log('after render called',this.parentToChildComponent)
    })
  }
  rollNo = "";  
  name = "";
  myDate = new Date();
  ngOnInit(){
    this.activatedRoute.queryParams.subscribe(parm => {
      console.log('details are',parm)
      this.rollNo = parm['rollNo']
      this.name = parm['name']
    });
    
  }

  profileDetail = new FormGroup ({
    userName : new FormControl('',[Validators.required,Validators.minLength(5)]),
    password : new FormControl('', Validators.required),
    email : new FormControl('',[Validators.required,Validators.pattern('any patter to check')])
  });
  
  submit() {
 if (this.profileDetail.invalid) {
    alert("user name and password mandator field")
  }
    this.profileDetail.setValue({
      userName:'sdfds',
      password:'psw',
      email:'test@abc'
  })
  }


  userNameSet:string|null = "";
  passwordSet:string|null = "";
  setValues() {
      this.userNameSet=this.profileDetail.controls.userName.value,
      this.passwordSet=this.profileDetail.controls.password.value
    
  }

  userForm = new FormGroup({
    name : new FormControl(),
    password : new FormControl()
  })

  passToChild="Jarnail Singh"
  city="Gurgaon"
  addUser() {

  }
  setSelectedName(selectedItem:string) {
    this.passToChild = selectedItem;
  }

  users = ["JP","KP","JYP","RP"]
parentUsers:string[]|undefined=[];
  money = 10;
 

  getChildUser() {
      this.parentUsers = this.parentToChildComponent.childUsers;
  }


}

