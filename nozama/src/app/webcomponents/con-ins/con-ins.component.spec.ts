import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConInsComponent } from './con-ins.component';

describe('ConInsComponent', () => {
  let component: ConInsComponent;
  let fixture: ComponentFixture<ConInsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConInsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConInsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
