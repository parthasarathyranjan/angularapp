import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { CreatefileComponent } from './createfile/createfile.component';
import { AboutComponent } from './about/about.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { first } from 'rxjs';
import { SettingsComponent } from './settings/settings.component';
import { HomeComponent } from './home/home.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  {path:'first',component:CreatefileComponent},
  {path:'second',component:AboutComponent},
  {path:'third',component:SettingsComponent},
  {path:'fourth',component:HomeComponent},
  {path:'fifth',component:FeedbackComponent}
];

@NgModule({
  declarations: [ 
    AppComponent, CreatefileComponent, AboutComponent, SettingsComponent, HomeComponent, FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    MatSidenavModule,MatButtonModule,
    MatIconModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
