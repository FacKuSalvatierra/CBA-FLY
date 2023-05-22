import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VuelosService {
  url = 'http://localhost:3000/characters';

  constructor(private http: HttpClient) {}

  public get(url: string) {
    return this.http.get(url);
  }

  public lista(): Observable<any[]> {
    return this.http.get<any[]>(this.url + 'lista');
  }

  public detail(id: number): Observable<any> {
    return this.http.get<any>(this.url + `detail/${id}`);
  }

  public save(any1: any): Observable<any> {
    return this.http.post<any>(this.url + 'create', any1);
  }

  public update(id: number, any2: any): Observable<any> {
    return this.http.put<any>(this.url + `update/${id}`, any2);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(this.url + `delete/${id}`);
  }
}
