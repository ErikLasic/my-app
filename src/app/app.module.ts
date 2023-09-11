import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { TestComponent } from './test/test.component';
import { ContainerComponent } from './container/container.component';
import { SearchComponent } from './container/search/search.component';
import { FormsModule } from '@angular/forms';
import { PlacesListComponent } from './container/places-list/places-list.component';
import { PlacesComponent } from './container/places-list/places/places.component';
import { HttpClientModule } from '@angular/common/http';
import { PlacesService } from 'src/app/Services/places.service';
import { PlacesDetailsComponent } from './container/places-details/places-details.component';
import {MatCardModule} from '@angular/material/card';
import { SharedService } from 'src/app/Services/shared.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TestComponent,
    ContainerComponent,
    SearchComponent,
    PlacesListComponent,
    PlacesComponent,
    PlacesDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    FormsModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [PlacesService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
