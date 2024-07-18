import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FortniteService {
  private apiUrl = 'https://fortnite-api.com/v2/cosmetics/br';

  constructor(private http: HttpClient) { }

  getAllCosmetics(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
