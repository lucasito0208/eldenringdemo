import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const bossesUrl: string = 'https://eldenring.fanapis.com/api/bosses?limit=100';
const classesUrl: string = 'https://eldenring.fanapis.com/api/classes?limit=100';
const creaturesUrl: string = 'https://eldenring.fanapis.com/api/creatures?limit=100';

@Injectable({
  providedIn: 'root',
})
export class EldenRingService {
  constructor(private http: HttpClient) {}

  getBosses(): Observable<any> {
    return this.http.get<any>(bossesUrl);
  }

  getClasses(): Observable<any> {
    return this.http.get<any>(classesUrl);
  }

  getCreatures(): Observable<any> {
    return this.http.get<any>(creaturesUrl);
  }

  getBossDetails(bossId: string): Observable<any> {
    return this.http.get<any>(`${bossesUrl}/${bossId}`);
  }


  

}
