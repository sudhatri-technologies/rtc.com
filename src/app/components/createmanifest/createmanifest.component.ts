import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms'
interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-createmanifest',
  templateUrl: './createmanifest.component.html',
  styleUrls: ['./createmanifest.component.css']
})
export class CreatemanifestComponent implements OnInit {
  cities:City[];

  constructor(private fb: FormBuilder) {
    this.cities = [
      {name: 'Sircilla', code: 'RM'},
      {name: 'Secunderabad', code: 'NY'},
      {name:'Karimnagar' ,code:'KNR'}
      
  ];
   }

   manifestForm=this.fb.group({
     manifestId:[null,[Validators.required]],
     date:[null,[Validators.required]],
     busNo:[null,[Validators.required]],
     depo:[null,[Validators.required]],
     from:[null,[Validators.required]],
     to:[null,[Validators.required]],
     packages:[null,[Validators.required]],
     weight:[null,[Validators.required]],
     charges:[null,[Validators.required]],
     name:[null,[Validators.required]],
     agentId:[null,[Validators.required]],
     agentNo:[null,[Validators.required]]
   })


   get manifestId(){
     return this.manifestForm.get('manifestId');
   }
   get date(){
    return this.manifestForm.get('date');
  }
  get busNo(){
    return this.manifestForm.get('busNo');
  }
  get depo(){
    return this.manifestForm.get('depo');
  }
  get from(){
    return this.manifestForm.get('from');
  }

  get to(){
    return this.manifestForm.get('to');
  }

  get packages(){
    return this.manifestForm.get('packages');
  }
  get weight(){
    return this.manifestForm.get('weight');
  }
  get charges(){
    return this.manifestForm.get('charges');
  }

  get name(){
    return this.manifestForm.get('name');
  }

  get agentId(){
    return this.manifestForm.get('agentId');
  }
  get agentNo(){
    return this.manifestForm.get('agentNo');
  }
  ngOnInit(): void {
  }

}
