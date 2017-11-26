import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AppProvider } from "../../providers/app";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  seats: any;
  numberSeat: any;
  fanName: any;

  constructor(
    public alertCtrl: AlertController,
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

  login(){
    let params = {"fanName" : this.fanName}

    let error = err => {
      let confirm = this.alertCtrl.create({
        title: 'Erro!',
        subTitle: 'Tente novamente.',
        buttons: ['Ok']
      });
      confirm.present();
    }
    let success = res => {
      let user = JSON.stringify(res);
      window.localStorage.setItem('user', JSON.stringify(res));
      window.localStorage.setItem('notification', JSON.stringify(res.receiveNotification));

      this.navCtrl.setRoot(HomePage);
    }
    this.appPrvdr.login(params, this.numberSeat).subscribe(success,error);
  }

}
