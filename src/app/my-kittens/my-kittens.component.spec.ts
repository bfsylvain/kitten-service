import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyKittensComponent } from './my-kittens.component';

describe('MyKittensComponent', () => {
  let component: MyKittensComponent;
  let fixture: ComponentFixture<MyKittensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyKittensComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyKittensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
