import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment }  from "../../environments/environment";

@Injectable()
export class DriverService {

  constructor(private http: HttpClient) { }

  getDrivers(): Observable<any> {
    return this.http.get(environment.baseUrl);
  }
}
