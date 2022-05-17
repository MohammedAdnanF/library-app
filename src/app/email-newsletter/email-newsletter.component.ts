import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'lib-email-newsletter',
  templateUrl: './email-newsletter.component.html',
  styleUrls: ['./email-newsletter.component.css']
})
export class EmailNewsletterComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    console.log();
    
  }

  onFormSubmit(emailFrm: NgForm){
    console.log('Form Submited');
    console.log(emailFrm.controls['email'].errors);
  }

}
