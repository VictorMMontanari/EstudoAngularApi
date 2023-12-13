import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoingeckoComponent } from './coingecko.component';

describe('CoingeckoComponent', () => {
  let component: CoingeckoComponent;
  let fixture: ComponentFixture<CoingeckoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoingeckoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoingeckoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
