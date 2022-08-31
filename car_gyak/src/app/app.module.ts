import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetailsComponent } from './admin/details/details.component';
import { ColorDetailsComponent } from './admin/details/color-details/color-details.component';
import { DesignDetailsComponent } from './admin/details/design-details/design-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingComponentComponent } from './shared/loading-component/loading-component.component';
import { MakerDetailsComponent } from './admin/details/maker-details/maker-details.component';
import { ColorDetailsFormComponent } from './admin/details/color-details/color-details-form/color-details-form.component';
import { DesignDetailsFormComponent } from './admin/details/design-details/design-details-form/design-details-form.component';
import { MakerDetailsFormComponent } from './admin/details/maker-details/maker-details-form/maker-details-form.component';
import { CarComponent } from './admin/car/car.component';
import { NewCarComponent } from './admin/car/new-car/new-car.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DetailsComponent,
    ColorDetailsComponent,
    DesignDetailsComponent,
    LoadingComponentComponent,
    MakerDetailsComponent,
    ColorDetailsFormComponent,
    DesignDetailsFormComponent,
    MakerDetailsFormComponent,
    CarComponent,
    NewCarComponent,
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
