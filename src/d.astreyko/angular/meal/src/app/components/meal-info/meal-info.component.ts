import {Component, Input} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'meal-info',
  templateUrl: './meal-info.component.html',
  styleUrls: ['./meal-info.component.css']
})
export class MealInfoComponent {

  @Input() meal: any;

  constructor(public sanitizer: DomSanitizer) {
  }

  get ingredients() {
    const ingredientKeys = Object.keys(this.meal)
      .filter(key => key.startsWith('strIngredient'))
      .filter(key => !!this.meal[key].trim())

    return ingredientKeys.map((key, index) => {
      const measure = this.meal['strMeasure' + (index + 1)]
      return `${this.meal[key]} - ${measure}`;
    })
  }


  get youtubeUrl() {
    const embedUrl = this.meal.strYoutube.replace('watch?v=', 'embed/');
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl)
  }
}
