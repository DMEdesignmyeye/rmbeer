import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  constructor() { }
  slideOpts = { effect: 'cube', initialSlide: 0, speed: 300, direction: 'horizontal', loop: true };

  ngOnInit() {
  }

}
