import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleChartsModule } from 'angular-google-charts';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './cmps/user/user.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ChartComponent } from './cmps/chart/chart.component';
import { ChartModule } from 'angular2-chartjs';
import { FilterComponent } from './cmps/filter/filter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ContactComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ChartComponent,
    FilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleChartsModule,
    ChartModule,
    FormsModule ,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
