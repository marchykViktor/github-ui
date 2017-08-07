import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, 
         MdCheckboxModule, 
         MdCardModule, 
         MdGridListModule, 
         MdListModule, 
         MdIconModule, 
         MdTooltipModule, 
         MdMenuModule } from '@angular/material';

@NgModule({
  imports: [MdButtonModule, 
            MdCheckboxModule,
            MdCardModule, 
            MdGridListModule,
            MdListModule,
            MdIconModule,
            MdTooltipModule,
            MdMenuModule,
            CommonModule],
  exports: [MdButtonModule, 
            MdCheckboxModule,
            MdCardModule,
            MdGridListModule,
            MdIconModule,
            MdTooltipModule,
            MdMenuModule,
            MdListModule],
  declarations: []
})
export class MaterialModule { }
