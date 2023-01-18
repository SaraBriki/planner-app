import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from '../../models/User';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  confirmPassword = new FormControl('', [Validators.required]);
  passwordsMatch: boolean = true;
  hide: boolean = true;
  loading: boolean = false;

  constructor(private authService: AuthService,
              private _snackBar: MatSnackBar,
              private router: Router,
  ) {
  }

  signup() {

    if (this.username.invalid || this.password.invalid || this.confirmPassword.invalid) {
      this._snackBar.open('Form Values are missing or invalid', 'OK',{duration:2000});
      return;
    }
    else if(this.password.value!==this.confirmPassword.value){
      this._snackBar.open('Passwords do not match', 'OK',{duration:2000});
      return;
    }
  else {
      this.loading = true;
      let user = new User(this.username.value, this.password.value);
      this.authService.signup(user).subscribe({
        next: (response) => {
          this.loading = false;
          this.authService.setToken(response['access_token']);
          this._snackBar.open('Signup Successful', 'close', { duration: 2000 });
          this.router.navigate(['/']);
        },
        error: (response) => {
          this.loading = false;
          if (response.status === 400) {
            this._snackBar.open('Username Already Exists', 'close', { duration: 2000 });
          } else {
            this._snackBar.open('Server Error please try again', 'close');
            console.log(response);
          }
        },
      });
    }
  }
}
