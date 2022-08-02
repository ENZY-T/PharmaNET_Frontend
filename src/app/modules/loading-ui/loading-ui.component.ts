import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-ui',
  templateUrl: './loading-ui.component.html',
  styleUrls: ['./loading-ui.component.scss']
})
export class LoadingUiComponent implements OnInit {

  @Input() Title?: String;
  @Input() blockedDocument: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
