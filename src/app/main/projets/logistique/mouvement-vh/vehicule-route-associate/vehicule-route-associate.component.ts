import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {VehiculeRouteService} from "../vehicule-route.service";

@Component({
  selector: 'app-vehicule-route-associate',
  templateUrl: './vehicule-route-associate.component.html',
  styleUrls: ['./vehicule-route-associate.component.scss']
})
export class VehiculeRouteAssociateComponent implements OnInit {

  associateForm: FormGroup;

  constructor(private fb: FormBuilder, private vehiculeRouteService: VehiculeRouteService) {
    this.associateForm = this.fb.group({
      vehicleId: ['', Validators.required],
      date: ['', Validators.required],
      fromMouvements: this.fb.array([]),
      toAffaireId: ['', Validators.required],
      imputations: this.fb.array([])
    });
  }

  ngOnInit(): void {
    // Initialize form here if needed
  }

  get fromMouvements(): FormArray {
    return this.associateForm.get('fromMouvements') as FormArray;
  }

  get imputations(): FormArray {
    return this.associateForm.get('imputations') as FormArray;
  }

  addFromMouvement() {
    const fromMouvementGroup = this.fb.group({
      affaire: this.fb.array([]),
      fournisseurs: this.fb.array([]),
      bl: [''],
      blMontant: [''],
      dateBl: [''],
      departement: ['']
    });
    this.fromMouvements.push(fromMouvementGroup);
  }

  addImputation() {
    const imputationGroup = this.fb.group({
      affaire: [''],
      fillingPercentage: [''],
      observation: [''],
      departement: ['']
    });
    this.imputations.push(imputationGroup);
  }

  removeFromMouvement(index: number) {
    this.fromMouvements.removeAt(index);
  }

  removeImputation(index: number) {
    this.imputations.removeAt(index);
  }

  onSubmit() {
    if (this.associateForm.valid) {
      const vehicleId = this.associateForm.get('vehicleId')?.value; // Extract vehicleId from form
      const date = this.associateForm.get('date')?.value; // Extract date from form
      const requestBody = this.associateForm.value; // Extract the rest of the form data

      // Call the service method with all required arguments
      /*this.vehiculeRouteService.associateAdditionalData(requestBody)
          .subscribe(response => {
            console.log('VehiculeRoute associated successfully', response);
          }, error => {
            console.error('Error associating VehiculeRoute', error);
          });*/
    }
  }

}
