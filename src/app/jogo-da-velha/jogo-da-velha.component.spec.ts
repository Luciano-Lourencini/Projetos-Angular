import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogoDaVelhaComponent } from './jogo-da-velha.component';

import { JogoDaVelhaService } from './shared'

describe('JogoDaVelhaComponent', () => {
  let component: JogoDaVelhaComponent;
  let fixture: ComponentFixture<JogoDaVelhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JogoDaVelhaComponent ],
      providers: [JogoDaVelhaService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JogoDaVelhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
