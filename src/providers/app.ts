import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ApiProvider } from './api';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';

@Injectable()
export class AppProvider {
  private invite: any;

  constructor(public http: Http, public api: ApiProvider) {
  }

  getSeats() {
    return this.api.get('seat-numbers', false).map(resp => resp.json());
  }

  getSeatRanking() {
    return this.api.get('seat-ranking', false).map(resp => resp.json());
  }

  edit(data) {
    return this.api.put('convites', true, data).map(resp => resp.json());
  }

  save(obj) {
    return this.api.post('convites', true, obj).map(resp => resp.json());
  }

  delete(id) {
    return this.api.delete('convites/'+id, true);
  }

  getInvite() {
		return this.invite;
	}

	setInvite(obj) {
    this.invite = obj;
  }

}
