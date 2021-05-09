import { Component, OnInit, NgZone } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import {PersonalService} from  './../../service/personal.service'
import {FormGroup, FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-personal-edit',
  templateUrl: './personal-edit.component.html',
  styleUrls: ['./personal-edit.component.css']
})
export class PersonalEditComponent implements OnInit {
  updateForm:FormGroup;
  constructor(
    public formBuilder : FormBuilder,
    private router : Router,
    private ngZone : NgZone,
    private activatedRoute: ActivatedRoute,
    private personalService : PersonalService
  ) { 
    this.personalService.GetPersonal().subscribe(res =>{
      this.updateForm.setValue({
        personal_first_name: res['personal_first_name'],
        personal_last_name: res['personal_last_name'],
        personal_nickname: res['personal_nickname'],
        personal_birthday: res['personal_birthday'],
        personal_age: res['personal_age'],
        personal_height: res['personal_height'],
        personal_weight: res['personal_weight'],
        personal_blood_type: res['personal_blood_type'],
        personal_address: res['personal_address'],
        personal_email: res['personal_email'],
        personal_tel: res['personal_tel'],
        personal_hobby: res['personal_hobby']
      })
    })
    this.updateForm = this.formBuilder.group({
      personal_first_name: [''],
      personal_last_name: [''],
      personal_nickname: [''],
      personal_birthday: [''],
      personal_age: [''],
      personal_height: [''],
      personal_weight: [''],
      personal_blood_type: [''],
      personal_address: [''],
      personal_email: [''],
      personal_tel: [''],
      personal_hobby: ['']
    })
  }

  ngOnInit(): void {
    
  }
  onUpdate():any{
    this.personalService.UpdatePersonal(this.updateForm.value).subscribe(()=>{
      console.log('Update Success')
      this.ngZone.run(()=> this.router.navigateByUrl('/'))
    },(err)=>{
      console.log(err)
    })
  }

}
