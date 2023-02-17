import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home-flower',
  templateUrl: './home-flower.component.html',
  styleUrls: ['./home-flower.component.css']
})

export class HomeFlowerComponent implements OnInit {
  plants: any[] = [];
  categories_plants: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const contains = (arr: string[], elem: string) => {
      for (var i = 0; i < arr.length; i++) {
          if (arr[i] === elem) {
              return true;
          }
      }
      return false;
    }

    console.log("qwsedf");


    this.http.get<any[]>('https://api.petiteweb.dev/plants').subscribe(data => {
      const category: string[] = []
      this.categories_plants = data;

      for (let i = 0; i < data.length; i++) {
        const item = data[i];


        if (!contains(category, item.category) && item.category !== "" && item.category !== undefined) category.push(item.category)
      }

      this.categories_plants = category
    });
  }

}
