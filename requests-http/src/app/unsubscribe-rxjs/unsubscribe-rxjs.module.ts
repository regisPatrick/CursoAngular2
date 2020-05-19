import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnsubscribePocComponent } from './unsubscribe-poc/unsubscribe-poc.component';
import { PocBaseComponent } from './poc-base/poc-base.component';
import { PocTakeComponent } from './componentes/poc-take.component';
import { PocComponent } from './componentes/poc.component';
import { PocUnsubComponent } from './componentes/poc-unsub.component';
import { PocTakeUntilComponent } from './componentes/poc-take-until.component';
import { PocAsyncComponent } from './componentes/poc-async.componet';
import { UnsubscribeRxjsRoutingModule } from './unsubscribe-rxjs-routing.module';

@NgModule({
  declarations: [
    UnsubscribePocComponent, 
    PocBaseComponent,
    PocAsyncComponent,
    PocTakeUntilComponent,
    PocTakeComponent,
    PocUnsubComponent,
    PocComponent
  ],
  imports: [
    CommonModule,
    UnsubscribeRxjsRoutingModule
  ]
})
export class UnsubscribeRxjsModule { }
