import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
@Component({
  selector: 'app-espumantes',
  templateUrl: './espumantes.page.html',
  styleUrls: ['./espumantes.page.scss'],
})
export class EspumantesPage implements OnInit {

  @ViewChild('slideWithNav') slideWithNav: IonSlides;
  @ViewChild('slideWithNav2') slideWithNav2: IonSlides;
  @ViewChild('slideWithNav3') slideWithNav3: IonSlides;
 

  sliderOne: any;
  sliderTwo: any;
  sliderThree: any;


  //Configuration for each Slider
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 2,
    loop: true,
    autoplay:true
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

  constructor() { 
    //Item object for Nature
    this.sliderOne =
      {
        isBeginningSlide: true,
        isEndSlide: false,
        slidesItems: [
          {
            id: 1,
            image: '../../assets/img/menu/chan/1.jpg'

          },
          {
            id: 2,
            image: '../../assets/img/menu/chan/2.jpg'
          },
          {
            id: 3,
            image: '../../assets/img/menu/chan/3.jpg'
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
            id: 1,
            image: '../../assets/img/menu/5.jpg'
          },
          {
            id: 2 ,
            image: '../../assets/img/menu/5.jpg'
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
            image: '../../assets/img/menu/tra/1.jpg'
          },
          {
            id: 12,
            image: '../../assets/img/menu/tra/2.jpg'
          },
          {
            id: 13,
            image: '../../assets/img/menu/tra/3.jpg'
          },
          {
            id: 14,
            image: '../../assets/img/menu/tra/4.jpg'
          },
          {
            id: 15,
            image: '../../assets/img/menu/tra/1.jpg'
          }
        ]
      };
  }

  ngOnInit() {
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
