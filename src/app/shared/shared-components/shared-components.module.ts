import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from '../../app-material.module';

import { AddressEntryComponent } from './address-entry/address-entry.component';


@NgModule({
  declarations: [AddressEntryComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    AppMaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    AddressEntryComponent
  ]
})
export class SharedComponentsModule { }
