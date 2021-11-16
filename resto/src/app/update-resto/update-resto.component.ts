import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestoService} from '../resto.service';

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {
  alert:boolean = false;
  name:string ="";
  email:string = "";
  address:string = "";
  contact:string = "";
  editResto = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    contact: new FormControl('')
  });
  constructor(private router: ActivatedRoute, private resto:RestoService) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id);
    this.resto.getCurrentResto(this.router.snapshot.params.id)
    .subscribe((res:any)=>{
      this.editResto = new FormGroup({
        name: new FormControl(res['name'],[Validators.required]),
        email: new FormControl(res['email'],[Validators.required, Validators.email]),
        address: new FormControl(res['address'],[Validators.required]),
        contact: new FormControl(res['contact'],[Validators.required, Validators.minLength(10), Validators.maxLength(11),Validators.pattern("^[0-9]*$")])
      });
    });
  }

  collections(){
    console.warn(this.editResto.value);
    this.resto.updateResto(this.router.snapshot.params.id,this.editResto.value)
    .subscribe((res)=>{
      console.log("result",res);
      this.alert = true;
    });
  }

  closeAlert(){
    this.alert = false;
  }

  get rname(){
    return this.editResto.get("name");
  }

  get remail(){
    return this.editResto.get("email");
  }

  get raddress(){
    return this.editResto.get("address");
  }

  get rcontact(){
    return this.editResto.get("contact");
  }
}
