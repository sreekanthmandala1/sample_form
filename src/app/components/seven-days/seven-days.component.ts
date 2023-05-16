import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seven-days',
  templateUrl: './seven-days.component.html',
  styleUrls: ['./seven-days.component.css']
})
export class SevenDaysComponent implements OnInit {
  dateEvent:any;
  presentDate:any;
  cantExceedThis:any;
  cantExceedDate:any;
  dateValidation : any
  constructor() { }

  ngOnInit(): void {
  }

  onDateChange(e:any){
    debugger
    this.presentDate = new Date();
    this.dateEvent = e.target.valueAsDate
    this.cantExceedThis = this.presentDate.setDate( this.presentDate.getDate() + 7 )
    this.cantExceedDate = new Date(this.cantExceedThis)
    if(this.dateEvent > this.cantExceedDate ){
      // alert('date cant be more than' + this.cantExceedDate)
      this.dateValidation = 'date cant be more than' + this.cantExceedDate;
    }else{
      this.dateValidation = ''
    }
  }
}
