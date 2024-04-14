import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Candidate} from "../models/Candidate";

@Injectable({
  providedIn: 'root'
})
export class CandidateService{
  constructor(private http: HttpClient) {
  }

  getAllCandidates(){
    return this.http.get<Candidate[]>('http://localhost:3000/candidate')
  }

  getCandidateById(id:number){
    return this.http.get<Candidate>('http://localhost:3000/candidate/'+id)
  }

  addCandidate(candidate:Candidate){
    return this.http.post<Candidate>('http://localhost:3000/candidate',candidate)
  }

  updateCandidate(candidate:Candidate){
    return this.http.put<Candidate>('http://localhost:3000/candidate/'+candidate.id,candidate)
  }

  deleteCandidate(id:number){
    return this.http.delete('http://localhost:3000/candidate/'+id)
  }
}
