import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarEventosComponent } from './registrar-eventos.component';

describe('RegistrarEventosComponent', () => {
  let component: RegistrarEventosComponent;
  let fixture: ComponentFixture<RegistrarEventosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarEventosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
