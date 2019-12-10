/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or an "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
export class Build {

    constructor(fields2: any) {
      // Quick and dirty extend/assign fields to this model
      for (const f in fields2) {
        // @ts-ignore
        this[f] = fields2[f];
      }
    }
  
  }
  
  export interface Build {
    [prop2: string]: any;
  }
  