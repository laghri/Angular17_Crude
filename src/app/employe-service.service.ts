import { Injectable, WritableSignal, signal } from '@angular/core';
import { Employe } from './Employe';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeServiceService {

  private   apiBaseUrl="https://localhost:7223";
  private Employee$ = this.http.get<Employe[]>(`${this.apiBaseUrl}/api/Employes`);

  Employes: WritableSignal<Employe[]> = signal([]);
  EmployeGetted: WritableSignal<Employe| undefined> = signal(undefined);
  constructor(private http: HttpClient) {
    this.Employee$.subscribe((NewEmploye) => {
      this.Employes.set(NewEmploye);
    });
  }

  addEmploye(employe: Employe) {
    this.http.post<Employe>(`${this.apiBaseUrl}/api/Employes`, employe)
      .subscribe((createdEmploye) => {
        this.Employes.set([...this.Employes(), createdEmploye]);
      });
  }
  updateEmploye(updatedEmploye: Employe): void {
    this.http.put<Employe>(`${this.apiBaseUrl}/api/Employes`, updatedEmploye)
      .subscribe(() => {
        this.Employes.set(this.Employes().map(employe => (employe.id === updatedEmploye.id) ? updatedEmploye : employe));
      });
  }

  deleteEmploye(EmployeId: string): void {
    this.http.delete<void>(`${this.apiBaseUrl}/api/Employes/${EmployeId}`)
      .subscribe(() => {
        this.Employes.set(this.Employes().filter(employe => employe.id !== EmployeId));
      });
  }

  getEmployeById(EmployeId: string):void{
    this.http.get<Employe>(`${this.apiBaseUrl}/api/Employes/${EmployeId}`)
    .subscribe((Employe) => {
      this.EmployeGetted.set(Employe);
    });

  }

}

