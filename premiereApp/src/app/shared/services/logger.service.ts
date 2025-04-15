import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  log(text: string) {
    console.log('LOGGER INJECTED IN A SERVICE', text + ' Crotte CACA BOUDIN')
  }
}
