import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DriverService } from './service/driver.service';
import { HttpClientModule } from '@angular/common/http';
import { DriversListComponent } from './components/drivers-list/drivers-list.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { DriverDetailModalComponent } from './components/driver-detail-modal/driver-detail-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    DriversListComponent,
    SpinnerComponent,
    DriverDetailModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DriverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
