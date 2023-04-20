import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateComponent } from './donate.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/core/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DonateComponent', () => {
  let component: DonateComponent;
  let fixture: ComponentFixture<DonateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonateComponent ],
      imports: [
        FormsModule,
        MaterialModule,
        BrowserAnimationsModule
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
