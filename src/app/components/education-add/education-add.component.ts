import { Component, OnInit , NgZone} from '@angular/core';
import {Router} from '@angular/router'
import {EducationService} from './../../service/education.service'
import {FormGroup, FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-education-add',
  templateUrl: './education-add.component.html',
  styleUrls: ['./education-add.component.css']
})
export class EducationAddComponent implements OnInit {

  educationForm : FormGroup;

  constructor(
    public formBuilder : FormBuilder,
    private router : Router,
    private ngZone : NgZone,
    private educationService : EducationService
  ) {
    this.educationForm = this.formBuilder.group({
      personal_id : ['1'],
      education_school : [''],
      education_faculty : [''],
      education_major : [''],
      education_class : [''],
      education_grade : ['']
    })
   }
  

  ngOnInit(): void {
  }

  onSubmit():any {
    this.educationService.AddEducation(this.educationForm.value).subscribe(()=>{
      console.log('add success');
      this.ngZone.run(()=>this.router.navigateByUrl('/educate-detail'))
    },(err)=>{
      console.log(err)
    })
  }

}
