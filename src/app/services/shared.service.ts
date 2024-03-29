import { Injectable } from '@angular/core';
import { SourceType } from '../utils/utils';
import { DomSanitizer } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private sanitizer: DomSanitizer) {

  }

  timeLineData = [
    {
      "id": 1,
      "title": "Industrial Revolution",
      "date": "1760-1840",
      "description": "The Industrial Revolution marked a period of significant technological, economic, and social change, characterized by the transition to new manufacturing processes, the growth of factories, and the rise of urbanization.",
      desktop_image: 'assets/industrial-revolution-desktop.jpg',
      mobile_image: 'assets/industrial-revolution-mobile.jpg',
      references: [
        {
          sourceType: SourceType.Image,
          value: this.sanitizer.bypassSecurityTrustUrl('https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Powerloom_weaving_in_1835.jpg/1200px-Powerloom_weaving_in_1835.jpg')
        },
        {
          sourceType: SourceType.YoutubeVideo,
          value: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/xLhNP0qp38Q')
        },
        {
          sourceType: SourceType.Link,
          value: 'https://en.wikipedia.org/wiki/Industrial_Revolution'
        },
      ]
    },
    {
      "id": 2,
      "title": "World War 1",
      "date": "1914-1918",
      "description": "World War 1 was a global conflict that involved many of the world's great powers, resulting in millions of deaths and significant political changes, including the dissolution of empires and the redrawing of national boundaries.",
      desktop_image: 'assets/world-war-1-desktop.jpg',
      mobile_image: 'assets/world-war-1-mobile.jpg',
      references: [
        {
          sourceType: SourceType.Image,
          value: this.sanitizer.bypassSecurityTrustUrl("https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Bundesarchiv_DVM_10_Bild-23-61-23%2C_Linienschiff_%22SMS_Rheinland%22.jpg/330px-Bundesarchiv_DVM_10_Bild-23-61-23%2C_Linienschiff_%22SMS_Rheinland%22.jpg")
        },
        {
          sourceType: SourceType.YoutubeVideo,
          value: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/dHSQAEam2yc')
        },
        {
          sourceType: SourceType.Link,
          value: 'https://en.wikipedia.org/wiki/World_War_I'
        },
      ]
    },
    {
      "id": 3,
      "title": "Moon Landing",
      "date": "1969",
      "description": "The Apollo 11 mission successfully landed the first humans on the Moon, with Neil Armstrong and Buzz Aldrin becoming the first two people to set foot on the lunar surface, representing a major milestone in space exploration.",
      desktop_image: 'assets/moon-landing-desktop.jpg',
      mobile_image: 'assets/moon-landing-mobile.jpg',
      references: [
        {
          sourceType: SourceType.Image,
          value: this.sanitizer.bypassSecurityTrustUrl("https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Aldrin_Apollo_11_original.jpg/390px-Aldrin_Apollo_11_original.jpg")
        },
        {
          sourceType: SourceType.YoutubeVideo,
          value: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/cwZb2mqId0A')
        },
        {
          sourceType: SourceType.Link,
          value: 'https://en.wikipedia.org/wiki/Apollo_11'
        },
      ]
    },
    {
      "id": 4,
      "title": "The Great Fire of London",
      "date": "1666",
      "description": "The Great Fire of London destroyed much of the city, including thousands of homes and buildings, leading to significant urban renewal and changes in fire safety regulations.",
      desktop_image: 'assets/london-fire-desktop.jpg',
      mobile_image: 'assets/london-fire-mobile.jpg',
      references: [
        {
          sourceType: SourceType.Image,
          value: this.sanitizer.bypassSecurityTrustUrl("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Great_Fire_London.jpg/600px-Great_Fire_London.jpg")
        },
        {
          sourceType: SourceType.Link,
          value: 'https://en.wikipedia.org/wiki/Great_Fire_of_London'
        },
      ]
    },
    {
      "id": 5,
      "title": "Indian Independence",
      "date": "1947",
      "description": "India gained independence from British rule, marking the end of British colonialism in the Indian subcontinent and the beginning of a new era for the world's largest democracy.",
      desktop_image: 'assets/indian-independence-desktop.jpg',
      mobile_image: 'assets/indian-independence-mobile.jpg',
      references: [
        {
          sourceType: SourceType.Link,
          value: 'https://en.wikipedia.org/wiki/Indian_independence_movement'
        },
      ]
    },
    {
      "id": 6,
      "title": "End of Apartheid in South Africa",
      "date": "1994",
      "description": "Nelson Mandela was elected as the first black president of South Africa in the country's first fully representative democratic election, marking the end of apartheid and the beginning of a new era of reconciliation and democracy.",
      desktop_image: 'assets/Apartheid-SA-desktop.jpg',
      mobile_image: 'assets/Apartheid-SA-mobile.jpg',
      references: [
        {
          sourceType: SourceType.YoutubeVideo,
          value: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/ke4kVFycpYY')
        },
        {
          sourceType: SourceType.Link,
          value: 'https://www.britannica.com/question/How-did-apartheid-end'
        },
      ]
    }
  ]

  timeLineDataObservable = new BehaviorSubject(this.timeLineData);

  setTimeLineData(value: any) {
    this.timeLineDataObservable.next(value);
  }

  filterTimeLineDate(keywords: any) {
    if (!keywords.length) {
      this.setTimeLineData(this.timeLineData);
      return
    }
    const filteredData: any = this.timeLineData.filter((obj) => {
      const found = keywords.some((keyword: string) => {
        return obj.title.toLowerCase().includes(keyword) || obj.date.includes(keyword) || obj.description.toLowerCase().includes(keyword)
      })

      return found;
    });
    this.setTimeLineData(filteredData);
  }
}
