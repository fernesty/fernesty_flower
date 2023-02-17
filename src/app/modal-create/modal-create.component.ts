import { Component, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modal-create',
  templateUrl: './modal-create.component.html',
  styleUrls: ['./modal-create.component.css']
})

export class ModalCreateComponent {

  constructor(private http: HttpClient) {}


  name: string = '';
  description: string = '';
  image_link: string = '';
  category: string = '';
  sun: string = '';
  watering: string = '';
  temperature: string = '';

  create() {
    console.log(
      this.name,
      this.description,
      this.image_link,
      this.category,
      this.sun,
      this.watering,
      this.temperature
    );

    let plants = {
      name: this.name,
      description: this.description,
      images: this.image_link,
      category: this.category,
      sunlight: +this.sun,
      watering: +this.watering,
      temperature: +this.temperature,
    }

    this.http.post<{name: string}>('https://api.petiteweb.dev/plants', plants)
    .subscribe((res) =>{
      console.log(res)
      alert("Ваше растение добавлено!")
    })

    // this.http.post<any[]>('https://api.petiteweb.dev/plants', JSON.stringify()).subscribe(data => {
    //   console.log(data);
    //   alert("Ваше растение добавленно !")
    // })
  }

}
