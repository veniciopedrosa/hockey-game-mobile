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

      if (platform.is('cordova')) {
        var notificationOpenedCallback = function(jsonData) {
          console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
        };

        window["plugins"].OneSignal
        .startInit("14d50885-af1b-4c57-8a76-ee93fe5ec427", "1045398925092")
        .handleNotificationOpened(notificationOpenedCallback)
        .endInit();
      }
    });
  }
}
