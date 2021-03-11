import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MirukakuPage } from './mirukaku.page';

const routes: Routes = [
  {
    path: '',
    component: MirukakuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MirukakuPageRoutingModule {}
