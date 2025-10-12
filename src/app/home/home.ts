import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [ FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  public searchText = ""
  onInput(){
    this.searchText = "Searched_" + this.searchText ;
  }
}
