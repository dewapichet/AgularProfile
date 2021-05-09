import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EducationService } from './../../service/education.service'
@Component({
  selector: 'app-education-detail',
  templateUrl: './education-detail.component.html',
  styleUrls: ['./education-detail.component.css']
})
export class EducationDetailComponent implements OnInit {
  educations : any = [];

  constructor(
    private router : Router,
    private ngZone : NgZone,
    private activatedRoute: ActivatedRoute,
    private educationService : EducationService
  ) { 
    this.educationService.GetEducation().subscribe(res =>{
      console.log(res)
      this.educations = res
  })
}
  
  ngOnInit(): void {
  }
  delete(id:any, i:any){
    console.log(id)
    if(window.confirm('ต้องการที่จะลบหรือไม่')){
      this.educationService.DeleteEducation(id).subscribe(res=>{
        this.educations.splice(i,1);
      })
  }
}

}
