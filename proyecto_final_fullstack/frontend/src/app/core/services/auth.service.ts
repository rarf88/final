import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}
  login(data:any){
    return this.http.post<any>(`${environment.apiBaseUrl}/auth/login`, data).pipe(
      tap((res:any)=>{
        localStorage.setItem('token', res?.data?.token || '');
        localStorage.setItem('user', JSON.stringify(res?.data?.user || {}));
      })
    );
  }
}
