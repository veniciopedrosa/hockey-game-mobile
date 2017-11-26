import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
  user: any = window.localStorage.getItem('user');;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {

      if(this.user){
        this.rootPage = HomePage;
      }else{
        this.rootPage = LoginPage;
      }
      statusBar.backgroundColorByHexString("#2C4770");
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
