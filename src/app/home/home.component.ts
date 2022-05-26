import { Component, OnInit, ViewChild } from '@angular/core';
import { Airtable } from 'ngx-airtable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild("modal")
  modalObject: any = "";
  propertyList: any[] = [];
  constructor(private airtable: Airtable) {
    this.retriveAll();
  }

  ngOnInit(): void {
  }
  modalToggle() {
    this
      .modalObject
      .nativeElement
      .classList
      .toggle('d-none');

  }
  onSubmit(form: any) {
    let fv = form.value;
    fv.property_id = (Math.random() * 10000).toFixed();
    this.airtable.
    base('appBhJIgAsaGg83cL')
    .table({ tableName: 'Property_details' })
    .create({"fields":fv}).subscribe(e=>{
      this.modalToggle();
      this.retriveAll();
    })
  }
  onUpdate(val: any) {

  }
  onDelete(val: any) {
    // this.propertyList=this.propertyList.filter(e=>e.propertyId!=val);
    alert('under working')
  }
  retriveAll() {
    this.propertyList=[];
    this.airtable.base('appBhJIgAsaGg83cL').table({ tableName: 'Property_details' }).select().all().subscribe(e => {
      let a: any = e;
      Array.from(a).forEach(el => {
        let k: any = el;
        this.propertyList.push(k['fields'])
      });
    });
  }
}
