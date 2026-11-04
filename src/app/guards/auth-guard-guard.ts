import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(
    private _router: Router,
  ) {}

  canActivate(
    _route: ActivatedRouteSnapshot, 
    _state: RouterStateSnapshot,
  ): MaybeAsync<GuardResult> {

    if (sessionStorage.getItem('token')) {
      return true;

    } else {
      return this._router.createUrlTree(
        ['/login'],
        { queryParams: { returnUrl: _state.url } }
      )
    }
  }
}
