import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserdetailComponent } from './add-userdetail/add-userdetail.component';
import { EditUserdetailComponent } from './edit-userdetail/edit-userdetail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'edit', component: EditUserdetailComponent },
  { path: 'add', component: AddUserdetailComponent },
  { path: '', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
