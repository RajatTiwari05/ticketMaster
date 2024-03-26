import { Component } from '@angular/core';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent {
  emailValue = "";
  constructor(){

  }
  validEmail(event:any){
  console.log(this.emailValue);
  }
  

}
