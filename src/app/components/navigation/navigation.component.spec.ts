import { ComponentFixture, TestBed } from '@angular/core/testing';
import pkg from 'package.json';

import { NavigationComponent } from './navigation.component';
import { RouterTestingModule } from "@angular/router/testing";
import { MaterialModule } from 'src/app/core/material/material.module';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;
  let version: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationComponent ],
      imports: [
        RouterTestingModule,
        MaterialModule
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    component.appVersion = pkg.version;
    version = fixture.nativeElement.querySelector('.version span');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as appVersion`, () => {
    expect(component.appVersion).toEqual(pkg.version);
  });
  it(`should have as version in navigation`, () => {
    expect(version.textContent).toEqual(`Versão: ${pkg.version}`);
  });
});
