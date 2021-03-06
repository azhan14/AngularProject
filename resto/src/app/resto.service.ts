import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestoService {
  url = "http://localhost:3000/restaurants";
  constructor(private http: HttpClient) { }
  getList(){
    return this.http.get(this.url);
  }

  saveResto(data:any){
    return this.http.post(this.url,data);
  }

  deleteResto(id:number){
    return this.http.delete(`${this.url}/${id}`);
  }

  getCurrentResto(id:number){
    return this.http.get(`${this.url}/${id}`);
  }

  updateResto(id:number,data:any){
    return this.http.put(`${this.url}/${id}`,data);
  }

}
