// coins.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CoinsService {
  private apiUrl = 'https://api.coingecko.com/api/v3/coins/markets?sparkline=true';
  private coinsSubject = new BehaviorSubject<Coins[]>([]);

  coins$: Observable<Coins[]> = this.coinsSubject.asObservable();

  constructor(private http: HttpClient) {}

  getCoins(vsCurrency: string): Observable<Coins[]> {
    const params = new HttpParams().set('vs_currency', vsCurrency);

    return this.http.get<Coins[]>(this.apiUrl, { params }).pipe(
      catchError((error) => {
        console.error('Error fetching Coins', error);
        return throwError(error);
      }),
      map((coins) => {
        this.coinsSubject.next(coins);
        return coins;
      })
    );
  }
}

export interface Coins {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
    fully_diluted_valuation: number;
    total_volume: number;
    high_24h: number;
    low_24h: number;
    price_change_24h: number;
    price_change_percentage_24h: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    ath: number;
    ath_change_percentage: number;
    ath_date: string;
    atl: number;
    atl_change_percentage: number;
    atl_date: string;
    roi: any; // Replace 'any' with the actual type when available
    last_updated: string;
    sparkline_in_7d: {
      price: number[];
    };
  }
  