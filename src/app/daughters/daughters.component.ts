import { Component, OnInit } from '@angular/core';
import {Daughter} from './daughter.model'
@Component({
  selector: 'app-daughters',
  templateUrl: './daughters.component.html',
  styleUrls: ['./daughters.component.css']
})
export class DaughtersComponent implements OnInit {
  daughters: Daughter[] =[new Daughter("milagrito2",5)]
  name = []
  constructor() {
    this.name[0]="Milagrito"
    this.name[1]="Stephany"
  }
  getFirstName()
  {
    return this.name[0]
  }
  
  getSecondName()
  {
    return this.name[1]
  }

  getDaughtersLength()
  {
    return this.name.length
  }
  addOne()
  {
    this.name.push("one more")
    console.log(this.name.length)
  }

  ngOnInit() {
  }

}
