import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { Observable, Subject } from 'rxjs';

@Injectable({providedIn: 'root' })
export class UserService {

    private url = 'http://localhost:9080/rest/resources/users';
    _usersUpdated$ = new Subject<User[]>();
    activeGebruikerUpdated$ = new Subject<User>();
    registerUserUpdated$ = new Subject<User>();

    activeGebruiker : User;
    registerUser: User;

    error$ = new Subject<string>();
    errorRegister$ = new Subject<string>();

    users: User[];

    constructor(private http: HttpClient) {
        this.activeGebruikerUpdated$.subscribe(g => this.activeGebruiker = g)
        // this.registerUserUpdated$.subscribe(g => this.registerUser = g)
    }

    get usersUpdated$(): Subject<User[]> {
        return this._usersUpdated$;
    }

    getAll() : Observable<User[]> {
        this.http.get<User[]>(this.url) // get data from a server
        .subscribe(users => this.usersUpdated$.next(users)); // when received do this
        return this.usersUpdated$;
    }

    add(p: User): void {
        this.http.post<User>(this.url, p)
        .subscribe(resp => this.registerUserUpdated$.next(resp), error => {this.errorRegister$.next(error.message)});
    }

    login(p: User): void {
        this.http.post<User>(`${this.url}/login`, p)
            .subscribe(
                resp => this.activeGebruikerUpdated$.next(resp), 
                error => this.error$.next(error.message)
            );
    }

}