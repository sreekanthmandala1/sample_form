import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiblingService {

  constructor() { }

  // private dataSubject = new Subject<any>();
  private dataSubject = new BehaviorSubject<boolean>(false);

  public data$ = this.dataSubject.asObservable();

  sendData(data: any) {
    debugger
    this.dataSubject.next(data);
  }
}
