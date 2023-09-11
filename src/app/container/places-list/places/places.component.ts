import { Component, Input } from '@angular/core';
import { Place } from 'src/app/place';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent {
  @Input() place!: Place;
}
