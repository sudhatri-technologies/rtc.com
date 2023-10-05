import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsignmentComponent } from './components/consignment/consignment.component';
import { CreatemanifestComponent } from './components/createmanifest/createmanifest.component';
import { DispatchcargoComponent } from './components/dispatchcargo/dispatchcargo.component';
import { HomeComponent } from './components/home/home.component';
import { OutdeliveryComponent } from './components/outdelivery/outdelivery.component';

const routes: Routes = [
  {
    path:'',redirectTo:'home',pathMatch:'full'
  },
  {
    path:'home',component:HomeComponent
  },{
    path:'consignment',component:ConsignmentComponent
  },
  {
    path:'dispatchcargo',component:DispatchcargoComponent
  },
  {
    path:'createmanifest',component:CreatemanifestComponent
  },
  {
    path:'outdelivery',component:OutdeliveryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
