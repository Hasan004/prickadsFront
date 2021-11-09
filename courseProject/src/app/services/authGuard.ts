import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './user.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard {

    constructor(
        private router: Router,
        private service: UserService,
        private toastr: ToastrService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.service.activeGebruiker;
        if (currentUser) {
            return true;
        }
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        this.toastr.info("Log in om deze actie uit te voeren!", "U bent niet ingelogd")
        return false;
    }
}


