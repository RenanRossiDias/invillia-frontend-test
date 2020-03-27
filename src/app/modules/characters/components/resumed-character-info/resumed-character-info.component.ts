import { Component, OnInit, Input } from '@angular/core';
import { Character } from 'src/app/core/models/entities/character/character.model';

@Component({
  selector: 'ivl-resumed-character-info',
  templateUrl: './resumed-character-info.component.html',
  styleUrls: ['./resumed-character-info.component.scss']
})
export class ResumedCharacterInfoComponent implements OnInit {

  constructor() { }

  @Input('character') character: Character = new Character()


  ngOnInit() {
    /*
    This assign is needed because at this point, '@input product' type is 
    just a shallow copy of Product type: It contains no methods but it's properties only.
    Source: https://stackoverflow.com/a/51764292
    */
    this.character = Object.assign(new Character, this.character)
  }

}
