import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddpostComponent } from './addpost/addpost.component';
import { DetaillComponent } from './detaill/detaill.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'AjouterPost',component:AddpostComponent},
  { path: 'post/:id', component: DetaillComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
