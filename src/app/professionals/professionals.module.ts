import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterProfessionalComponent } from './register-professional/register-professional.component';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SharedServicesModule } from '../shared/shared-services/shared-services.module';
import { ListProfessionalsComponent } from './list-professionals/list-professionals.component';
import { ProfessionalMicroSearchComponent } from './professional-micro-search/professional-micro-search.component'

@NgModule({
  declarations: [
    RegisterProfessionalComponent,
    ListProfessionalsComponent,
    ProfessionalMicroSearchComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AppMaterialModule,
    SharedServicesModule
  ],
  exports: [
    ProfessionalMicroSearchComponent
  ]
})
export class ProfessionalsModule { }
