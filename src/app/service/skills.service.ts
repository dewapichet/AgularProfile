import { Injectable } from '@angular/core';
import { catchError,map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http'


export class Skills_dew{
  skills_id !: number;
  personal_id !: number;
  skills_content_skill !: string;
}

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  REST_API : string = 'https://localhost:44334/api/ProfileController_Dew'
  httpHeaders = new HttpHeaders().set('Content-Type','application/json');
  constructor(private HttpClient: HttpClient) { }
  GetSkills() : Observable<any>{
    let API_URL = `${this.REST_API}/get-skills-dew?personal_id=1`;
    return this.HttpClient.get(API_URL)
  }

  AddSkills(data: Skills_dew) : Observable<any>{
    let API_URL = `${this.REST_API}/save-skills-dew`
    return this.HttpClient.post(API_URL, data)
  }

  DeleteSkills(id:any) :Observable<any>{
    let API_URL = `${this.REST_API}/delete-skills-dew?skills_id=${id}`
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
