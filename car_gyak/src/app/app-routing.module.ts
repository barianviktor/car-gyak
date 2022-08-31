import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './admin/car/car.component';
import { NewCarComponent } from './admin/car/new-car/new-car.component';
import { DetailsComponent } from './admin/details/details.component';
import { HomeComponent } from './pages/home/home.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'admin',
    children: [
      {
        path: 'cars',
        children: [
          {
            path: '',
            component: CarComponent,
            pathMatch: 'full',
          },
          {
            path: 'new',
            component: NewCarComponent,
            pathMatch: 'full',
          },
          {
            path: ':id',
            component: CarComponent,
          },
        ],
      },
      {
        path: 'details',
        component: DetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
