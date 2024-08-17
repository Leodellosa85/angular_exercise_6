import { Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ToasterPosition } from './components/toaster/toaster-position';
import { Subject, takeUntil } from 'rxjs';
import { ToastMessage } from './components/toaster/toast-message';
import { MyToasterLibraryService } from './my-toaster-library.service';
import { SHOW_HIDE } from './components/toaster/animation-service.service';


@Component({
  selector: 'nx-myToaster-library',
 templateUrl: './main.html',
 styleUrls: ['./style.scss'],
 encapsulation: ViewEncapsulation.None,
 animations : [SHOW_HIDE]
})
export class MyToasterLibraryComponent implements OnInit, OnDestroy{
  @Input('position') position: ToasterPosition;

  toasterSubject: Subject<void>;
  messages: ToastMessage[];

  constructor(private toasterService:  MyToasterLibraryService) {
    this.position = ToasterPosition.BOTTOM_RIGHT;
    this.toasterSubject = new Subject<void>();
    this.messages = [];
  }

  ngOnInit(): void {
    this.toasterService.onToastMessage()
      .pipe(takeUntil(this.toasterSubject))
      .subscribe(message => this._handleToastMessage(message))
  }

  private _handleToastMessage(message: ToastMessage) {
    if (this._isToasterPositionTop()) {
      this.messages.unshift(message);
    } else {
      this.messages.push(message);
    }
    setTimeout(() => this._removeMessage(message), message.duration);
  }

  private _isToasterPositionTop() {
    return this.position === ToasterPosition.TOP_LEFT ||
      this.position === ToasterPosition.TOP_CENTER ||
      this.position === ToasterPosition.TOP_RIGHT;
  }

  private _removeMessage(message: ToastMessage) {
    const index: number = this.messages.findIndex(e => e.id === message.id);
    if (index > -1) {
      this.messages.splice(index, 1);
    }
  }

  ngOnDestroy(): void {
    this.toasterSubject.next();
    this.toasterSubject.complete();
  }
}
