import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { InputComponent } from './components/input/input.component';
import { TitleComponent } from './components/title/title.component';
import { ButtonComponent } from './components/button/button.component';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [
    CardComponent,
    InputComponent,
    TitleComponent,
    ButtonComponent,
    AlertComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    InputComponent,
    TitleComponent,
    ButtonComponent
  ]
})
export class SharedModule { }
