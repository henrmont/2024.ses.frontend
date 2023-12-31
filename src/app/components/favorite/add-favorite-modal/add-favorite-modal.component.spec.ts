import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFavoriteModalComponent } from './add-favorite-modal.component';

describe('AddFavoriteModalComponent', () => {
  let component: AddFavoriteModalComponent;
  let fixture: ComponentFixture<AddFavoriteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFavoriteModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddFavoriteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
