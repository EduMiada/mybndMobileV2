import {App, Platform} from 'ionic-angular';
import {CoreServices} from './core/core.services';
import {TabsPage} from  './core/tabs/tabs';
import {LogonPage} from './core/logon/logon';



@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  static get parameters() {
    return [[Platform]];
  }

  constructor(platform) {
    let self = this; 
    //this.rootPage = TabsPage;

    //if (session){
   //     self.rootPage = TabsPage; 
   // }
   // else{
        self.rootPage = LogonPage; 
    //};  

    platform.ready().then(() => {
      // The platform is now ready. Note: if this callback fails to fire, follow
      // the Troubleshooting guide for a number of possible solutions:
      //
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //
      // First, let's hide the keyboard accessory bar (only works natively) since
      // that's a better default:
      //
      // Keyboard.setAccessoryBarVisible(false);
      //
      // For example, we might change the StatusBar color. This one below is
      // good for dark backgrounds and light text:
      // StatusBar.setStyle(StatusBar.LIGHT_CONTENT)
    });
  }
}
