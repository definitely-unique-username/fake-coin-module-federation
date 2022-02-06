import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { PluginOptions } from "../plugin";
import { delay, finalize } from 'rxjs/operators'

@Injectable({ providedIn: 'root' })
export class LookupService {
    private pendingSource: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    public pending$ = this.pendingSource.asObservable();

    public lookup(): Observable<PluginOptions[]> {
        this.pendingSource.next(true);

        return of([
            {
                type: 'module',
                remoteEntry: 'http://localhost:3001/remoteEntry.js',
                exposedModule: './chart1',
                displayName: 'Pricing Trend',
                componentName: 'Chart1Component'
            },
            {
                type: 'module',
                remoteEntry: 'http://localhost:3001/remoteEntry.js',
                exposedModule: './chart2',
                displayName: 'Watch List',
                componentName: 'Chart2Component'
            }
        ] as PluginOptions[])
            .pipe(
                delay(2000),
                finalize(() => {
                    console.log('FIN')
                    this.pendingSource.next(false)
                })
            );
    }
}