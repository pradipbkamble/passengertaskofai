import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { Ipassenger } from '../interface/ipassengers';

@Component({
  selector: 'app-listpassenger',
  templateUrl: './listpassenger.component.html',
  styleUrls: ['./listpassenger.component.scss']
})
export class ListpassengerComponent implements OnInit,DoCheck{
@Input() passengerlist :Array<Ipassenger>=[]
count!:number
  constructor() { }
  ngDoCheck(): void {
    // throw new Error('Method not implemented.');
    this.count = this.passengerlist.reduce((acc,cv)=>{
      if(cv.checkedIn){
        acc++
      }
      return acc
  },0)
  }
  ngOnInit(): void {
  }

}
