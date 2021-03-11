import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MirukakuPageRoutingModule } from './mirukaku-routing.module';

import { MirukakuPage } from './mirukaku.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MirukakuPageRoutingModule
  ],
  declarations: [MirukakuPage]
})
export class MirukakuPageModule {}
