import {Injectable} from '@angular/core';
import {Card} from "./card.class";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class CardsService {


  constructor(private http: Http) {

  }

  getCards(): Observable<any> {
    return this.getFontAwesomeCards();
  }

  getFontAwesomeCards(): Observable<any> {
    return this.http.get(prefixRepo('../../assets/cards.json'))
      .map((res)=> {
        let icons = res.json();
        return icons.map(icon => new Card(guid(), this.faTemplate(icon)));
      });
  }

  faTemplate(icon) {
    return '<i class="fa '+ icon +' aria-hidden="true"></i>';
  }

}


/** Generate ID between 1-50 */
function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

var prefixRepo = (path) => {
  return 'memory-card' + path;
};
