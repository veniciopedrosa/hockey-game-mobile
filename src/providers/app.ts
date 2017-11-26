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

  login(data, value) {
    return this.api.post('my-info', true, data, value).map(resp => resp.json());
  }

  requestAttetion(data, cretendials) {
    return this.api.post('new-attention', true, data, cretendials).map(resp => resp.json());
  }

  changeNotifications(cretendials) {
    return this.api.post('invert-notification-status', true, cretendials).map(resp => resp.json());
  }

}
