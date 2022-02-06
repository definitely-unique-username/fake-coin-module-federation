import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WalletLibService } from 'wallet-lib';
import { PluginOptions } from '../plugins/plugin';
import { LookupService } from '../plugins/plugin-proxy/lookup.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public balance: number = 0;
  public pluginOptions$: Observable<PluginOptions[]>;
  public pending$: Observable<boolean>;

  constructor(
    private readonly walletService: WalletLibService,
    private readonly lookupService: LookupService
  ) { }

  ngOnInit() {
    this.balance = this.walletService.balance;
    this.pluginOptions$ = this.lookupService.lookup();
    this.pending$ = this.lookupService.pending$;
  }

}
