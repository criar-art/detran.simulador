import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { RouterTestingModule } from "@angular/router/testing";
import { MaterialModule } from 'src/app/core/material/material.module';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let title: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent, NavigationComponent ],
      imports: [ RouterTestingModule, MaterialModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    component.title = 'Simulador Detran';
    title = fixture.nativeElement.querySelector('h1');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Simulador Detran'`, () => {
    expect(component.title).toEqual('Simulador Detran');
  });

  it(`should have as title 'Brasil Simulador Detran'`, () => {
    expect(title.textContent?.trim()).toEqual('Brasil Simulador Detran');
  });
});
