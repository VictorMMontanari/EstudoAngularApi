import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ComponentFixture } from '@angular/core/testing'; // Correção aqui

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>; // Correção aqui

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display a list of products', () => {
    expect(fixture.nativeElement.querySelector('ul')).toBeTruthy();
  });
});
