import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-all-flowers',
  templateUrl: './all-flowers.component.html',
  styleUrls: ['./all-flowers.component.css']
})


export class AllFlowersComponent implements OnInit {
  plants: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const localPlants: any[] = []

    function isValidUrl(url: string) {
        var objRE = /(^https?:\/\/)?[a-z0-9~_\-\.]+\.[a-z]{2,9}(\/|:|\?[!-~]*)?$/i;
        return objRE.test(url);
      }


    this.http.get<any[]>('https://api.petiteweb.dev/plants').subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        const element = data[i];

        if (element.name) {
          if (element.images.length < 1) element.images.push('https://cdn.shopify.com/s/files/1/0844/3469/products/800-FantastFlower3_Color_2x_7affbb82-3ffc-4255-a83e-a2ba6be85ffb_grande.png?v=1514338131')

          if (!isValidUrl(element.images[0])) element.images[0] = 'https://cdn.shopify.com/s/files/1/0844/3469/products/800-FantastFlower3_Color_2x_7affbb82-3ffc-4255-a83e-a2ba6be85ffb_grande.png?v=1514338131'

          if (!element.description) element.description = "(без описание)"

          localPlants.push(element)
        }

      }
    });

    this.plants = localPlants;
  }

}
