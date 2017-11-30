import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class CartService {

  private gol = new BehaviorSubject<any>(['the', 'te']);
  constructor() { }

}
