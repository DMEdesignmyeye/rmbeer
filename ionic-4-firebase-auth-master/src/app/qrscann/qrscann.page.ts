import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import {
  BarcodeScannerOptions,
  BarcodeScanner
} from "@ionic-native/barcode-scanner/ngx";

@Component({
  selector: 'app-qrscann',
  templateUrl: './qrscann.page.html',
  styleUrls: ['./qrscann.page.scss'],
})
export class QrscannPage implements OnInit { 
  encodeData: any;
  scannedData: {};
  barcodeScannerOptions: BarcodeScannerOptions;

  Routes: Router;

  constructor(private barcodeScanner: BarcodeScanner, private router: Router) {
   this.encodeData = "https://www.FreakyJolly.com";
    //Options
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
  }
    //   this.encodeData = "https://www.rockmebeer.com";
  //   //Options
  //   this.barcodeScannerOptions = {
  //     showTorchButton: true,
  //     showFlipCameraButton: true
  //   };
  // }
  ngOnInit() {
  }
  
  // scanCode() {
  //   this.barcodeScanner.scan().then(barcodeData => {
  //     alert('Barcode data ' + JSON.stringify(barcodeData));
  //     this.scannedData = barcodeData;
  //   }).catch(err => {
  //     console.log('Error', err);
  //   });
  // }
  scanCode() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => { 
        this.router.navigateByUrl('/beneficiouno');

      })
      .catch(err => {
        console.log("Error", err);
      });
  }
  encodedText() {
    this.barcodeScanner
      .encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodeData)
      .then(
        encodedData => {
          console.log(encodedData);
          this.encodeData = encodedData;
        },
        err => {
          console.log("Error occured : " + err);
        }
      );
      
    } 

   
}
