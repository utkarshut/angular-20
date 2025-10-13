import { Component } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-duplicates-removal',
  imports: [],
  templateUrl: './duplicates-removal.html',
  styleUrl: './duplicates-removal.css'
})
export class DuplicatesRemoval {
  str = "acanusabubxyaAaxbuhb";
  finalStr = "";
  constructor(){
    this.removeDuplicates(this.str);
  }
  removeDuplicates(str: String) {
    const map = new Map();
    console.log(str);
    for (let i = 0; i < str.length; i++) {
      if (!map.get(str.charAt(i))) {
        this.finalStr += str.charAt(i);
        map.set(str.charAt(i), 1)
      }
    }
  }
}
