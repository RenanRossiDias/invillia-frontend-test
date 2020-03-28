import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ivl-swatitle',
  templateUrl: './swatitle.component.html',
  styleUrls: ['./swatitle.component.scss']
})
export class SwatitleComponent implements OnInit {

  constructor() { }

  @Input() title: string
  @Input() subtitle: string

  ngOnInit() {
  }

}
