import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigCompteComponent } from './config-compte.component';

describe('ConfigCompteComponent', () => {
  let component: ConfigCompteComponent;
  let fixture: ComponentFixture<ConfigCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigCompteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
