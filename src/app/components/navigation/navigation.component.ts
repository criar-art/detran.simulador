import { Component, OnInit, ElementRef  } from '@angular/core';
import pkg from 'package.json';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  host: {
    '(document:click)': 'onClickOutside($event)',
  },
})
export class NavigationComponent implements OnInit {

  public appVersion?: string;

  constructor(private _eref: ElementRef) {
    this.appVersion = pkg.version
  }

  statusMenu: boolean = false;

  ngOnInit(): void {
  }

  onClickOutside(event: any) {
    if (!this._eref.nativeElement.contains(event.target)) {
      this.statusMenu = false;
    }
  }

  onMenu() {
    this.statusMenu = !this.statusMenu;
  }

}
