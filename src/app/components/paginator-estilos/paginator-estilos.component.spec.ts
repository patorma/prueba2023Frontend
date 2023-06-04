import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorEstilosComponent } from './paginator-estilos.component';

describe('PaginatorEstilosComponent', () => {
  let component: PaginatorEstilosComponent;
  let fixture: ComponentFixture<PaginatorEstilosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginatorEstilosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginatorEstilosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
