import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Place } from 'src/app/place';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private dataUrl = 'assets/data/places-data.json';
  private places: Place[] = [];

  constructor(private http: HttpClient) {}

  loadPlaces(): Observable<Place[]> {
    return this.http.get<Place[]>(this.dataUrl).pipe(
      tap((places) => {
        this.places = places;
      })
    );
  }
}
