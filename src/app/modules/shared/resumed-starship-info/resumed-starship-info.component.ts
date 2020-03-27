import { Component, OnInit, Input } from '@angular/core';
import Starship from 'src/app/core/models/entities/starship/starship.model';

@Component({
  selector: 'ivl-resumed-starship-info',
  templateUrl: './resumed-starship-info.component.html',
  styleUrls: ['./resumed-starship-info.component.scss']
})
export class ResumedStarshipInfoComponent implements OnInit {

  constructor() { 
    
  }

  @Input()starship : Starship
  ngOnInit() {
        /*
    This assign is needed because at this point, '@input product' type is 
    just a shallow copy of Product type: It contains no methods but it's properties only.
    Source: https://stackoverflow.com/a/51764292
    */
   this.starship = Object.assign(new Starship, this.starship)
  }

}
Starship