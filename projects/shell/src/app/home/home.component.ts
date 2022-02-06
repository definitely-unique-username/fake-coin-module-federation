import { Component, OnInit } from '@angular/core';
import { WalletLibService } from 'wallet-lib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public balance: number = 0;

  constructor(
    private readonly walletService: WalletLibService
  ) { }

  ngOnInit() {
    this.balance = this.walletService.balance;
  }

}
