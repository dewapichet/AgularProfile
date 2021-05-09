import { Injectable } from '@angular/core';
import { catchError,map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http'

export class Personal_dew{
  personal_id !: Number;
  personal_image !: string;
  personal_first_name !: string;
  personal_last_name !: string;
  personal_nickname !: string;
  personal_birthday !: Date;
  personal_age !: Number;
  personal_height !: Number;
  personal_weight !: Number;
  personal_blood_type !: string;
  personal_address !: string;
  personal_email !: string;
  personal_tel !: string;
  personal_hobby !: string;

}
@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  REST_API : string = 'https://localhost:44334/api/ProfileController_Dew';

  httpHeaders = new HttpHeaders().set('Content-Type','application/json');
  constructor(private HttpClient: HttpClient) {}

  GetPersonal() : Observable<any>{
    let API_URL = `${this.REST_API}/get-profile-dew?personal_id=1`;
    return this.HttpClient.get(API_URL)
  }

  UpdatePersonal(data:Personal_dew): Observable<any> {
    let API_URL = `${this.REST_API}/update?personal_id=1`;
    return this.HttpClient.put(API_URL, data, {headers:this.httpHeaders})
    .pipe(
      catchError(this.handleError)
    )
  }

  UpdateImage(data:Personal_dew) : Observable<any> {
    let API_URL = `${this.REST_API}/update-image?personal_id=1`;
    return this.HttpClient.put(API_URL, data,  {headers:this.httpHeaders})
    .pipe(
      catchError(this.handleError)
    )
  }


  handleError(error: HttpErrorResponse){
    let errorMessage = '';
    if (error.error instanceof ErrorEvent){
      //Handle client error
      errorMessage = error.error.message
    }else {
      //Handle server error
      errorMessage = `Error Code ${error.status}\nMessage: ${error.message}`
    }
    console.log(errorMessage);
    return throwError(errorMessage)
  }
}
