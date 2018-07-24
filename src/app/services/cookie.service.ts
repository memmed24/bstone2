import { Injectable } from '@angular/core';

@Injectable()
export class CookieService {

  constructor() { }

  read(name: string) {
    var result = new RegExp('(?:^|; )' + encodeURIComponent(name) + '=([^;]*)').exec(document.cookie);
    return result ? result[1] : null;
  }

  write(name: string, value: string, days?: number) {
      if (!days) {
          days = 365 * 20;
      }
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      
      var expires = "; expires=" + date.toUTCString();
      
      document.cookie = name + "=" + value + expires + "; path=/";
      return value;
  }

  remove(name: string) {
    this.write(name, "", -1);
  }

}
