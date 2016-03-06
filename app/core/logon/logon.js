import {Page, NavControler} from 'ionic-angular';
//import {FormBuilder, Validators, FORM_DIRECTIVES} from 'angular2/core';
import {UserServices} from '../../users/user.services';



//import {FormBuilder, Validators, FORM_DIRECTIVES} from 'angular2/angular2';
//import {NavController, Page} from 'ionic/ionic';
//import {UserServices} from '../users/user.services';


@Page({
  templateUrl:  'build/core/logon/logon.html',
   bindings: [UserServices]
})

export class LogonPage {
    static get parameters() {
        return [[UserServices]];
    }
    
  //constructor(nav: NavController, fb: FormBuilder, User:UserServices) {
  constructor(user) {

    //this.nav = nav;
    //this.user = User;
   
    /*this.loginForm = fb.group({
      server: ['http://cappm143-ps01/ppm/rest/v1', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  */
    //this.loadChart();
  
  }
  
  doSubmit(event) {
    let self = this;
    /*
    self.user.authenticate(self.loginForm.value).then(
       function(success){
          event.preventDefault();   
          self.nav.push(TabsPage); 
        }
      ).catch(function(error){
         alert(error);
    });
    
    */
    
  }
 
  
}
