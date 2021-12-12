import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ApiService} from './api.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private api: ApiService, private fb: FormBuilder, private cookieService: CookieService) {
    if (cookieService.check('Token')) {
      this.isLogin = true;
    }
  }

  loginForm: FormGroup;
  error: string;
  isLogin = true;
  title = 'servicestatistics';

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    const data = {
      username: this.loginForm.get('username').value,
      password: this.loginForm.get('password').value
    };
    this.api.loginUser(data).subscribe(result => {
      if (result.token) {
        this.error = '';
        this.cookieService.set('Token', result.token);
        this.cookieService.set('Username', result.user.name);
        this.isLogin = true;
      }
    }, error => {
      this.error = error;
      console.log(error);
    });
  }

  onExit() {
    this.cookieService.delete('Token');
    this.isLogin = false;
  }

  refresh() {

  }
}
