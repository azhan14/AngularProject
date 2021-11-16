import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { ListRestoComponent } from './list-resto/list-resto.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { UpdateRestoComponent } from './update-resto/update-resto.component';

const routes: Routes = [
  { path: 'add', component:AddRestoComponent},
  { path: 'list', component:ListRestoComponent},
  { path: 'update/:id', component:UpdateRestoComponent},
  { path: '', component: MainpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
