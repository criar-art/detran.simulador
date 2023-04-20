import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalComponent } from './signal.component';
import { MaterialModule } from 'src/app/core/material/material.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import signalsList from 'src/app/core/signals';

describe('SignalComponent', () => {
  let component: SignalComponent;
  let fixture: ComponentFixture<SignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignalComponent ],
      imports: [ MaterialModule, BrowserAnimationsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // @todo refactory
  it('check list content of signals', () => {
    for(let [index, item] of component.signals.entries()) {
      expect(item.title).toEqual(signalsList[index].title);
      expect(item.list).toEqual(signalsList[index].list);

      for(let [i, signal] of item.list.entries()) {
        expect(signal.title).toEqual(signalsList[index].list[i].title);
        expect(signal.subtitle).toEqual(signalsList[index].list[i].subtitle);
        expect(signal.photo).toEqual(signalsList[index].list[i].photo);
        expect(signal.description).toEqual(signalsList[index].list[i].description);
      }
    }
  });
});
