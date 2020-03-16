import { Injectable } from '@angular/core';

declare let gtag: (...args) => void;

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {
  eventEmitter(eventName: string,
               eventCategory: string,
               eventLabel: string = null,
               eventValue: number = null ) {
    gtag('event', eventName, {
      eventCategory,
      eventLabel,
      eventValue
    });
  }

  constructor() { }
}
