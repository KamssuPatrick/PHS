import { Injectable } from '@angular/core';

import { Build } from '../../models/build';

@Injectable()
export class Buildings {
  buildings: Build[] = [];

  defaultBuild: any = {
    "name": "Green park",
    "profilePic": "assets/imgs/location_feed_04.png",
    "about": "Bonapriso, Douala.",
    "nbTenants":16
  };
  


  constructor() {
    let buildings = [
      {
        "name": "Stone Garden",
        "profilePic": "assets/imgs/location_feed_01.png",
        "about": "Bonandjo, Douala.",
        "nbTenants":6
      },
      {
        "name": "Little Clock tower",
        "profilePic": "assets/imgs/location_feed_02.png",
        "about": "Essos, Yaoundé.",
        "nbTenants":12
      },
      {
        "name": "Play ground",
        "profilePic": "assets/imgs/location_feed_03.png",
        "about": "Mvog-Mbi, Yaoundé",
        "nbTenants":50
      },
      {
        "name": "Green park",
        "profilePic": "assets/imgs/location_feed_04.png",
        "about": "Bonapriso, Douala.",
        "nbTenants":13
      },
      {
        "name": "Woman Garden",
        "profilePic": "assets/imgs/location_feed_05.png",
        "about": "Bonapriso, Douala.",
        "nbTenants":16
      }
      
    ];

    for (let build of buildings) {
      this.buildings.push(new Build(build));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.buildings;
    }

    return this.buildings.filter((build) => {
      for (let key in params) {
        let field = build[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return build;
        } else if (field == params[key]) {
          return build;
        }
      }
      return null;
    });
  }

  add(build: Build) {
    this.buildings.push(build);
  }

  delete(build: Build) {
    this.buildings.splice(this.buildings.indexOf(build), 1);
  }
}
