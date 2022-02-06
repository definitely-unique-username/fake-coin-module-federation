import { Component, OnInit } from '@angular/core';
import { WalletLibService } from 'wallet-lib';

@Component({
  selector: 'app-cryptos-search',
  styleUrls: ['./cryptos-search.component.scss'],
  templateUrl: './cryptos-search.component.html',
})
export class CryptosSearchComponent implements OnInit {
  public active: boolean = false;
  public balance: number = 0;

  constructor(private readonly walletService: WalletLibService) { }

  public ngOnInit(): void {
      this.balance = this.walletService.balance;
  }

  public search(): void {
    this.active = true;
  }

  public reset(): void {
    this.active = false;
  }

  public purchase(): void {
    this.walletService.purchase(100);
    this.balance = this.walletService.balance;
   }
}
