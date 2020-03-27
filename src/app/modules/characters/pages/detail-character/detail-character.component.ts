import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/core/services/characters.service';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/core/models/entities/character/character.model';

@Component({
  selector: 'app-detail-character',
  templateUrl: './detail-character.component.html',
  styleUrls: ['./detail-character.component.scss']
})
export class DetailCharacterComponent implements OnInit {

  constructor(private route : ActivatedRoute, private charactersService :CharactersService) { 
    this.character = new Character()
    this.characterId = +this.route.snapshot.params.id
  }

  private characterId: number
  private character: Character

  ngOnInit() {
    this.retrieveCharacter(this.characterId)
  }

  async retrieveCharacter(characterId: number){
    this.character = await this.charactersService.retrieveCharacter(characterId)
  }

}
