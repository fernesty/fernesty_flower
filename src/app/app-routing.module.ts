import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AllFlowersComponent } from './all-flowers/all-flowers.component';
import { FlowerCategoryComponent } from './flower-category/flower-category.component';
import { FlowerPageComponent } from './flower-page/flower-page.component';
import { HomeFlowerComponent } from './home-flower/home-flower.component';
import { ModalCreateComponent } from './modal-create/modal-create.component';
import { AboutSiteComponent } from './about-site/about-site.component'

const routes: Routes = [
  { path: '', component: HomeFlowerComponent },
  { path: 'flowers', component: AllFlowersComponent },
  { path: 'category/:id', component: FlowerCategoryComponent },
  { path: 'flower/:id', component: FlowerPageComponent },
  { path: 'create', component: ModalCreateComponent },
  { path: 'about', component: AboutSiteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
