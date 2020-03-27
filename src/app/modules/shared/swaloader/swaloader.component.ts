import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ivl-swaloader',
  templateUrl: './swaloader.component.html',
  styleUrls: ['./swaloader.component.scss']
})
export class SwaloaderComponent implements OnInit {

  constructor() { }

  @Input()loading: any
  ngOnInit() {
    console.log(this.loading);
    
  }

}
