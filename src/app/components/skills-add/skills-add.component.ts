import { Component, OnInit , NgZone} from '@angular/core';
import {Router} from '@angular/router'
import {SkillsService} from './../../service/skills.service'
import {FormGroup, FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-skills-add',
  templateUrl: './skills-add.component.html',
  styleUrls: ['./skills-add.component.css']
})
export class SkillsAddComponent implements OnInit {
  skillForm : FormGroup

  constructor(public formBuilder : FormBuilder,
    private router : Router,
    private ngZone : NgZone,
    private skillsService : SkillsService) { 
      this.skillForm = this.formBuilder.group({
        personal_id : ['1'],
        skills_content_skill : ['']
      })
    }

  ngOnInit(): void {
  }
  onSubmit():any {
    this.skillsService.AddSkills(this.skillForm.value).subscribe(()=>{
      console.log('add success');
      this.ngZone.run(()=>this.router.navigateByUrl('/skills-detail'))
    },(err)=>{
      console.log(err)
    })
  }

}
