import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoMusicalComponent } from './tipo-musical.component';

describe('TipoMusicalComponent', () => {
  let component: TipoMusicalComponent;
  let fixture: ComponentFixture<TipoMusicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoMusicalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoMusicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
