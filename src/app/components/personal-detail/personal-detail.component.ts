import { HttpClient } from '@angular/common/http';
import {Router, ActivatedRoute} from '@angular/router'
import { Component, OnInit , NgZone} from '@angular/core';
import { PersonalService } from './../../service/personal.service'
@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.css']
})
export class PersonalDetailComponent implements OnInit {

  getId : any ;
  personal : any = [];

  constructor(
    private router : Router,
    private ngZone : NgZone,
    private activatedRoute: ActivatedRoute,
    private personalService : PersonalService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');

    this.personalService.GetPersonal().subscribe(res =>{
      console.log(res)
      this.personal = res
    })
   }
  
  ngOnInit(): void {
    
  }

}
