import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEnginComponent } from './add-engin.component';

describe('AddEnginComponent', () => {
  let component: AddEnginComponent;
  let fixture: ComponentFixture<AddEnginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEnginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEnginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
