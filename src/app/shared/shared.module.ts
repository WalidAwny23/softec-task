import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LazyLoadImageModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    LazyLoadImageModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }
