import {App, IonicApp, IonicPlatform} from 'ionic-angular';;
import {Injectable, Inject} from 'angular2/core';
import {Http, Headers} from 'angular2/http';

@Injectable()
export class CoreServices {
    static get parameters() {
        return [[Http, App]];
    }
    
    static get CONSTANTS(){
        return {
            API_URL:'http://45.55.2.80:3000/v1/api',
            API_AUTHENTICATE :  '/authenticate',
            API_SUGGESTIONS :  '/suggestions' ,
            API_SONGS :  '/songs',
            API_USERS: '/users',
            API_FEEDS: '/feeds',
            API_FEED_COMMENT: '/comments',
            API_CURRENT_BAND : '/currentband',
            API_SEARCH_NEW_TRACK: '/searchtrack',
            API_ADD_MUSIXMATCH_TRACK:'/addmusicxmatch'
        };        
    }
  
    constructor(http, app){
        this.app = app;	
        this.http = http;  
        this.token = '';
        this.server = '';
    }
    
    
    //set the api token to be used on http call
    setHttpAccessToken(token){
        this.token = token;
    }
    
    setServerUrlAPI(url){
        this.server = url;
    }
       
    //return http get response
    httpGet(url){
        var serverUrl = this.server;
        var headers = new Headers();
        
        headers.append('Content-Type' , 'application/json');
        headers.append('Authorization', this.token);

        
        console.log('http get server', serverUrl);
        console.log('http get token', this.token);


        return  this.http.get(serverUrl + url,  {headers:headers});   
        
    }
    
    //return http post response
    httpPost(url, data){
        var serverUrl = this.CONSTANTS.API_URL;
        var headers = new Headers();
        
        headers.append('Content-Type' , 'application/json');
        headers.append('Authorization', this.token);
        
        if(data){
            return  this.http.post(serverUrl + url, data, {headers:headers});   
        }else{
            return  this.http.post(serverUrl + url, {headers:headers});     
        }
    }
    
  
    //Manage Storage to Session
    setStorage(key, value){
        localStorage[key] = value;
    }
    getStorage(key, defaultValue) {
        return localStorage[key] || defaultValue;
    }
    setStoreObject(key, value) {
        localStorage[key] = JSON.stringify(value);
    }  
    getStoreObject(key) {
        return JSON.parse(localStorage[key] || '{}');
    }
    
 
}
  
