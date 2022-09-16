import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree  } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationsService } from 'src/app/services/authorizations.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _authService: AuthorizationsService,
              private _router:Router
    ){

  }
  canActivate(): boolean{
    if(this._authService.loginAuth()){
      return true;
    }
    else{
      this._router.navigate(['/login'])
      return false;
    }
      
  }
}
