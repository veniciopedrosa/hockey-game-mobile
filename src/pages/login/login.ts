import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
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
    public loadingCtrl:LoadingController,
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
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `
      <div class="cssload-loader">
      <div class="cssload-inner cssload-one"></div>
      <div class="cssload-inner cssload-two"></div>
      <div class="cssload-inner cssload-three"></div>
      </div>`
    });
    loading.present();

    let params = {"fanName" : this.fanName}

    let error = err => {
      let confirm = this.alertCtrl.create({
        title: 'Erro!',
        subTitle: 'Tente novamente.',
        buttons: ['Ok']
      });
      confirm.present();
      loading.dismiss();
    }
    let success = res => {
      let user = JSON.stringify(res);
      window.localStorage.setItem('user', JSON.stringify(res));
      window.localStorage.setItem('notification', JSON.stringify(res.receiveNotification));

      this.navCtrl.setRoot(HomePage);
      loading.dismiss();
    }
    this.appPrvdr.login(params, this.numberSeat).subscribe(success,error);
  }

}
