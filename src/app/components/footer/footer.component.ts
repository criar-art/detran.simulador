import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() name?: string;
  @Input() author?: string;
  @Input() company?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
