import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { RestoService } from '../resto.service'

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {
  alert:boolean = false;
  name:string ="";
  email:string = "";
  address:string = "";
  addResto = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    address: new FormControl('',[Validators.required]),
  });
  constructor(private resto: RestoService) { }

  ngOnInit(): void {
  }
  collectResto(){
    this.resto.saveResto(this.addResto.value).subscribe((res) => {
      this.alert = true;
      this.addResto.reset({});
    });
  }

  closeAlert(){
    this.alert = false;
  }

  get rname(){
    return this.addResto.get("name");
  }

  get remail(){
    return this.addResto.get("email");
  }

  get raddress(){
    return this.addResto.get("address");
  }
}
