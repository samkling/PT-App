import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoNavBarComponent } from './logo-nav-bar.component';

describe('LogoNavBarComponent', () => {
  let component: LogoNavBarComponent;
  let fixture: ComponentFixture<LogoNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
