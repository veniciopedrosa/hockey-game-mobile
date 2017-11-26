import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AppProvider } from "../../providers/app";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  seats: any;

  constructor(
    public navCtrl: NavController,
    public appPrvdr: AppProvider
  ) {

  }

  public open(){
    this.navCtrl.push(HomePage)
  }

  ionViewWillEnter(){
    this.getSeats();
  }

  getSeats(){
    let error = err => {
      console.log('err', err);
    }
    let success = res => {
      this.seats = res;
    }
    this.appPrvdr.getSeats().subscribe(success, error)
  }

}
