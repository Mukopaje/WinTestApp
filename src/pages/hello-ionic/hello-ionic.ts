import { Component } from '@angular/core';
import { Printer, PrintOptions } from '@ionic-native/printer';
import { Platform } from 'ionic-angular';
import { Toast } from '@ionic-native/toast';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(
    private prnt: Printer, 
    private platform: Platform,
    private tst: Toast) {

  }

  checkIfDeviceCanPrint() {
    (<any>window).cordova.plugins.printer.print('My First windows print!! .........',{printer: 'Microsoft Print to PDF'},
      (msg) => {

        if (msg) {
          console.log('Service is available!!');
          console.log(JSON.stringify(msg));
        } else {
          console.log('Service not available!!');
        }

      },
      (err) => {
        console.log(err);
      }
    );
  }

  // async checkIfDeviceCanPrint() {

  //   try {
  //     const platform = await this.platform.ready();
  //     if (platform === 'cordova') {
  //       console.log('Before the available')
  //       const available = await (<any>window).cordova.plugins.printer.pick();
  //       console.log('After available')
  //       if (available) {
  //         console.log('Is available')
  //        // const checked = await this.prnt.pick();
  //         this.toast(JSON.stringify(available));
  //       } else {
  //         this.toast('Sorry this device has no active printer service');
  //       }
  //     } else {
  //       this.toast('Sorry this only works on a real device');
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }

  // }

  toast(msg) {
    this.tst.show(msg, '5000', 'center').subscribe(
      toast => {
        console.log(toast);
      }
    );
  }
}
