import { Component, Input } from '@angular/core';
import { EventPopupComponent } from '../event-popup/event-popup.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timeline-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline-card.component.html',
  styleUrl: './timeline-card.component.scss'
})
export class TimelineCardComponent {

  @Input() timeLineData: any = {};

  constructor(private modalService: NgbModal) {

  }

  imageLoaded(obj: any) {
    obj.loaded = true;
  }

  openModal(obj: any) {
    const modalRef = this.modalService.open(EventPopupComponent, { centered: true, scrollable: true, size: 'lg' });
    modalRef.componentInstance.data = obj;
  }

}
