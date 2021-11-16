import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';
@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {

  constructor(private resto: RestoService) { }
  collections:any = [];
  ngOnInit(): void {
    this.resto.getList().subscribe((res)=> {
      console.log(res)
      this.collections = res
    });
  }
  deleteResto(item:number){
    this.collections.splice(item-1,1);
    this.resto.deleteResto(item).subscribe((res)=>
    console.log("result",res)); 
  }
}
