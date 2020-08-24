import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { RegisterClientComponent } from './register-client/register-client.component';
import { ProfessionalsModule } from '../professionals/professionals.module'
import { SharedComponentsModule } from '../shared/shared-components/shared-components.module'
import { UtilModule } from '../shared/util/util.module'

@NgModule({
  declarations: [RegisterClientComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AppMaterialModule,
    ProfessionalsModule,
    SharedComponentsModule,
    UtilModule    
  ]
})
export class ClientsModule { }
