/**
* Ionic 4 Firebase Email Auth
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/ 
import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})  
export class HomePage {
  
  @ViewChild('slideWithNav') slideWithNav: IonSlides;
  @ViewChild('slideWithNav2') slideWithNav2: IonSlides;
  @ViewChild('slideWithNav3') slideWithNav3: IonSlides;
  user: any;   
   email: string = '';
  password: string = '';
  username: string = ''; 
  image: number;
  phone: number;
  error: string;
  userWantsToSignup: boolean = false;
  linkError: string = '';
  sliderOne: any;
  sliderTwo: any;
  sliderThree: any;

    //Configuration for each Slider
    slideOptsOne = {
      initialSlide: 0,
      slidesPerView: 1,
      loop: true,
      autoplay:true,
      centeredSlides: true
    };
    slideOptsTwo = {
      initialSlide: 1,
      slidesPerView: 2,
      loop: true,
      centeredSlides: true
    };
    slideOptsThree = {
      initialSlide: 0,
      slidesPerView: 3
    };
  


  constructor(private toastController: ToastController, public loadingController: LoadingController, private fireauth: AngularFireAuth, private router: Router) {
  
    //Item object for Nature
    this.sliderOne =
      {
        isBeginningSlide: true,
        isEndSlide: false,
        slidesItems: [ 
          {
            id: 1,
            image: '../../assets/img/1.jpg'
          },
          {
            id: 2,
            image: '../../assets/img/2.jpg'
          },
          {
            id: 3,
            image: '../../assets/img/3.jpg'
          },
          {
            id: 4,
            image: '../../assets/img/4.jpg'
          },
          {
            id: 5,
            image: '../../assets/img/5.jpg'
          },
          {
            id: 6,
            image: '../../assets/img/6.jpg'
          }
        ]
      };
    //Item object for Food
    this.sliderTwo =
      {
        isBeginningSlide: true,
        isEndSlide: false,
        slidesItems: [
          {
            id: 6,
            image: '../../assets/img/h1.jpg'
          },
          {
            id: 7,
            image: '../../assets/img/h2.jpg'
          },
          {
            id: 8,
            image: '../../assets/img/h3.jpg'
          },
          {
            id: 9,
            image: '../../assets/img/h4.jpg'
          },
          {
            id: 10,
            image: '../../assets/img/h1.jpg'
          }
        ]
      };
    //Item object for Fashion
    this.sliderThree =
      {
        isBeginningSlide: true,
        isEndSlide: false,
        slidesItems: [
          {
            id: 11,
            image: '../../assets/img/h1.jpg'
          },
          {
            id: 12,
            image: '../../assets/img/h2.jpg'
          },
          {
            id: 13,
            image: '../../assets/img/h3.jpg'
          },
          {
            id: 14,
            image: '../../assets/img/h4.jpg'
          },
          {
            id: 15,
            image: '../../assets/img/h1.jpg'
          }
        ]
      };
  }
  ionViewDidEnter() {
    this.fireauth.auth.onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        console.log(this.user);
      }
    })
  }

 
  updateEmail() {
    this.user.updateEmail(this.email)
      .then(() => {
        this.email = '';
        this.presentToast('Email updated', false, 'bottom', 1000);
        this.error = '';
      })
      .catch(err => {
        console.log(` failed ${err}`);
        this.error = err.message;
      });
  }

  updateUsername() {
    this.user.updateProfile({
      displayName: this.username
    })
      .then((data) => {
        console.log(data);
        this.username = '';
        this.presentToast('Username updated', false, 'bottom', 1000);
        this.error = '';
      })
      .catch(err => {
        console.log(` failed ${err}`);
        this.error = err.message;
      });
  }

  updateImage() {

    this.user.updateProfile({
      photoURL: `https://picsum.photos/id/${this.image}/200/200`
    })
      .then((data) => {
        console.log(data);
        this.image = null;
        this.presentToast('Image updated', false, 'bottom', 1000);
        this.error = '';
      })
      .catch(err => {
        console.log(` failed ${err}`);
        this.error = err.message;
      });
  }

  updatePassword() {
    this.user.updatePassword(this.password)
      .then(() => {
        this.password = '';
        this.presentToast('Password updated', false, 'bottom', 1000);
        this.error = '';
      })
      .catch(err => {
        console.log(` failed ${err}`);
        this.error = err.message;
      });
  }

  logout() {
    this.fireauth.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    })
  }

  async presentToast(message, show_button, position, duration) {
    const toast = await this.toastController.create({
      message: message,
      showCloseButton: show_button,
      position: position,
      duration: duration
    });
    toast.present();
  }
   
  
  
    //Move to Next slide
    slideNext(object, slideView) {
      slideView.slideNext(500).then(() => {
        this.checkIfNavDisabled(object, slideView);
      });
    }
  
    //Move to previous slide
    slidePrev(object, slideView) {
      slideView.slidePrev(500).then(() => {
        this.checkIfNavDisabled(object, slideView);
      });;
    }
  
    //Method called when slide is changed by drag or navigation
    SlideDidChange(object, slideView) {
      this.checkIfNavDisabled(object, slideView);
    }
  
    //Call methods to check if slide is first or last to enable disbale navigation  
    checkIfNavDisabled(object, slideView) {
      this.checkisBeginning(object, slideView);
      this.checkisEnd(object, slideView);
    }
  
    checkisBeginning(object, slideView) {
      slideView.isBeginning().then((istrue) => {
        object.isBeginningSlide = istrue;
      });
    }
    checkisEnd(object, slideView) {
      slideView.isEnd().then((istrue) => {
        object.isEndSlide = istrue;
      }); 
  } 
}