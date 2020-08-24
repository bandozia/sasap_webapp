import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout'
import { MAT_DATE_LOCALE } from '@angular/material/core';

import { RequestsInterceptor } from './shared/shared-services/requests.iterceptor'
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { CoreModule } from './core/core.module'
import { ProfessionalsModule } from './professionals/professionals.module'
import { ClientsModule } from './clients/clients.module'
import { SharedComponentsModule } from './shared/shared-components/shared-components.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    CoreModule,            
    ProfessionalsModule,    
    ClientsModule,
    SharedComponentsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: RequestsInterceptor, multi: true},
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
