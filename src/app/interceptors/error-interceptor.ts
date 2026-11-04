import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'ngx-yet-another-toast-library';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const toastService = inject(ToastService)
  const _router = inject(Router)

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      _router.navigate(['/error'])
      toastService.error(error.message)
      return throwError(() => error);
    })
  )
};
