import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-outdelivery',
  templateUrl: './outdelivery.component.html',
  styleUrls: ['./outdelivery.component.css']
})
export class OutdeliveryComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  outDelForm=this.fb.group({
   consignId:[null,[Validators.required]],
   receiverName:[null,[Validators.required]],
   receiverNo:[null,[Validators.required]],
   receiverAddress:[null,[Validators.required]],
   assignPersonName:[null,Validators.required],
   assignPersonNo:[null,[Validators.required]]
  })


  get consignId(){
    return this.outDelForm.get('consignId');
  }

  get receiverName(){
    return this.outDelForm.get('receiverName');
  }
  get receiverNo(){
    return this.outDelForm.get('receiverNo');
  }
  get receiverAddress(){
    return this.outDelForm.get('receiverAddress');
  }
  get assignPersonName(){
    return this.outDelForm.get('assignPersonName');
  }
  get assignPersonNo(){
    return this.outDelForm.get('assignPersonNo');
  }
  ngOnInit(): void {
  }

}
