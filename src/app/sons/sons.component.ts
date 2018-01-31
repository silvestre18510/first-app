import { Component } from '@angular/core'

@Component(
{
  selector: 'app-sons',
  templateUrl: './sons.component.html',
  styleUrls: ['./sons.component.css']
}
)

export class SonsComponent
{ 
  evenOdd = true
  inputName = ""
  name =[]
  constructor()
  {
     this.name[0] = "Leonardito"
     this.name[1] = "ra"
  }
  getSonsLength()
  {
    return this.name.length
  }


  addOne(event: Event)
  {
    // this.serverName = (<HTMLInputElement>event.target).value
    console.log(event)
    
    this.name.push("one more")
  
    if (this.name.length %2 == 0)
      this.evenOdd = true
    else
      this.evenOdd = false
  }
  getColor()
  {
    if (this.evenOdd == true)
      return "yellow"
    else
      return "blue"
  }
}
