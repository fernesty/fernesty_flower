import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-flower-category',
  templateUrl: './flower-category.component.html',
  styleUrls: ['./flower-category.component.css']
})

export class FlowerCategoryComponent  implements OnInit {
  plants: any[] = [];
  categories_plants: any[] = [];
  active_category: string = "";

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {

    const active_category = decodeURI(this.router.url.split('/')[2])

    this.http.get<any[]>('https://api.petiteweb.dev/plants').subscribe(data => {
      const category: string[] = []
      // this.categories_plants = data;

      for (let i = 0; i < data.length; i++) {
        const item = data[i];

        if (item.category === active_category) category.push(item)
      }

      this.categories_plants = category
      this.active_category = active_category
    });
  }

}
