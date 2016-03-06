import {App, IonicApp, IonicPlatform} from 'ionic-angular';;
import {Injectable, bind} from 'angular2/core';
import {CoreServices} from '../core/core.services';


@Injectable()
export class UserServices {
    
    static get parameters() {
        return [[App, CoreServices]];
    }
    
    constructor(app,core) {
        this.app = app;
        this.core = core;
        
        this.token = false;
        this.username = false;
        this.server = false;
    }
    
  
    // check if there's a user session present
    isConnected () {
        // if this session is already initialized in the service  
        if (this.token) {    
            console.log('User is has a valid token, is connected');
            return true;
        } 
        else {        
            // check if there's a session in localstorage from previous use.
            // if it is, pull into our service
            var user = this.core.getStoreObject('user');    
            console.log('User has connected befere has a valid token', user);
            
            if (user.token) {					
                this.setSessionAPI(user);
                return true;			
            } 
            else {
                // no user info in localstorage, reject
                console.log('User DONT have a valid token');
                return false;
            }
        } //end if
    }; //end func
   
    
  //return Authenticate user promise
  authenticate(credentials) {

    //set the server address and token be used on the following calls 
    this.token = 'Basic ' + window.btoa(credentials.username + ':' + credentials.password);
    this.core.setServerUrlAPI(credentials.server);
    this.core.setHttpAccessToken(this.token);

    //new promise 
    let self = this;
    
    return new Promise(function(resolve, reject){
      //call logon api  
    
    
        try{
            // the api dont have an auth method calling a dummy query
            self.core.httpGet("/projects?filter=(code = 'a'')").subscribe(function (response) {     
              //if success set user session and return 
              //if not return error message 
              if(response.status==200){
                self.setSessionAPI({success:true, token: self.token, username: credentials.username, server:credentials.server});
                resolve(true);          
              }
              else {
                reject('Could not logon to the server');
              }
            }); //http get
          
        } 
        catch (error){
            
            console.log('call error', error);
            reject('Could logon to the server');
        
        };
  }); //promise
      
      
  };
  
  //Authenticate user
  destroySession() {
    this.core.setStoreObject('user', {});
    this.core.setHttpAccessToken(undefined);
		this.token= false;
		this.username=false;
		this.server= false;
  };
  
  
  // set session data
  setSessionAPI (user) {
    
    
    if (user.success){
      
      if (user.token) this.token = user.token;
      if (user.token) this.token = user.token;
      if (user.username) this.username = user.username;
      
      this.core.setStoreObject('user', user);
      
      this.core.setServerUrlAPI(user.server);
      this.core.setHttpAccessToken(this.token);      
      return true;
    }
    
    
    return false;
       
	};
  
}


