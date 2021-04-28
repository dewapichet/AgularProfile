import { Component } from '@angular/core';

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

}
