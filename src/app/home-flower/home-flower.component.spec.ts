import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFlowerComponent } from './home-flower.component';

describe('HomeFlowerComponent', () => {
  let component: HomeFlowerComponent;
  let fixture: ComponentFixture<HomeFlowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFlowerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeFlowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
