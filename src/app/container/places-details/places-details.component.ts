import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Place } from 'src/app/place';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-places-details',
  templateUrl: './places-details.component.html',
  styleUrls: ['./places-details.component.scss']
})
export class PlacesDetailsComponent implements OnInit {
  placeId: number | undefined;
  place: Place | undefined;
  isExpanded: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.placeId = +params['place_id'];

      this.place = this.sharedService.getSelectedPlace();
    });
  }

  toggleDescription() {
    this.isExpanded = !this.isExpanded;
  }
}