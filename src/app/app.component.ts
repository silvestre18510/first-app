import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mij = 56
  serverElements = [{type: 'server' , name: 'Testserver' , content: 'Just a test!'}]
  title = 'app';
  children = [{name: "jim", type: ""}]
  age = '0'
  onAgeAdded(ageData: {age: string})
  {
    this.age= ageData.age
    console.log(this.age)
  }
  onSonAdded(sonData: {name: string, type: string})
  {
  this.children.push({
    name: sonData.name,
    type: sonData.type

  })
  }

  onDaughterAdded(daughterData: {name: string, type: string})
  {
  this.children.push({
    name: daughterData.name,
    type: daughterData.type
  })
  }
}
