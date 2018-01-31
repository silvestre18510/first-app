import { Component, OnInit, Input, ContentChild , ElementRef,AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit,AfterContentInit {
  @Input('aliasAge') age: {age: number}
  @Input('aliasChild') child: {name: string}
  @ContentChild('contentParagraph') paragraph: ElementRef
  constructor() { }

  ngOnInit() {
    console.log( this.paragraph.nativeElement)
  }
  
  ngAfterContentInit()
  {
    console.log(this.paragraph.nativeElement)
  }




}
