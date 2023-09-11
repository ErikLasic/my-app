import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Place } from 'src/app/place';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private selectedPlaceSource = new BehaviorSubject<Place | undefined>(undefined);
  selectedPlace$ = this.selectedPlaceSource.asObservable();

  setSelectedPlace(place: Place | undefined) {
    this.selectedPlaceSource.next(place);
  }

  getSelectedPlace(): Place | undefined {
    return this.selectedPlaceSource.value;
  }
}