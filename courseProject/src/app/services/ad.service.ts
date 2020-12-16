import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { Advertentie } from '../models/Advertentie';
import { User } from '../models/User';

@Injectable({providedIn: 'root' })
export class AdService {

    private url = 'http://localhost:9080/rest/resources/advertentie';
    _adsUpdated$ = new Subject<Advertentie[]>();
    _adsByIdUpdated$ = new Subject<Advertentie[]>();

    advertentieUpdated$ = new Subject<Advertentie>();
    error$ = new Subject<string>();
    deleteError$ = new Subject<string>();
    advertentieDeleted$ = new Subject<Advertentie>();
    UpdatedAd$ = new Subject<Advertentie[]>();
    errorUpdated$ = new Subject<string>();

    getById$ = new Subject<Advertentie>();

    constructor(private http: HttpClient) {
    }

    get adsUpdated$(): Subject<Advertentie[]> {
        return this._adsUpdated$;
    }

    get adsByIdUpdated$(): Subject<Advertentie[]> {
        return this._adsByIdUpdated$;
    }

    getAll() : Observable<Advertentie[]> {
        this.http.get<Advertentie[]>(this.url) // get data from a server
        .subscribe(resp => this.adsUpdated$.next(resp)); // when received do this
        return this.adsUpdated$;
    }

    add(p: Advertentie): void {
        this.http.post<Advertentie>(this.url, p)
        .subscribe(resp => this.advertentieUpdated$.next(resp), error => {this.error$.next(error.message)});
    }

    getAllByUserId(u: User): Observable<Advertentie[]> {
        this.http.get<Advertentie[]>(`${this.url}/userads/${u.id}`).subscribe(resp => this.adsByIdUpdated$.next(resp));
        return this.adsByIdUpdated$;
    }

    delete(id: number): void {
        this.http.delete<Advertentie>(`${this.url}/${id}`).subscribe(() => this.getAll(), err => this.deleteError$.next(err))
    }

    update(c: Advertentie): void {
        this.http.put<Advertentie[]>(`${this.url}/${c.id}`, c)
          .subscribe(resp => this.UpdatedAd$.next(resp), err => this.errorUpdated$.next(err));
      }

    getById(id: number): void {
        this.http.get<Advertentie>(`${this.url}/${id}`).subscribe(resp => this.getById$.next(resp))
    }
}