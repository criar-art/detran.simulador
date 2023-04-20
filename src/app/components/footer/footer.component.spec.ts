import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let title: HTMLElement;
  let link: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    component.name = 'Simulador Detran';
    component.author = '@lucasferreiralimax';
    component.company = 'Ⓒriar.art';
    title = fixture.nativeElement.querySelector('footer');
    link = fixture.nativeElement.querySelector('a');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Simulador Detran'`, () => {
    expect(component.name).toEqual('Simulador Detran');
  });

  it(`should have as author '@lucasferreiralimax'`, () => {
    expect(component.author).toEqual('@lucasferreiralimax');
  });

  it(`should have as title 'Simulador Detran Ⓒriar.art'`, () => {
    expect(title.textContent?.trim()).toEqual('Simulador Detran Ⓒriar.art');
  });

  it(`should have as link for github`, () => {
    expect(link.getAttribute('href')).toEqual('https://github.com/criar-art');
  });
});
