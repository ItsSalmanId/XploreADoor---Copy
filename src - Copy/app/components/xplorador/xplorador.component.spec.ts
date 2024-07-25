import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XploradorComponent } from './xplorador.component';

describe('XploradorComponent', () => {
  let component: XploradorComponent;
  let fixture: ComponentFixture<XploradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XploradorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XploradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
