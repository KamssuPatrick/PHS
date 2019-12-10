import { Injectable } from '@angular/core';

import { Build } from '../../models/build';
import { Api } from '../api/api';

@Injectable()
export class Buildings {

  constructor(public api: Api) { }

  query(params?: any) {
    return this.api.get('/buildings', params);
  }

  add(build: Build) {
  }

  delete(build: Build) {
  }

}
