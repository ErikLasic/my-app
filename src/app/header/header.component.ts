import { Component, OnInit, HostListener, Input } from '@angular/core';
import { Place } from 'src/app/place';
import { Router } from '@angular/router';
import { PlacesService } from 'src/app/Services/places.service';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title!: string;
  places: Place[] = [];

  windowWidth: number = window.innerWidth;
  breakpointWidth: number = 768;
  
  constructor(private router: Router, private placesService: PlacesService, private sharedService: SharedService) {}

  ngOnInit(): void {
    this.updateWindowWidth();
    this.placesService.loadPlaces().subscribe((places) => {
      this.places = places;
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateWindowWidth();
  }

  updateWindowWidth() {
    this.windowWidth = window.innerWidth;
  }

  goToRandomPlace() {
    const randomIndex = Math.floor(Math.random() * this.places.length);

    const randomPlace = this.places[randomIndex];

    this.sharedService.setSelectedPlace(randomPlace);
    this.router.navigate(['/places', randomPlace.id]);
  }
}
