import { Component, OnInit , NgZone} from '@angular/core';
import {Router} from '@angular/router'
import {PersonalService} from './service/personal.service'
import {FormGroup, FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imgTitle : string = 'assets/profile.jpg';
  iconFb : string = 'assets/icon/facebook.jpg';
  iconTw : string = 'assets/icon/twitter.png';
  iconIg : string = 'assets/icon/ig.png';
  iconPersonal : string = 'assets/icon/personal.png';
  iconEducate : string = 'assets/icon/education.png';
  iconSkill : string = 'assets/icon/skill.png';
  personal : any = []
  image : any = [] 
  updateForm:FormGroup;
  constructor(
    public formBuilder : FormBuilder,
    private personalService : PersonalService,
    private router : Router,
    private ngZone : NgZone,
  ){
    this.personalService.GetPersonal().subscribe(res =>{
      console.log(res)
      this.personal = res
    })

    this.updateForm = this.formBuilder.group({
      personal_image: [''],
    })
    
  }

  upLoadImage(event:any){
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        console.log(reader.result)
        this.image = reader.result
        this.updateForm = this.formBuilder.group({
          personal_image: [this.image],
        })
        this.personalService.UpdateImage(this.updateForm.value).subscribe(()=>{
          console.log('Update Success')
          this.ngZone.run(()=> location.reload())
        },(err)=>{
          console.log(err)
        })
    };
}
}
