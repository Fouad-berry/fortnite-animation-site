import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmeticsListComponent } from './cosmetics-list.component';

describe('CosmeticsListComponent', () => {
  let component: CosmeticsListComponent;
  let fixture: ComponentFixture<CosmeticsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CosmeticsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CosmeticsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
