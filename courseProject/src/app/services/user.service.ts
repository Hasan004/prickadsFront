import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { Observable, Subject } from 'rxjs';

@Injectable({providedIn: 'root' })
export class UserService {

    private url = 'http://localhost:9080/rest/resources/users';
    _usersUpdated$ = new Subject<User[]>();

    users: User[];

    constructor(private http: HttpClient) { }

    get usersUpdated$(): Subject<User[]> {
        return this._usersUpdated$;
      }

    getAll() : Observable<User[]> {
        this.http.get<User[]>(this.url) // get data from a server
        .subscribe(users => this.usersUpdated$.next(users)); // when received do this
        return this.usersUpdated$;
    }

    add(p: User): void {
        this.http.post<User[]>(this.url, p).subscribe(() => this.getAll());
    }

    login(p: User): void {
        this.http.post<User[]>(`${this.url}/login`, p).subscribe(() => this.getAll());
    }

}