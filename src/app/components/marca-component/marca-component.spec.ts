import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarcaComponent } from './marca-component';

describe('MarcaComponent', () => {
  let component: MarcaComponent;
  let fixture: ComponentFixture<MarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarcaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MarcaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
