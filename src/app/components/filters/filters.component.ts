import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedService } from '../../services/shared.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [NgSelectModule, FormsModule, CommonModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss'
})
export class FiltersComponent {

  selectedKeywords: any = [];
  customKeywords: string = '';
  keywords = [
    {
      "name": "1760",
      "value": "1760"
    },
    {
      "name": "1840",
      "value": "1840"
    },
    {
      "name": "1914",
      "value": "1914"
    },
    {
      "name": "1918",
      "value": "1918"
    },
    {
      "name": "1969",
      "value": "1969"
    },
    {
      "name": "1666",
      "value": "1666"
    },
    {
      "name": "1947",
      "value": "1947"
    },
    {
      "name": "1994",
      "value": "1994"
    },
    {
      "name": "Industrial",
      "value": "industrial"
    },
    {
      "name": "Revolution",
      "value": "revolution"
    },
    {
      "name": "World",
      "value": "world"
    },
    {
      "name": "War",
      "value": "war"
    },
    {
      "name": "Moon",
      "value": "moon"
    },
    {
      "name": "Landing",
      "value": "landing"
    },
    {
      "name": "Great",
      "value": "great"
    },
    {
      "name": "Fire",
      "value": "fire"
    },
    {
      "name": "London",
      "value": "london"
    },
    {
      "name": "Indian",
      "value": "indian"
    },
    {
      "name": "Independence",
      "value": "independence"
    },
    {
      "name": "End",
      "value": "end"
    },
    {
      "name": "Apartheid",
      "value": "apartheid"
    },
    {
      "name": "South",
      "value": "south"
    },
    {
      "name": "Africa",
      "value": "africa"
    }
  ];

  constructor(private sharedService: SharedService) {

  }

  onFilter() {
    this.sharedService.filterTimeLineDate([...this.customKeywords.split(' '), ...this.selectedKeywords].filter(str => str).map(str => str.toLowerCase()));
  }
}
