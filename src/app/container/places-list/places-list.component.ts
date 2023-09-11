import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlacesService } from 'src/app/Services/places.service';
import { Place } from 'src/app/place';
import { SharedService } from 'src/app/Services/shared.service'; 

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.scss']
})
export class PlacesListComponent implements OnInit {
  places: Place[] = [];

  constructor(private placesService: PlacesService, private sharedService: SharedService, private router: Router) {}

  @Input() searchText: string = "";

  ngOnInit(): void {
    this.placesService.loadPlaces().subscribe((places) => {
      this.places = places;
    });
  }

  onPlaceClick(place: Place) {
    this.sharedService.setSelectedPlace(place);
    this.router.navigate(['/places', place.id]);
  }
}
