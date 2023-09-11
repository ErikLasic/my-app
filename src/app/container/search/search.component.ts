import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchText: string = '';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  updateSearchText() {
    this.searchTextChanged.emit(this.searchText);
  }

  clearInput() {
    this.searchText = "";
    this.searchTextChanged.emit(this.searchText);
  }
}
