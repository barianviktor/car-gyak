import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CarComponent } from './admin/car/car.component';
import { NewCarComponent } from './admin/new-car/new-car.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetailsComponent } from './admin/details/details.component';
import { ColorDetailsComponent } from './admin/details/color-details/color-details.component';
import { DesignDetailsComponent } from './admin/details/design-details/design-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingComponentComponent } from './shared/loading-component/loading-component.component';
import { MaufacturerDetailsComponent } from './admin/details/maufacturer-details/maufacturer-details.component';
@NgModule({
  declarations: [
    AppComponent,
    NewCarComponent,
    HomeComponent,
    CarComponent,
    HeaderComponent,
    FooterComponent,
    DetailsComponent,
    ColorDetailsComponent,
    DesignDetailsComponent,
    LoadingComponentComponent,
    MaufacturerDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
