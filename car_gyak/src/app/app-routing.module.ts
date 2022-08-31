import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './admin/car/car.component';
import { DetailsComponent } from './admin/details/details.component';
import { NewCarComponent } from './admin/new-car/new-car.component';
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
        path: 'car',
        children: [
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
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
