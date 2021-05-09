import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SkillsService } from './../../service/skills.service'
@Component({
  selector: 'app-skills-detail',
  templateUrl: './skills-detail.component.html',
  styleUrls: ['./skills-detail.component.css']
})
export class SkillsDetailComponent implements OnInit {
  skills : any =[] ;
  constructor(private router : Router,
    private ngZone : NgZone,
    private activatedRoute: ActivatedRoute,
    private skillsService : SkillsService) { 
      this.skillsService.GetSkills().subscribe(res =>{
        console.log(res)
        this.skills = res
    })
    }

  ngOnInit(): void {
  }
  delete(id:any, i:any){
    console.log(id)
    if(window.confirm('ต้องการที่จะลบหรือไม่')){
      this.skillsService.DeleteSkills(id).subscribe(res=>{
        this.skills.splice(i,1);
      })
  }
}

}
