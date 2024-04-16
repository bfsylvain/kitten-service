import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptedKittenComponent } from './adopted-kitten.component';

describe('AdoptedKittenComponent', () => {
  let component: AdoptedKittenComponent;
  let fixture: ComponentFixture<AdoptedKittenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdoptedKittenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdoptedKittenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
