import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Driver } from 'src/app/model/driver';
import { DriverStorage } from 'src/app/storage/driver.storage';

@Component({
  selector: 'app-driver-detail-modal',
  templateUrl: './driver-detail-modal.component.html',
  styleUrls: ['./driver-detail-modal.component.css']
})
export class DriverDetailModalComponent {
  @ViewChild('content') content: TemplateRef<any> | undefined;
  driver: Driver | undefined;
  driverSubscription: Subscription | undefined;
  constructor(private modalService: NgbModal, private driverStorage: DriverStorage) { }

  ngOnDestroy() {
    if(this.driverSubscription) {
      this.driverSubscription.unsubscribe();
    }
  }

  open() {
    this.modalService.open(this.content, {ariaLabelledBy: 'modal-basic-title'});
    this.driverSubscription = this.driverStorage.getSelectedDriver().subscribe(
      (data: Driver | undefined) => this.driver = data
    )
  }
}
