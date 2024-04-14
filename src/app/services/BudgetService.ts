import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Budget} from "../models/Budget";

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  constructor(private http:HttpClient) {
  }

  getAllBudgets(){
    return this.http.get<Budget[]>('http://localhost:3000/budget')
  }

  getBudgetById(id:string){
    return this.http.get<Budget>('http://localhost:3000/budget/'+id)
  }

  addBudget(budget:Budget){
    return this.http.post<Budget>('http://localhost:3000/budget',budget)
  }

  updateBudget(budget:Budget){
    return this.http.put<Budget>('http://localhost:3000/budget/'+budget.id,budget)
  }

  deleteBudget(id:string){
    return this.http.delete('http://localhost:3000/budget/'+id)
  }
}
