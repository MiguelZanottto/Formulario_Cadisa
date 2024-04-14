import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {ProductService} from "../services/ProductService";
import {HttpClientModule} from "@angular/common/http";
import {CandidateService} from "../services/CandidateService";
import {BudgetService} from "../services/BudgetService";


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
  HttpClientModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit{
  pasoActual = 1;

  sumarPaso() {
    this.pasoActual += 1;
  }

  restarPaso() {
    this.pasoActual--;
  }

  DatosClienteForm = this._formBuilder.group({
    nombre: ['', Validators.required],
    apellidos: ['', Validators.required],
    telefono: ['', [Validators.required, Validators.pattern(/^[6-9][0-9]{8}$/)]],
    correo: ['', [Validators.required, Validators.email]]
  });

  numEstanciasClimatizarForm = this._formBuilder.group({
    num_estancias: ['', Validators.required]
  });

  tipoViviendaForm = this._formBuilder.group({
    tipo_vivienda: ['', Validators.required]
  });

  tipoInstalacionForm = this._formBuilder.group({
    tipo_instalacion: ['', Validators.required]
  });

  cambioEquipoForm = this._formBuilder.group({
    cambio_equipo: ['', Validators.required]
  });

  compartenFachadaForm = this._formBuilder.group({
    comparten_fachada: ['', Validators.required]
  });

  espacioMejorarForm = this._formBuilder.group({
    espacio_mejorar: ['', Validators.required]
  });

  superficieForm = this._formBuilder.group({
    superficie: ['', Validators.required]
  });

  plantaForm = this._formBuilder.group({
    planta: ['', Validators.required]
  })


  validarForm(formulario : FormGroup) : void{
    Object.keys(formulario.controls).forEach(controlName => {
      const control = formulario.get(controlName);
        if (control?.errors) {
          Object.keys(control.errors).forEach(errorKey => {
            const elemento = document.getElementById('error_' + controlName + "_" + errorKey);
            elemento!.style.display = "Block";
          });
      }
    });
  }

  limpiarErrores(formulario : FormGroup) : void {
      Object.keys(formulario.controls).forEach(controlName => {
        const control = formulario.get(controlName);
          if (control?.errors) {
            Object.keys(control.errors).forEach(errorKey => {
              const elemento = document.getElementById('error_' + controlName + "_" + errorKey);
              elemento!.style.display = "none";
            });
        }
      });
  }

  limpiarErroresRadio(formulario : FormGroup) : void {
    Object.keys(formulario.controls).forEach(controlName => {
        if (formulario.valid) {
         const elemento = document.getElementById('error_' + controlName + "_required");
            elemento!.style.display = "none";
      }
    });
  }

  validarNumero(event: KeyboardEvent) {
    const inputChar = String.fromCharCode(event.charCode);
    if (!/^\d+$/.test(inputChar)) {
        event.preventDefault();
    }
}

  isLinear = false;

  constructor(private _formBuilder: FormBuilder, private _productService: ProductService, private _candidateService: CandidateService, private _budgetService: BudgetService) {}

  ngOnInit(): void {
    this._productService.getAllProducts().subscribe(data => {
      console.log(data);
    })

    this._candidateService.getAllCandidates().subscribe(data => {
      console.log(data);
    })

    this._budgetService.getAllBudgets().subscribe(data => {
      console.log(data);
    })
  }
}
