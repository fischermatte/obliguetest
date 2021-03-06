import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObMasterLayoutModule, ObMasterLayoutConfig, multiTranslateLoader, ObHttpApiInterceptor, OB_BANNER, ObExternalLinkModule, ObMandatoryModule, ObStickyModule } from '@oblique/oblique';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import localeDECH from '@angular/common/locales/de-CH';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

registerLocaleData(localeDECH);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ObStickyModule,
    ObMasterLayoutModule, // add other Oblique modules as needed
    BrowserAnimationsModule, HttpClientModule, TranslateModule.forRoot(multiTranslateLoader()), MatButtonModule, MatCardModule, ObExternalLinkModule, ObMandatoryModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'de-CH'},
    {provide: HTTP_INTERCEPTORS, useClass: ObHttpApiInterceptor, multi: true},
    {provide: OB_BANNER, useValue: environment.banner}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
	constructor(config: ObMasterLayoutConfig) {
		config.locale.locales = ['de-CH'];
	}
}
