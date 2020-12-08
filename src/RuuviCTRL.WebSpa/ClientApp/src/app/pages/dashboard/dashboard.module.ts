import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { WidgetsModule } from '../../_metronic/partials/content/widgets/widgets.module';
import { DashboardTableComponent } from './dashboard-table/dashboard-table.component';
import { HttpClient } from '@angular/common/http';
import { RuuviWebsocketService } from './_services/ruuvi-websocket.service';
import { NotificationWebsocketService } from './_services/notification-websocket.service';
import { DashboardMapComponent } from './dashboard-map/dashboard-map.component';
import { LeafletWidgetComponent } from './_widgets/leaflet-widget/leaflet-widget.component';
import { PopupComponent } from './dashboard-map/popup.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [DashboardComponent, DashboardTableComponent, DashboardMapComponent, LeafletWidgetComponent],
  imports: [
    CommonModule,
    WidgetsModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
      },
    ]),
  ],
  providers: [HttpClient, RuuviWebsocketService, NotificationWebsocketService],
  entryComponents: [PopupComponent]
})
export class DashboardModule {
  constructor(private injector: Injector) {
    const PopupElement = createCustomElement(PopupComponent, {injector});
    // Register the custom element with the browser.
    customElements.define('popup-element', PopupElement);
  }
}
