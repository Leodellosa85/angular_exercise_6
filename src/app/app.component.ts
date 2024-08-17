import { Component, OnInit } from '@angular/core';
import { ButtonColor, ButtonShape, ButtonSize, ButtonStyle, MyToasterLibraryService, ToasterPosition, ToastType } from 'myToaster-library';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  ButtonColor = ButtonColor;
  ButtonSize = ButtonSize;
  ButtonStyle = ButtonStyle;
  ButtonShape = ButtonShape;
  title = 'angular-library';

  ToasterPosition = ToasterPosition;
  ToastType = ToastType;

  constructor(private toasterService: MyToasterLibraryService) {}

  ngOnInit() {
  }

  sendToast(type: ToastType) {
    this.toasterService.toast("This is a test", type);
  }
}
