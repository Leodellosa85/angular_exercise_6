import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ToastMessage } from './components/toaster/toast-message';
import { ToastType } from './components/toaster/toast-type';

@Injectable({
  providedIn: 'root'
})
export class MyToasterLibraryService {
  private defaultDuration: number;
  private toastMessageSource: Subject<ToastMessage>;

  constructor() {
    this.defaultDuration = 2000;
    this.toastMessageSource = new Subject<ToastMessage>();
  }

  public toast(message: string, type: ToastType, duration: number = this.defaultDuration): void {
    this.toastMessageSource.next(new ToastMessage(message, type, duration));
  }

  public success(message: string, duration: number = this.defaultDuration): void {
    this.toast(message, ToastType.SUCCESS, duration);
  }

  public info(message: string, duration: number = this.defaultDuration): void {
    this.toast(message, ToastType.INFO, duration);
  }

  public warning(message: string, duration: number = this.defaultDuration): void {
    this.toast(message, ToastType.WARNING, duration);
  }

  public danger(message: string, duration: number = this.defaultDuration): void {
    this.toast(message, ToastType.DANGER, duration);
  }

  public onToastMessage(): Observable<ToastMessage> {
    return this.toastMessageSource.asObservable();
  }
}
