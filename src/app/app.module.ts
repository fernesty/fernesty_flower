import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllFlowersComponent } from './all-flowers/all-flowers.component';
import { FlowerPageComponent } from './flower-page/flower-page.component';
import { FlowerCategoryComponent } from './flower-category/flower-category.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeFlowerComponent } from './home-flower/home-flower.component';
import { ModalCreateComponent } from './modal-create/modal-create.component';
import { AboutSiteComponent } from './about-site/about-site.component';

@NgModule({
  declarations: [
    AppComponent,
    AllFlowersComponent,
    FlowerPageComponent,
    FlowerCategoryComponent,
    HomeFlowerComponent,
    ModalCreateComponent,
    AboutSiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
