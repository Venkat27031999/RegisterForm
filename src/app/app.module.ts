import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserdetailService } from './share/userdetail.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserdetailComponent } from './add-userdetail/add-userdetail.component';
import { EditUserdetailComponent } from './edit-userdetail/edit-userdetail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AddUserdetailComponent,
    EditUserdetailComponent,
    DashboardComponent,
    UserdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [UserdetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
