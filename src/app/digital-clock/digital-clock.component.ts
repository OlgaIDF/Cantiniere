import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.css']
})
export class DigitalClockComponent implements OnInit {

  private daysArray =['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];

  private date = new Date();
  public hour : any;
  public minute: any;

  // public ampm: any;
  public day:any;

  constructor() { }

  ngOnInit()  {
    setInterval(()=>{
      const date = new Date();
      this.updateDate(date);
    },1000);
    this.day= this.daysArray[this.date.getDay()];
  }
  /**
   * créér digital o'clock
   */
private updateDate(date:Date){
  const hours = date.getHours();

  // this.ampm = hours>=12 ? 'PM' : 'AM';
 // this.hour = hours % 12;
  // this.hour = this.hour ? this.hour:12;
  this.hour = hours <10 ? '0' + hours : hours.toString();

  const minutes = date.getMinutes();
  this.minute = minutes <10 ? '0' + minutes: minutes.toString();
  const seconds = date.getSeconds();

}
}
