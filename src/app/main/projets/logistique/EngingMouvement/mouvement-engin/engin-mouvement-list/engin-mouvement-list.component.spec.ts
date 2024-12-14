import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnginMouvementListComponent } from './engin-mouvement-list.component';

describe('EnginMouvementListComponent', () => {
  let component: EnginMouvementListComponent;
  let fixture: ComponentFixture<EnginMouvementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnginMouvementListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnginMouvementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
