import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerouComponent } from './verou.component';

describe('VerouComponent', () => {
  let component: VerouComponent;
  let fixture: ComponentFixture<VerouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
