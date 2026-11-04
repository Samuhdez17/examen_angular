import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuboComponent } from './cubo-component';

describe('CuboComponent', () => {
  let component: CuboComponent;
  let fixture: ComponentFixture<CuboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CuboComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CuboComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
