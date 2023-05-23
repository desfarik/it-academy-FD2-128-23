import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meal';
  meal = null;

  async fetchNextMeal() {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    const data = await response.json();
    this.meal = data.meals[0];
  }

}
