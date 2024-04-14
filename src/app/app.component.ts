import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './form/form.component';
import {ProductService} from "./services/ProductService";
import {BudgetService} from "./services/BudgetService";
import {CandidateService} from "./services/CandidateService";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
  FormComponent],
  providers:[ProductService, CandidateService, BudgetService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cadisa';
}
