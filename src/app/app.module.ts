import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { NavComponent } from './nav/nav.component';

import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { AboutComponent } from './about/about.component';
import { PortfolioCardComponent } from './portfolio-card/portfolio-card.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    PortfolioCardComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faLinkedinIn, faGithub);
  }
}
