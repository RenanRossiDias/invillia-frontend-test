import { Injectable, NgModule } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/internal/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({ providedIn: 'root' })
export class ApiService {
 
  private _endpoints = {
    swapi: 'https://swapi.co/api/'
  }
  
  get endpoints(){
    return this._endpoints
  }
}

@Injectable()
class ErrorInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const dupReq = req.clone({
    })
    return next.handle(dupReq).pipe(
      catchError(err => {
        this.toastr.error(err.error.message)
        return of(null)
      })
    )
  }
}

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ]
})
export class Interceptor {}
