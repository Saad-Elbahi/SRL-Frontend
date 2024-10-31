import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapImputationComponent } from './recap-imputation.component';

describe('RecapImputationComponent', () => {
  let component: RecapImputationComponent;
  let fixture: ComponentFixture<RecapImputationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecapImputationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecapImputationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
