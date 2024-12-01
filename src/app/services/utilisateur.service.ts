import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { utilisateurs } from '../Model/utilisateurs.mode'; // Import the model

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  private baseUrl = 'http://localhost:9094/api/utilisateurs';

  constructor(private http: HttpClient) {}

  public login(email: string, password: string): Observable<utilisateurs> {
    return this.http.post<utilisateurs>(`${this.baseUrl}/login`, { email, password });
  }

  public signup(username: string, email: string, password: string): Observable<utilisateurs> {
    return this.http.post<utilisateurs>(`${this.baseUrl}/register`, { username, email, password });
  }

  public getUserByEmail(email: string): Observable<utilisateurs> {
    return this.http.get<utilisateurs>(`${this.baseUrl}/byEmail?email=${email}`);
  }

  public getAllUsers(): Observable<utilisateurs[]> {
    return this.http.get<utilisateurs[]>(`${this.baseUrl}/all`);
  }

  public deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  public updateRole(id: number, role: string): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${id}/updateRole`, null, { params: { role } });
  }

  public updateDetails(id: number, username: string, email: string): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${id}/updateDetails`, null, {
      params: { username, email }
    });
  }
  getUserById(id: number) {
    return this.http.get<utilisateurs>(`http://localhost:9094/api/utilisateurs/${id}`);
  }  
}
