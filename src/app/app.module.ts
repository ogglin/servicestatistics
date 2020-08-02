import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ApiService} from './api.service';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {CookieService} from 'ngx-cookie-service';
import {MatButtonModule} from '@angular/material/button';
import {MainMenuComponent} from './components/main-menu/main-menu.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {SelectCompanyComponent} from './components/select-company/select-company.component';
import {SelectClientComponent} from './components/select-client/select-client.component';
import {SelectArticleComponent} from './components/select-article/select-article.component';
import {ShowStatusListComponent} from './components/show-status-list/show-status-list.component';
import {InputTitleComponent} from './components/input-title/input-title.component';
import {InputSnComponent} from './components/input-sn/input-sn.component';
import {InputPrintCycleComponent} from './components/input-print-cycle/input-print-cycle.component';
import {InputScannerCycleComponent} from './components/input-scanner-cycle/input-scanner-cycle.component';
import {InputInventoryNumComponent} from './components/input-inventory-num/input-inventory-num.component';
import {InputStatusComponent} from './components/input-status/input-status.component';
import {InputWorksComponent} from './components/input-works/input-works.component';
import {SelectWorksComponent} from './components/select-works/select-works.component';
import {SelectDetailsComponent} from './components/select-details/select-details.component';
import {SelectEmployeeComponent} from './components/select-employee/select-employee.component';
import {InputWorkTimeComponent} from './components/input-work-time/input-work-time.component';
import {SelectPlaceComponent} from './components/select-place/select-place.component';
import {InputDescriptionComponent} from './components/input-description/input-description.component';
import {ViewAllListComponent} from './components/view-all-list/view-all-list.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    SelectCompanyComponent,
    SelectClientComponent,
    SelectArticleComponent,
    ShowStatusListComponent,
    InputTitleComponent,
    InputSnComponent,
    InputPrintCycleComponent,
    InputScannerCycleComponent,
    InputInventoryNumComponent,
    InputStatusComponent,
    InputWorksComponent,
    SelectWorksComponent,
    SelectDetailsComponent,
    SelectEmployeeComponent,
    InputWorkTimeComponent,
    SelectPlaceComponent,
    InputDescriptionComponent,
    ViewAllListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatGridListModule,
  ],
  providers: [ApiService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
