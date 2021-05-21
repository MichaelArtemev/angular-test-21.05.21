import { NgModule } from "@angular/core";
import { ButtonAddComponent } from "./button-add.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { ModalComponent } from "../modal/modal.component";


@NgModule({
  declarations: [
    ButtonAddComponent,
    ModalComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    ButtonAddComponent,
    ModalComponent
  ]
})
export class ButtonAddModule {

}