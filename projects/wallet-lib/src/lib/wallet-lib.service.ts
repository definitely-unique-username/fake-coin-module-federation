import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WalletLibService {
  private balanceAmount: number = 1000;

  public get balance(): number {
    return this.balanceAmount;
  }

  constructor(){
    console.log('BALANCE SERVICE');
  }

  public purchase(purchaseAmount: number): void {
    this.balanceAmount -= purchaseAmount;
  }
}
