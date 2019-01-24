import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListMasterPage } from '../list-master/list-master';

/**
 * Generated class for the BuildingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-building',
  templateUrl: 'building.html',
})
export class BuildingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuildingPage');
  }

  goTenantsPage(){
    this.navCtrl.setRoot(ListMasterPage);
  }
}
