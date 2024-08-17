import { NgModule } from '@angular/core';
import { MyToasterLibraryComponent } from './my-toaster-library.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonListComponent } from './components/buttons/button-list/button-list.component';



@NgModule({
  declarations: [
    MyToasterLibraryComponent,
    ButtonListComponent
  ],
  imports: [ CommonModule,BrowserAnimationsModule
  ],
  exports: [
    MyToasterLibraryComponent,ButtonListComponent
  ]
})
export class MyToasterLibraryModule { }
