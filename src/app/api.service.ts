import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'http://127.0.0.1:8000/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient, private cookieService: CookieService) {
    if (cookieService.check('Token')) {
      this.headers.append('Authorization', 'Token ' + this.cookieService.get('Token'));
    }
  }

  // Login
  loginUser(data): Observable<any> {
    const API_URL = this.apiUrl + 'login/';
    return this.http.post(API_URL, data, {headers: this.headers}).pipe(
      catchError(this.error)
    );
  }

  // Users
  usersShow() {
    return this.http.get(this.apiUrl + 'users/', {headers: this.headers}).pipe(
      catchError(this.error)
    );
  }

  // Handle Errors
  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `${error.error.error}`;
    }
    return throwError(errorMessage);
  }
}
