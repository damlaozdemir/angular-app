import { Component, OnInit, ViewChild } from '@angular/core';
import { Driver } from 'src/app/model/driver';
import { DriverService } from 'src/app/service/driver.service';
import { DriverDetailModalComponent } from '../driver-detail-modal/driver-detail-modal.component';
import { DriverStorage } from 'src/app/storage/driver.storage';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.scss']
})
export class DriversListComponent implements OnInit {
  drivers: any;
  selectedDriver: any;
  @ViewChild(DriverDetailModalComponent) 'driverDetailModalComponent': DriverDetailModalComponent;
  constructor(
    private driverService: DriverService,
    private driverStorage: DriverStorage,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getDriversList();
    this.trackDriversList();
  }

  getDriversList(): void {
    this.driverService.getDrivers().subscribe(
      data => {
        this.drivers = data;
        if (this.modalService.hasOpenModals()) {
          this.driverStorage.setSelectedDriver(this.drivers.filter((driver: { driverName: string; }) => driver.driverName === this.selectedDriver.driverName)[0])
        }
      },
      error => { console.log(error.message); }
    )
  }

  trackDriversList(): void {
    const _this = this;
    setInterval(() => {
      _this.getDriversList();
    }, 5000);
  }

  setSelectedDriver(driver: Driver): void {
    this.selectedDriver = driver;
    this.driverStorage.setSelectedDriver(driver)
  }
}
