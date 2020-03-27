import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/core/services/characters.service';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/core/models/entities/character/character.model';
import Starship from 'src/app/core/models/entities/starship/starship.model';
import { StarshipsService } from 'src/app/core/services/starships.service';

@Component({
  selector: 'app-detail-character',
  templateUrl: './detail-character.component.html',
  styleUrls: ['./detail-character.component.scss']
})
export class DetailCharacterComponent implements OnInit {

  constructor(private route: ActivatedRoute, private charactersService: CharactersService, private starshipsService: StarshipsService) {
    this.character = new Character()
    this.starships = []
    this.characterId = +this.route.snapshot.params.id
  }

  private characterId: number
  private character: Character
  private starships: Array<Starship>

  async ngOnInit() {
    await this.retrieveCharacter(this.characterId)
    await this.retrieveStarships()
  }

  async retrieveCharacter(characterId: number) {
    this.character = await this.charactersService.retrieveCharacter(characterId)
    this.character = Object.assign(new Character, this.character)
  }

  async retrieveStarships() {
    this.starships = await Promise.all(
      this.character.starships.map(starshipUri =>
        this.starshipsService.retrieveStarship(starshipUri)))
  }

}
