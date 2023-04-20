import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteComponent } from './dialog-delete.component';
import { MaterialModule } from 'src/app/core/material/material.module';

describe('DialogDeleteComponent', () => {
  let component: DialogDeleteComponent;
  let fixture: ComponentFixture<DialogDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDeleteComponent ],
      imports: [
        MaterialModule
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
