import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from '../app-material.module';

import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [HeaderComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule,    
    ReactiveFormsModule,    
    AppMaterialModule,
    FlexLayoutModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
