import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadImageModule } from 'ng-lazyload-image';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LazyLoadImageModule,
  ],
  exports:[
    LazyLoadImageModule
  ]
})
export class SharedModule { }
