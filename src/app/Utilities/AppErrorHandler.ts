import { ErrorHandler } from '@angular/core';

export class AppErrorHandler extends ErrorHandler{
  
    handleError(error) {
      // do something with the exception
      alert("Unexpected Error Occured");
      console.log(error);
    }
   
}