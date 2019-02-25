import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class GridLayoutService {
    private readonly apiUrl = 'http://demo4126999.mockable.io';
    constructor(private http: HttpClient ) {}

    public allImages() {
        return this.http.get(this.apiUrl + '/images');
    }
}
