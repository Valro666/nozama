import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchatwinComponent } from './achatwin.component';

describe('AchatwinComponent', () => {
  let component: AchatwinComponent;
  let fixture: ComponentFixture<AchatwinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AchatwinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AchatwinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
