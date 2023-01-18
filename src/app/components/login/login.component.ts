import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../../models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  loading: boolean = false;

  constructor(
    private authService: AuthService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {
  }

  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }
  //
  //   return this.email.hasError('email') ? 'Not a valid email' : '';

  // }
  hide: boolean=true;
  login() {
    if (this.username.invalid || this.password.invalid) {
      this._snackBar.open('Form Values are missing', 'OK');
      return;
    } else {
      this.loading = true;
      let user = new User(this.username.value, this.password.value);
      this.authService.login(user).subscribe({
        next: (response) => {
          this.loading = false;
          this.authService.setToken(response['access_token'])
          this._snackBar.open('Login Successful', 'close',{duration:2000});
          this.router.navigate(['/']);
        },
        error: (response) => {
          this.loading = false;
          if (response.status === 401) {
            this._snackBar.open('Invalid Credentials', 'close');
          } else {
            this._snackBar.open('Server Error please try again', 'close');
            console.log(response);
          }
        },
      });
    }

  }
}
