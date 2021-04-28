import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalDetailComponent } from './components/personal-detail/personal-detail.component';
import { PersonalEditComponent } from './components/personal-edit/personal-edit.component';
import { EducationDetailComponent } from './components/education-detail/education-detail.component';
import { EducationAddComponent } from './components/education-add/education-add.component';
import { SkillsDetailComponent } from './components/skills-detail/skills-detail.component';
import { SkillsAddComponent } from './components/skills-add/skills-add.component';


import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule}from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailComponent,
    PersonalEditComponent,
    EducationDetailComponent,
    EducationAddComponent,
    SkillsDetailComponent,
    SkillsAddComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
