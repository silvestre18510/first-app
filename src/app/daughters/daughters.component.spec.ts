import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaughtersComponent } from './daughters.component';

describe('DaughtersComponent', () => {
  let component: DaughtersComponent;
  let fixture: ComponentFixture<DaughtersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaughtersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaughtersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
