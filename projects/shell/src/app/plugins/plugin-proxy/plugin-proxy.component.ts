import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, Input, OnChanges, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { PluginOptions } from '../plugin';

@Component({
  selector: 'app-plugin-proxy',
  templateUrl: './plugin-proxy.component.html',
  styleUrls: ['./plugin-proxy.component.scss']
})
export class PluginProxyComponent implements OnChanges {
  @Input() public options: PluginOptions;


  @ViewChild('placeholder', { read: ViewContainerRef, static: true })
  private readonly vcr: ViewContainerRef;

  public async ngOnChanges(): Promise<void> {
    this.vcr.clear();

    if (this.options) {
      const component: Type<unknown> = await loadRemoteModule(this.options).then(m => m[this.options.componentName]);
      this.vcr.createComponent(component);
    }
  }

}
