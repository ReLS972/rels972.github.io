import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatInputModule,
  MatFormFieldModule
} from '@angular/material';

@NgModule({
  exports: [
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class AngularMaterialModule { }
