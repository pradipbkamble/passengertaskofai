import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Ipassenger } from '../interface/ipassengers';

@Component({
  selector: 'app-passengercard',
  templateUrl: './passengercard.component.html',
  styleUrls: ['./passengercard.component.scss']
})
export class PassengercardComponent implements OnInit {
  @ViewChild('updatedname') updatedname!:ElementRef
@Input() paasengercard!:Ipassenger
@Output() deletobj: EventEmitter<Ipassenger>=new EventEmitter<Ipassenger>();
iseditable:boolean=false
  constructor() { }

  ngOnInit(): void {
  }
  onedit(){
this.iseditable=true
  }
  ondelet(){
this.deletobj.emit(this.paasengercard)

  }
  onupdate(){
this.iseditable=false
console.log(this.updatedname.nativeElement.value)
this.paasengercard.fullname=this.updatedname.nativeElement.value
  }
}
