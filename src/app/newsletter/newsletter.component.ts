import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'lib-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

  emailFrm: FormGroup;

  constructor() {
    // this.emailFrm = new FormGroup({
    //   // email: new FormControl('muhammad.adnanf@gmail.com'); //maybe some intialization value
    // })

    this.emailFrm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\.[a-z]{2,3}')
        // Validators.email
      ]),

      name: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50),
        Validators.pattern('[A-Za-z ]')
      ])
    })
   }

  ngOnInit(): void {
  }

  onFormSubmit(){
    console.log('Form Submited');
    console.log(this.emailFrm.controls['email'].errors);
  }

  get email(){
    return this.emailFrm.get('email');
  }

  get name(){
    return this.emailFrm.get('name');
  }

}
