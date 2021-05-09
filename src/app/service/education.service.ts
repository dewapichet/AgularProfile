import { Injectable } from '@angular/core';
import { catchError,map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http'

export class Education_dew{
  education_id !: number;
  personal_id !: number;
  education_school !: string;
  education_faculty !: string;
  education_major !: string;
  education_class !: string;
  education_grade !: number;
}
@Injectable({
  providedIn: 'root'
})
export class EducationService {
  REST_API : string = 'https://localhost:44334/api/ProfileController_Dew'
  
  httpHeaders = new HttpHeaders().set('Content-Type','application/json');
  constructor(private HttpClient: HttpClient) { }

  GetEducation() : Observable<any>{
    let API_URL = `${this.REST_API}/get-education-dew?personal_id=1`;
    return this.HttpClient.get(API_URL)
  }

  AddEducation(data: Education_dew) : Observable<any>{
    let API_URL = `${this.REST_API}/save-educate-dew`
    return this.HttpClient.post(API_URL, data)
  }

  DeleteEducation(id:any) :Observable<any>{
    let API_URL = `${this.REST_API}/delete-educate-dew?education_id=${id}`
    return this.HttpClient.delete(API_URL,{headers:this.httpHeaders})
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
