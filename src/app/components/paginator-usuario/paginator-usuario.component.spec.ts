import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorUsuarioComponent } from './paginator-usuario.component';

describe('PaginatorUsuarioComponent', () => {
  let component: PaginatorUsuarioComponent;
  let fixture: ComponentFixture<PaginatorUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginatorUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginatorUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
