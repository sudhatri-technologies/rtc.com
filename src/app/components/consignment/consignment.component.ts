import { Component, OnInit } from '@angular/core';
import { FormBuilder ,Validators} from '@angular/forms';
interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-consignment',
  templateUrl: './consignment.component.html',
  styleUrls: ['./consignment.component.css']
})
export class ConsignmentComponent implements OnInit {
  cities:City[];

  constructor(private fb:FormBuilder) {
    this.cities = [
      {name: 'Sircilla', code: 'RM'},
      {name: 'Secunderabad', code: 'NY'},
      {name:'Karimnagar' ,code:'KNR'}
      
  ];
   }

consignForm=this.fb.group({
  depo:[null,[Validators.required]],
  region:[null,[Validators.required]],
  date:[null,[Validators.required]],
  consignDes:[null,[Validators.required]],
  from:[null,[Validators.required]],
  to:[null,[Validators.required]],
  consignType:[null,[Validators.required]],
  volume:[null,[Validators.required]],
  consignName:[null,[Validators.required]],
  consignNumber:[null,[Validators.required]],
  receiverName:[null,[Validators.required]],
  receiverNumber:[null,[Validators.required]],
  receiverAddress:[null,[Validators.required]],
  bookedBy:[null,[Validators.required]],
  contactNumber:[null,Validators.required]

})


get depo(){
  return this.consignForm.get('depo');
}

get region(){
  return this.consignForm.get('region');
}
get date(){
  return this.consignForm.get('date');
}
get consignDes(){
  return this.consignForm.get('consignDes');
}
get from(){
  return this.consignForm.get('from');
}
get to(){
  return this.consignForm.get('to');
}
get consignType(){
  return this.consignForm.get('consignType');
}
get volume(){
  return this.consignForm.get('volume');
}

get consignName(){
  return this.consignForm.get('consignName');
}
get consignNumber(){
  return this.consignForm.get('consignNumber');
}
get receiverName(){
  return this.consignForm.get('receiverName')
}

get receiverNumber(){
  return this.consignForm.get('receiverNumber')
}


get receiverAddress(){
  return this.consignForm.get('receiverAddress')
}

get bookedBy(){
  return this.consignForm.get('bookedBy')
}
get contactNumber(){
  return this.consignForm.get('contactNumber')
}
  ngOnInit(): void {
  }

}
