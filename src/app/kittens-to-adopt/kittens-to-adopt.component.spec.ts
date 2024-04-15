import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KittensToAdoptComponent } from './kittens-to-adopt.component';

describe('KittensToAdoptComponent', () => {
  let component: KittensToAdoptComponent;
  let fixture: ComponentFixture<KittensToAdoptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KittensToAdoptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KittensToAdoptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
