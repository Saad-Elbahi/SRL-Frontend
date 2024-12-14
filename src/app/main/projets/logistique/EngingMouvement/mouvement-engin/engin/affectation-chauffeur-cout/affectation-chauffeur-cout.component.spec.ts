import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectationChauffeurCoutComponent } from './affectation-chauffeur-cout.component';

describe('AffectationChauffeurCoutComponent', () => {
  let component: AffectationChauffeurCoutComponent;
  let fixture: ComponentFixture<AffectationChauffeurCoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffectationChauffeurCoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffectationChauffeurCoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
