import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapEnginImputationComponent } from './recap-engin-imputation.component';

describe('RecapEnginImputationComponent', () => {
  let component: RecapEnginImputationComponent;
  let fixture: ComponentFixture<RecapEnginImputationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecapEnginImputationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecapEnginImputationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
