import { Component } from '@angular/core';

@Component({
  selector: 'app-debounce-demo',
  imports: [],
  templateUrl: './debounce-demo.html',
  styleUrl: './debounce-demo.css'
})
export class DebounceDemo {
  searchedText: string = '';
  counter = 0;
  debouncedKeyUp: Function;
  constructor() {
    this.debouncedKeyUp = this.debounceFunction(this.onKeyUp, 500, true);
  }
  onKeyUp(event: any) {
    this.counter += 1;
    this.searchedText = event.target.value;
  }

  debounceFunction(fn: Function, delay: any, immediate = false) {
    let timer: any;
    return function (this: any, ...args: any) {
      let callnow = immediate && !timer;
      clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        fn.apply(this, args);
      }, delay);
      if (callnow) {
        immediate = false;
        fn.apply(this, args);
      }
    }
  }
}
