import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})


export class ProductsService {
  url = 'https://www.kuantokusta.pt/_next/data/YrxBIob-TrlTVhPkrbxlw/pt-PT/c/50/discos-rigidos-hdd.json';
  constructor(private http: HttpClient) {}
  getProduct(): Observable<any> {
    return this.http.get(this.url, { headers: { Accept: 'application/json' } });
  }
}
