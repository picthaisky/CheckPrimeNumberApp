import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PrimeService } from '../services/prime.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  number!: number;
  results: string[] = [];

  constructor(private http: HttpClient, private primeService: PrimeService)
  {
    const savedResults = localStorage.getItem('results');
    if (savedResults) {
      this.results = JSON.parse(savedResults);
    }
  }

  ngOnInit() {
    this.checkPrime();
  }

  checkPrime() {
    this.primeService.isPrime(this.number).subscribe((isPrime: any) => {
      const result = `${this.number} is ${isPrime ? 'a prime number' : 'not a prime number'}`;
      this.results.push(result);
      localStorage.setItem('results', JSON.stringify(this.results));
    });
  }

  title = 'cpn-app.client';
}
