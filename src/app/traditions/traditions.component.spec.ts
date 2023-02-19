import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraditionsComponent } from './traditions.component';

describe('TraditionsComponent', () => {
  let component: TraditionsComponent;
  let fixture: ComponentFixture<TraditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraditionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
