// coingecko.component.ts

import { Component, OnInit } from '@angular/core';
import { SortEvent } from 'primeng/api';
import { CoinsService, Coins } from './coingecko.service';

@Component({
  selector: 'app-coingecko',
  templateUrl: './coingecko.component.html',
  styleUrls: ['./coingecko.component.css']
})
export class CoingeckoComponent implements OnInit {
  coins!: Coins[];
  chartData: any = {};
  first = 0;
  rows = 10;

  criptoMoeda: string = '';
  moedaFiduciaria: string = 'usd';
  quantidade: number = 0;
  selectedCoin: Coins | null = null; // Adiciona a propriedade selectedCoin

  constructor(private coinsService: CoinsService) {}

  ngOnInit() {
    this.coinsService.getCoins('usd').subscribe(
      data => {
        this.coins = data;
        this.coins.forEach(coin => this.createChart(coin));
      },
      error => console.error('Error fetching Coins', error)
    );
  }

  pageChange(event: { first: number; rows: number }) {
    this.first = event.first;
    this.rows = event.rows;
  }

  isLastPage(): boolean {
    return this.coins ? this.first === this.coins.length - this.rows : true;
  }

  isFirstPage(): boolean {
    return this.coins ? this.first === 0 : true;
  }

  customSort(event: SortEvent) {
    if (event.data && event.field !== undefined && event.order !== undefined) {
      event.data.sort((data1, data2) => {
        const value1 = data1[event.field as keyof typeof data1];
        const value2 = data2[event.field as keyof typeof data2];
        console.log(this.coins);
        return (
          (value1 == null && value2 != null) ? -1 :
          (value1 != null && value2 == null) ? 1 :
          (value1 == null && value2 == null) ? 0 :
          (typeof value1 === 'string' && typeof value2 === 'string') ? value1.localeCompare(value2) :
          (value1 < value2 ? -1 : value1 > value2 ? 1 : 0) * (event.order || 1)
        );
      });
    }
  }
  
  createChart(coin: Coins) {
    const prices = coin.sparkline_in_7d?.price;
    this.chartData[coin.id] = {
      labels: Array.from({ length: prices.length }, (_, i) => i + 1),
      datasets: [
        {
          label: 'Price in 7 days',
          data: prices,
          fill: true,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }
      ]
    };
  }

  resultadoConversao: number = 0;

  // Método para configurar a criptomoeda selecionada
  openModal(coin: Coins) {
    this.selectedCoin = coin;
  }

  converterMoeda() {
    this.coinsService
      .convertCurrency(
        this.selectedCoin?.id || '', // Usa a criptomoeda selecionada ou uma string vazia
        this.moedaFiduciaria,
        this.quantidade
      )
      .subscribe(
        (resultado) => {
          this.resultadoConversao = resultado;
          console.log('Resultado da conversão:', this.resultadoConversao);
        },
        (error) => {
          console.error('Erro ao converter moeda', error);
        }
      );
  }
}
