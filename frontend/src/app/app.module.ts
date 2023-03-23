import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { StatsBannerComponent } from './components/stats-banner/stats-banner.component';
import { OutStudentComponent } from './components/out-student/out-student.component';
import { MissionComponent } from './components/mission/mission.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    HeroSectionComponent,
    StatsBannerComponent,
    OutStudentComponent,
    MissionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
