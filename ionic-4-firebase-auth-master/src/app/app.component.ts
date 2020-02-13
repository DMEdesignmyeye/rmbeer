/**
* Ionic 4 Firebase Email Auth
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import { Component } from '@angular/core'; 

import { MenuController} from '@ionic/angular';

import {Data} from './home.service';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Router } from '@angular/router';
import { NgIfContext } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent { 

  
  searchTerm2 : any="";
  searchTerm : any="";
  jsonData2 : any="";
  jsonData : any="";   
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController, 
    public data : Data,
    private router: Router  
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.setFilteredItems();
      this.setFilteredItems2();
      
    });
  }
  openFirst() { 
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }  

  

  goTo() {
    this.menu.close('first'); 
    this.setFilteredItems();
  }
  goTo2() {  
    this.menu.close('end'); 
    this.setFilteredItems2();
  } 

  setFilteredItems() {   
    this.jsonData = this.data.filterItems(this.searchTerm); 
    } 
     
 
  ionViewDidLoad2(){
    this.setFilteredItems2();
        this.ionViewDidLoad2();
  }

  setFilteredItems2() { 
    this.jsonData2 = this.data.filterItems2(this.searchTerm2); 
    this.ionViewDidLoad2();
}
  
  openEnd() { 
    this.menu.open('end');
    this.menu.enable(false, 'first');
  } 
 
}
