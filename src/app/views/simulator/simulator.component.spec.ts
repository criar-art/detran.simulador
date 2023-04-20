import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { SimulatorComponent } from './simulator.component';
import { RouterTestingModule } from "@angular/router/testing";
import { MaterialModule } from 'src/app/core/material/material.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('SimulatorComponent', () => {
  let component: SimulatorComponent;
  let fixture: ComponentFixture<SimulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulatorComponent ],
      imports: [
        RouterTestingModule,
        MaterialModule,
        FormsModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should allow us to set a bound input field with Lucas', fakeAsync(() => {
    setInputValue('#name', 'Lucas');
    expect(component.name).toEqual('Lucas');
  }));

  it('should result button with name', fakeAsync(() => {
    expect(resultButton()).toEqual('Iniciar teste avançado  - Lucas');
  }));

  function setInputValue(selector: string, value: string) {
    fixture.detectChanges();
    tick();

    let input = fixture.debugElement.query(By.css(selector)).nativeElement;
    input.value = value;
    input.dispatchEvent(new Event('input'));
    tick();
  }

  function resultButton() {
    fixture.detectChanges();
    tick();

    let result = fixture.debugElement.query(
      By.css('.btn-start')
    ).nativeElement.textContent.replace('play_circle', '');

    tick();
    return result;
  }
});
