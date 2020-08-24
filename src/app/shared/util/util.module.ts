import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateToAgePipe } from './date-to-age.pipe';



@NgModule({
  declarations: [DateToAgePipe],
  imports: [
    CommonModule
  ],
  exports: [
    DateToAgePipe
  ]  
})
export class UtilModule { }
