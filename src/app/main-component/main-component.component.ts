import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss']
})
export class MainComponentComponent {
  title = 'ticketmaster';
  // constructor( private router: Router){}

  // navigateToSignUp(){
  //   this.router.navigate([`master`]);
  // }
}
