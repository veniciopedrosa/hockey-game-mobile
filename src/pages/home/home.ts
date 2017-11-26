import { Component } from '@angular/core';
import { NavController, ModalController, ToastController } from 'ionic-angular';
import { AppProvider } from "../../providers/app";
import { AttetionPage } from "./attetion/attetion";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  playersPenguins: any;
  playersAvalanche: any;
  info: string = "lineup";
  supporter: string = "online";
  rankingSeats: any;
  user: any = window.localStorage.getItem('user');

  constructor(
    public toastCtrl: ToastController,
    public navCtrl: NavController,
    public appPrvdr: AppProvider,
    public modalCtrl: ModalController
  ) {
    this.playersPenguins =
    [
      {
        "number": 15,
        "name"  : "R. Sheahan"
      },
      {
        "number": 17,
        "name"  : "B. Rust"
      },
      {
        "number": 71,
        "name"  : "E. Malkin"
      },
      {
        "number": 33,
        "name"  : "Z. Shara"
      },
      {
        "number": 14,
        "name"  : "P. Postma"
      },
      {
        "number": 40,
        "name"  : "T. Rask"
      }
    ]

    this.playersAvalanche =
    [
      {
        "number": 91,
        "name"  : "V. Kamenev"
      },
      {
        "number": 17,
        "name"  : "B. Comeau"
      },
      {
        "number": 71,
        "name"  : "C. Soderberg"
      },
      {
        "number": 33,
        "name"  : "P. Nemeth"
      },
      {
        "number": 14,
        "name"  : "A. Lindholm"
      },
      {
        "number": 40,
        "name"  : "A. Hammond"
      }
    ]
  }

  ionViewWillEnter(){
    this.getSeatRanking();
  }

  getSeatRanking(){
    let error = err => {
      console.log('err', err);
    }
    let success = res => {
      this.rankingSeats = res;
    }
    this.appPrvdr.getSeatRanking().subscribe(success, error)
  }

  openRequest() {
   let profileModal = this.modalCtrl.create(AttetionPage, { username: this.user });
   profileModal.present();
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'User was added successfully',
      duration: 3000
    });
    toast.present();
  }

}
