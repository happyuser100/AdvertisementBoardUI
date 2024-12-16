import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  errorMessages: any;

  constructor(private router: Router) {
  }

  handleError = (error: any) => {
    let errorMessage = '';
    let errorMessageSnack = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      if (error.error !== "undefined") {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}\n Error:${error.error}`;
        errorMessageSnack = `Error:${error.error}`;
        console.log("errorMessage", errorMessage);
      }
    }
    //console.log(errorMessage);
    return throwError(error);
  }

  displayMessage(message: string) {
    // this.snackBar.open(message, "", {
    //   duration: 5000,
    // });
  }

}
