import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { ListMasterPage } from '../list-master/list-master';

import { MainPage } from '../';
import { Buildings } from '../../providers';
import { Build } from '../../models/build';



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
  currentBuildings: Build[];
  constructor(public navCtrl: NavController,public buildings: Buildings, public modalCtrl: ModalController) {
    this.currentBuildings = this.buildings.query();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuildingPage');
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addBuilding() {
    let addModal = this.modalCtrl.create('BuildingCreatePage');
    addModal.onDidDismiss(build => {
      if (build) {
        this.buildings.add(build);
      }
    })
    addModal.present();
  }
  openBuilding(build: Build) {
    this.navCtrl.push('ListMasterPage', {
      build: build
    });
  }
  goTenantsPage(){
    this.navCtrl.push(MainPage);
  }
}
