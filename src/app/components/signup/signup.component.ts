import {ChangeDetectorRef, Component} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private cd: ChangeDetectorRef) {
  }
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  confirmPassword = new FormControl('', [Validators.required]);

  passwordsMatch:boolean=true
  checkPasswords(el1:string,el2:string){
    this.passwordsMatch=el1!==el2
  }


}
