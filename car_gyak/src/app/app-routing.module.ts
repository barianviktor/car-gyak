import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
      /* {
        path: 'cars',
        children: [
          {
            path: '',
            component: CarComponent,
            pathMatch: 'full',
          },
          {
            path: 'new',
            component: CarComponent,
            pathMatch: 'full',
          },
          {
            path: ':id',
            component: CarComponent,
          },
        ],
      }, */
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
