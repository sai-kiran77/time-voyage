import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineCardComponent } from '../timeline-card/timeline-card.component';
import { FiltersComponent } from '../filters/filters.component';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule, TimelineCardComponent, FiltersComponent],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {

  constructor(private sharedService: SharedService) {

  }

  timeLineData: any = [];

  ngOnInit() {
    this.sharedService.timeLineDataObservable.subscribe((data: any) => {
      // Sort the timeLineData to display in chronological order
      this.timeLineData = data.sort((a: any, b: any) => {
        let yearA = parseInt(a.date.split('-')[0]);
        let yearB = parseInt(b.date.split('-')[0]);

        if (isNaN(yearA)) yearA = parseInt(a.date);
        if (isNaN(yearB)) yearB = parseInt(b.date);

        return yearB - yearA;
      })
    })
  }
}
