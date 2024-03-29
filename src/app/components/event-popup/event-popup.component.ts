import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SourceType } from '../../utils/utils';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-popup.component.html',
  styleUrl: './event-popup.component.scss'
})
export class EventPopupComponent implements OnInit {
  @Input() data: any = {};

  sourceType = SourceType;

  zoomLevel = 100;

  constructor(private activeModal: NgbActiveModal) {
  }

  ngOnInit() {
    console.log(this.data);
  }

  zoomIn() {
    this.zoomLevel += 10;
  }

  zoomOut() {
    if (this.zoomLevel > 50) {
      this.zoomLevel -= 10;
    }
  }

  close() {
    this.activeModal.dismiss(true);
  }
}
