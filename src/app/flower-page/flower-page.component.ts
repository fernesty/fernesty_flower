import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flower-page',
  templateUrl: './flower-page.component.html',
  styleUrls: ['./flower-page.component.css']
})

export class FlowerPageComponent implements OnInit {
  plant: any = null;
  id: string = "";

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {

    const active_id = decodeURI(this.router.url.split('/')[2])

    this.http.get<any[]>(`https://api.petiteweb.dev/plants/${active_id}`).subscribe(data => {

    this.plant = data
      // for (let i = 0; i < data.length; i++) {
      //   const item = data[i];

      //   if (item._id === active_id) this.plant = item
      // }
    });
  }

}
