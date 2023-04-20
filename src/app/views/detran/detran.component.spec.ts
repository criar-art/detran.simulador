import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetranComponent } from './detran.component';

describe('DetranComponent', () => {
  let component: DetranComponent;
  let fixture: ComponentFixture<DetranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetranComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('validation list detran links', () => {
    let detranList = fixture.nativeElement.querySelectorAll('.detran-link');

    for(let [index, item] of detranList.entries()) {
      expect(item.textContent).toEqual(component.states[index].name);
      expect(item.href).toEqual(component.states[index].url + '/');
    }
  });
});
