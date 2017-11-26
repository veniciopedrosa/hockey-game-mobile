import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ViewController, LoadingController } from 'ionic-angular';
import { AppProvider } from "../../../providers/app";

@Component({
  selector: 'page-attetion',
  templateUrl: 'attetion.html'
})
export class AttetionPage {

  show: any;
  message: any;
  params: any;

  constructor(
    public loadingCtrl: LoadingController,
    public viewCtrl: ViewController,
    public navCtrl: NavController,
    public navParamsCtrl: NavParams,
    public alertCtrl: AlertController,
    public appPrvdr : AppProvider
  ) {

  }

  sendRequest(){
    let user =  this.navParamsCtrl.get('username');

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

    if(this.show){
      let type = "FILM";
      this.params = {
        "username" : user.username,
        "attentionType" : type
      }
    }else{
      let type = "MESSAGE";
      this.params = {
        "username" : user.username,
        "attentionType" : type,
        "message" : this.message
      }
    }


    let error = err => {
      console.log('err', err);
      loading.dismiss();
    }
    let success = res => {
      let confirm = this.alertCtrl.create({
        title: 'Success!',
        subTitle: 'Request sent.',
        buttons: ['Ok']
      });
      confirm.present();
      this.viewCtrl.dismiss();
      loading.dismiss();
    }
    this.appPrvdr.requestAttetion(this.params, user.username).subscribe(success, error)
  }

}
