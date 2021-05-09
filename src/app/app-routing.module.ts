import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalDetailComponent } from './components/personal-detail/personal-detail.component';
import { PersonalEditComponent } from './components/personal-edit/personal-edit.component';
import { EducationDetailComponent } from './components/education-detail/education-detail.component';
import { EducationAddComponent } from './components/education-add/education-add.component';
import { SkillsDetailComponent } from './components/skills-detail/skills-detail.component';
import { SkillsAddComponent } from './components/skills-add/skills-add.component';
import { AppComponent } from './app.component';
const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo:'person-detail'},
  { path:'person-detail',component:PersonalDetailComponent},
  { path:'person-edit',component:PersonalEditComponent},
  { path:'educate-detail',component:EducationDetailComponent},
  { path:'educate-add',component:EducationAddComponent},
  { path:'skills-detail',component:SkillsDetailComponent},
  { path:'skills-add',component:SkillsAddComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
