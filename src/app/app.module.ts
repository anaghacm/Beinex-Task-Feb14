import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './main-page/home/home.component';
import { BannerComponent } from './main-page/banner/banner.component';
import { HoverDirective } from './directives/hover.directive';
import { LatestComponent } from './main-page/latest/latest.component';
import { SignUpComponent } from './main-page/sign-up/sign-up.component';
import { SetDividerDirective } from './directives/set-divider.directive';
import { SmlinksComponent } from './main-page/smlinks/smlinks.component';
import { VegetarianComponent } from './main-page/vegetarian/vegetarian.component';
import { HealthyComponent } from './main-page/healthy/healthy.component';
import { QuickandeasyComponent } from './main-page/quickandeasy/quickandeasy.component';
import { NicetomeetComponent } from './main-page/nicetomeet/nicetomeet.component';
import { SearchComponent } from './main-page/search/search.component';
import { SectionHeadingDirective } from './directives/section-heading.directive';
import { CardDirective } from './directives/card.directive';
import { BannerDirective } from './directives/banner.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    BannerComponent,
    HoverDirective,
    LatestComponent,
    SignUpComponent,
    SetDividerDirective,
    SmlinksComponent,
    VegetarianComponent,
    HealthyComponent,
    QuickandeasyComponent,
    NicetomeetComponent,
    SearchComponent,
    SectionHeadingDirective,
    CardDirective,
    BannerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
