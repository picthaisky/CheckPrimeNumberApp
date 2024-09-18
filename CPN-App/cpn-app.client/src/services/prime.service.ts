import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrimeService {
  private apiUrl = 'https://localhost:44390/api/prime';

  constructor(private http: HttpClient) { }

  isPrime(number: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/GetBy/${number}`);
  }
}
