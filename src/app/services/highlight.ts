import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Highlight {
  log(message: string) {
    console.log('%c' + message, 'color: green; font-weight: bold;');
  }
}
