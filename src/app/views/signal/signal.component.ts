import { Component, OnInit } from '@angular/core';

import signalsList from 'src/app/core/signals';

@Component({
  selector: 'app-signal',
  templateUrl: './signal.component.html',
  styleUrls: ['./signal.component.scss']
})
export class SignalComponent implements OnInit {

  signals = signalsList;

  constructor() { }

  ngOnInit(): void {
  }

}
