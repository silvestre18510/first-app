import { Component, ElementRef,OnInit,ViewChild, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-adds',
  templateUrl: './adds.component.html',
  styleUrls: ['./adds.component.css']
})
export class AddsComponent implements OnInit {

  @Output('ageCreatedAlias') ageCreated= new EventEmitter<{age: string}>()
  @Output('sonCreatedAlias') sonCreated= new EventEmitter<{name: string, type: string}>()
  @Output('daughterCreatedAlias') daughterCreated = new EventEmitter<{name: string , type: string}>()
  newChild
  age
  @ViewChild('childInput') childInput: ElementRef
  constructor() { }

  ngOnInit() {
  }
  
 /* onAddAge(ageInput)
  {
    this.ageCreated.emit({
      age: this.age
    })
    console.log(this.age)
  }*/

  onAddAge(ageInput: HTMLInputElement)
  {
    this.ageCreated.emit({
      age: ageInput.value
    })
    console.log(this.age)
  }
 /*
  onAddSon()
  {
    this.sonCreated.emit({
      name: this.newChild,
      type: "son"

    })
    console.log(this.newChild)
  }

*/
  onAddSon(childInput: HTMLInputElement)
  {
    this.sonCreated.emit({
      name: this.childInput.nativeElement.value,
      type: "son"

    })
    console.log(this.childInput.nativeElement.value)
  }

  onAddDaughter()
  {
    this.daughterCreated.emit({
      name: this.newChild,
      type: "daughter"
    })
  }

}
