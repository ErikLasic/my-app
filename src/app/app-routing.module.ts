import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { ContainerComponent } from './container/container.component';
import { PlacesDetailsComponent } from './container/places-details/places-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/places', pathMatch: 'full' },
  { path: 'places', component: ContainerComponent },
  { path: 'places/:place_id', component: PlacesDetailsComponent },
  { path: 'about', component: TestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
