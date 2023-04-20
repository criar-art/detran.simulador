import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-donate  ',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {

  constructor(private clipboard: Clipboard) { }

  art: string = 'contato@criar.art';
  lembre: string = '2lembre@gmail.com';
  lucas: string = 'lucasferreiralimax@gmail.com';

  ngOnInit(): void {
  }

  copyValue(value: string) {
    this.clipboard.copy(value);
  }
  selectAll({ target }: any) {
    target.select();
  }
}
