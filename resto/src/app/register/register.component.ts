import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  alert:boolean = false;
  name:string ="";
  email:string = "";
  password:string = "";
  register = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.pattern("^[A-Za-z]+$")]),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.pattern("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,15}$")]),
    confirmPassword: new FormControl('',[Validators.required])
  }, 
  {validators:this.matchPass}
  );

  constructor(private resto: RestoService) { }

  ngOnInit(): void {
  }

  collection(){
    console.log(this.register.value);
    this.resto.registerUser({"name":this.register.get("name")?.value,
                            "email":this.register.get("email")?.value,
                            "password":this.register.get("password")?.value})
    .subscribe((res)=>{
      console.log("result: ",res);
      this.alert = true;
    });
  }

  closeAlert(){
    this.alert = false;
  }

  get fname(){
    return this.register.get("name");
  }

  get emailId(){
    return this.register.get("email");
  }

  get usrpass(){
    return this.register.get("password");
  }

  get usrconfirmpass(){
    return this.register.get("confirmPassword");
  }

  private matchPass(regForm:FormGroup):null | {}{
    let passControl = regForm.get("password");
    let confirmPassControl = regForm.get("confirmPassword");
    if(passControl.value == confirmPassControl.value){
      return null;    // Validation passed
    }
    else{
      return {'passMismatch':true};
    }
  }
}
