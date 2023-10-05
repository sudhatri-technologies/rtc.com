import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms'
interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-dispatchcargo',
  templateUrl: './dispatchcargo.component.html',
  styleUrls: ['./dispatchcargo.component.css']
})
export class DispatchcargoComponent implements OnInit {
  cities:City[];

  constructor(private fb: FormBuilder) {
    this.cities = [
      {name: 'Sircilla', code: 'RM'},
      {name: 'Secunderabad', code: 'NY'},
      {name:'Karimnagar' ,code:'KNR'}
      
  ];
   }
   dispatchForm=this.fb.group({
     destination:[null,[Validators.required]],
     source:[null,[Validators.required]],
     consignId:[null,[Validators.required]],
     manifestId:[null,[Validators.required]],
     consignDes:[null,[Validators.required]],
     enRoute:[null,[Validators.required]],
     courierNo:[null,[Validators.required]],
     driverName:[null,[Validators.required]],
     agentId:[null,[Validators.required]],
     agentNo:[null,[Validators.required]]


   })

   get destination(){
     return this.dispatchForm.get('destination')
   }
   get source(){
    return this.dispatchForm.get('source')
  }
  get consignId(){
    return this.dispatchForm.get('consignId')
  }
  get manifestId(){
    return this.dispatchForm.get('manifestId')
  }
  get consignDes(){
    return this.dispatchForm.get('consignDes')
  }
  get enRoute(){
    return this.dispatchForm.get('enRoute')
  }

  get courierNo(){
    return this.dispatchForm.get('courierNo')
  }
  get driverName(){
    return this.dispatchForm.get('driverName')
  }
  get agentId(){
    return this.dispatchForm.get('agentId')
  }
  get agentNo(){
    return this.dispatchForm.get('agentNo')
  }
  ngOnInit(): void {
  }

}
