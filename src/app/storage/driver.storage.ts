import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Driver } from '../model/driver';

@Injectable({
    providedIn: 'root'
})
export class DriverStorage {
    selectedDriver = new BehaviorSubject({});
    constructor() { }

    setSelectedDriver(driver: Driver): void {
        this.selectedDriver.next(driver);
    }

    getSelectedDriver(): Observable<any> {
        return this.selectedDriver.asObservable();
    }
}
