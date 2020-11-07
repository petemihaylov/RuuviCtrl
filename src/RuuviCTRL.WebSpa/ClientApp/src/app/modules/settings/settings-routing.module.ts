import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SettingsComponent} from './settings.component';
import {SlaComponent} from './sla/sla.component';
import {SlaEditComponent} from './sla-edit/sla-edit.component';
import {SlaCreateComponent} from './sla-create/sla-create.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    children: [
      {
        path: 'overview',
        component: SlaComponent,
      },
      {
        path: ':id/edit',
        component: SlaEditComponent,
      },
      {
        path: 'create',
        component: SlaCreateComponent,
      },
      { path: '**', redirectTo: 'overview', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
