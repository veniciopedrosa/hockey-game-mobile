import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http } from '@angular/http';
import { LoadingController } from "ionic-angular";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Storage } from '@ionic/storage';

@Injectable()
export class ApiProvider {

  url: string = 'http://app.geniepedidos.com.br:8080/hockey/app';

  constructor(
    public http: Http,
    public storage: Storage,
  ) {
  }


  _getOptionsToken(value?) {

    // let headers = new Headers({"Authorization": "Bearer " + token });
    let headers = new Headers({"Authorization": "Basic " + btoa(value + ":" + value)});

    let options = new RequestOptions({ headers: headers });

    return options;
  }
  _getOptions() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return options;
  }


  get(endpoint: string, options: boolean) {
    if (!options) {
      return this.http.get(this.url + '/' + endpoint,  this._getOptions());
    } else {
      return this.http.get(this.url + '/' + endpoint,  this._getOptionsToken());
    }
  }

  post(endpoint: string, options: boolean, body?: any, value?: any) {
    if (!options) {
      return this.http.post(this.url + '/' + endpoint, body, this._getOptions());
    } else {
      if(value){
        return this.http.post(this.url + '/' + endpoint, body, this._getOptionsToken(value));
      }else{
        return this.http.post(this.url + '/' + endpoint, body, this._getOptionsToken(body));
      }
    }
  }

  put(endpoint: string, options: boolean, body?: any) {
    if (!options) {
      return this.http.put(this.url + '/' + endpoint, body, this._getOptions());
    } else {
      return this.http.put(this.url + '/' + endpoint, body, this._getOptionsToken());
    }
  }

  delete(endpoint: string, options: boolean, body?: any) {
    if (!options) {
      return this.http.delete(this.url + '/' + endpoint, this._getOptions());
    } else {
      return this.http.delete(this.url + '/' + endpoint, this._getOptionsToken());
    }
  }

  patch(endpoint: string, options: boolean, body?: any) {
    if (!options) {
      return this.http.patch(this.url + '/' + endpoint, body, this._getOptions());
    } else {
      return this.http.patch(this.url + '/' + endpoint, body, this._getOptionsToken());
    }
  }

}
